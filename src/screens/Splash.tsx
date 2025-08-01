import { ImageBackground, StyleSheet, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { splashBg, splashLogo } from '../assets';
import { WIDTH } from '../constants/Metrices';
import { useNavigation } from '@react-navigation/native';
import { getStorageData } from '../utils/storage';
import { addUser, useUser } from '../context/userContext';

const Splash = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
    const [, dispatch] = useUser();
    useEffect(() => {
        const user = getStorageData('user');
        addUser(dispatch, user);
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
        setTimeout(() => {
            if (Object.values(user).length) {
                navigation.navigate('Tabs' as never);
            }
            else {
                navigation.navigate('Login' as never);
            }
        }, 1200);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ImageBackground style={styles.container} source={splashBg}>
            <Animated.Image resizeMode="contain" style={[styles.logo, { opacity: fadeAnim }]} source={splashLogo} />
        </ImageBackground>
    );
};

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: WIDTH(60),
    },

});
