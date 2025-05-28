import { useState, useEffect } from 'react';
import { request } from '../repository/request';
import { GenericType, UseRequestOptions, UseRequestReturn } from '../@types/Api';
import { AxiosResponseHeaders } from 'axios';
import { Pagination } from '../@types/Api';
import Toast from 'react-native-toast-message';
import { removeStorageData } from '../utils/storage';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

/**
 * Custom React Hook for making HTTP requests using HttpService.
 * @param endpoint - The API endpoint.
 * @param method - HTTP method ('get', 'post', 'put', etc.).
 * @param options - Options for the request (optional).
 * @returns Object containing data, loading, error, and a function to trigger the request manually.
 */
export function useRequest<T>(
    endpoint: string,
    method: string,
    options: UseRequestOptions<T>
): UseRequestReturn<T> {
    const [data, setData] = useState<T>([] as T);
    const [loading, setLoading] = useState<boolean>(false);
    const [service, setService] = useState(request(endpoint, method));
    const [error, setError] = useState<{
        message: string;
        status?: number;
    } | null>(null);
    const [pagination, setPagination] = useState<Pagination>({
        perPage: 10,
        currentPage: 1,
    });
    const navigation = useNavigation()

    const execute = async (requestOptions: Partial<UseRequestOptions<T>> = {}) => {
        setLoading(true);
        setError(null);
        const apiOptions = {
            ...requestOptions,
            ...options,
        };
        try {
            const {
                body,
                params,
                headers,
                auth,
                routeParams,
                body_type = 'json',
            } = apiOptions;
            if (auth !== undefined) { service.setAuth(auth); }
            if (params) { service.setParams(params); }
            if (body) { service.setBody(body, body_type); }
            if (headers) { service.setHeaders(headers); }
            if (routeParams) { service.setRouteParams(routeParams); }
            await service
                .onSuccess(
                    (response_body: any, response_headers: AxiosResponseHeaders) => {
                        if (apiOptions.cbSuccess) { apiOptions.cbSuccess(response_body, response_headers); }
                        setData(response_body.data as T);
                        console.log(response_body, 'response_body');

                        if (response_body.pagination) {
                            setPagination({
                                count: response_body.pagination.count,
                                perPage: response_body.pagination.perPage,
                                currentPage: response_body.pagination.currentPage,
                            });
                        }
                    }
                )
                .onFailure((err: any) => {
                    console.log('err.....', err);
                    if (apiOptions.cbFailure) { apiOptions.cbFailure(err); }
                    if (err.statusCode === 401) {
                        removeStorageData('user');
                        removeStorageData('access-token');
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [
                                    { name: 'Splash' }, // Replace 'Home' with your root/index route
                                ],
                            })
                        );
                    }
                    if (err.statusCode === 400) {
                        console.warn('Bad Request', err);
                        Toast.show({ type: 'error', text1: err.message });
                    }
                })
                .call();
        } catch (err) {
            console.error('Unhandled error:', err);
            setError({ message: 'Something went wrong', ...(err as GenericType) });
        } finally {
            setLoading(false);
            setService(request(endpoint, method));
        }
    };
    const onPaginationChange = () => {
        setPagination(p => ({ ...p, currentPage: p.currentPage + 1 }));
        // setTimeout(() => execute({
        //     params: {
        //         ...service.config.params,
        //         page: pagination.currentPage + 1,
        //     }
        // }), 1000);
    }

    useEffect(() => {
        if (options.type === 'mount' && endpoint && method) {
            if (options.pagination) {
                if (!options.params) { options.params = {}; }
                options.params.page = 1;
                options.params.limit = pagination.perPage;
            }
            execute(options);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        data,
        loading,
        error,
        execute,
        setData,
        pagination,
        onPaginationChange,
    };
}
