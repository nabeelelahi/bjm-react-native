import { useState } from 'react';
import { request } from '../repository/request';
import { ResponseError } from '../@types/Api';
import { setStorageData } from '../utils/storage';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
export const useAuth = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);
    const handleFailure = (response: ResponseError) => {
        setLoading(false);
        if (!response) { return; }
        response.message.forEach((message: string) => {
            Toast.show({ type: 'error', text1: message });
        });
        console.log('error', response);
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
