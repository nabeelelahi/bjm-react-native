import { useState } from 'react';
import { request } from '../repository/request';
import { ResponseError } from '../@types/Api';
import { setStorageData } from '../utils/storage';
import { useToast } from "react-native-toast-notifications";
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
export const useAuth = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);
    const toast = useToast();
    const handleFailure = (response: ResponseError) => {
        setLoading(false);
        if (!response) { return; }
        response.data.message.forEach((message: string) => {
            // Alert.alert(message)
            toast.show(message, {
                type: 'danger'
            });
        });
    };

    const login = (values: { email: string; password: string }) => {
        setLoading(true);
        request('user/login', 'POST')
            .setAuth(false)
            .setBody({ ...values, device: 'web', device_token: '1234567890' }, 'json')
            .onSuccess((repsonse, headers) => {
                setLoading(false);
                // @ts-ignore
                setStorageData('user', repsonse.data);
                setStorageData('access-token', { 'access-token': headers['access-token'] });
                navigation.navigate('Tabs' as never);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Tabs' as never }],
                });
            })
            // @ts-expect-error @ts-ignore
            .onFailure(handleFailure)
            .call();
    };

    return {
        loading,
        login,
    };
};
