import React from 'react'
import { BaseContainer } from '@/src/components/shared/BaseContainer'
import { ThemedText } from '@/src/components/shared/ThemedText'
import { Image, ImageBackground, StyleSheet } from 'react-native'
import { cross, loginBackground } from '@/src/assets'
import AuthInput from '../components/form/AuthInput'
import BaseButton from '../components/shared/BaseButton'
import { WIDTH } from '../constants/Metrices'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation();
    return (
        <BaseContainer>
            <ImageBackground style={styles.mainView} source={loginBackground}>
                <Image style={styles.logo} source={cross} />
                <ThemedText style={styles.title} type='title'>User Login</ThemedText>
                <AuthInput placeholder='Email or Username' />
                <AuthInput placeholder='Password' />
                <ThemedText style={styles.forgotLink} type='defaultSemiBold'>Forgot Password?</ThemedText>
                <BaseButton onPress={() => navigation.navigate('Tabs' as never)} title='Login' />
                <ThemedText style={styles.bottomText} >This app is only for Registered users</ThemedText>
            </ImageBackground>
        </BaseContainer>
    )
}

export default Login

const styles = StyleSheet.create({
    logo: {
        // height: 100,
        width: 100
    },
    title: {
        paddingTop: 10,
        paddingBottom: 35
    },
    mainView: {
        padding: 30,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    forgotLink: {
        paddingVertical: 7.5,
        alignSelf: 'flex-end',
    },
    bottomText: {
        paddingVertical: 7.5,
        textAlign: 'center',
        width: WIDTH(80),
        marginVertical: 25,
        fontSize: 20
    }
})