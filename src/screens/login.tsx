import React from 'react'
import { BaseContainer } from '@/src/components/shared/BaseContainer'
import { ThemedText } from '@/src/components/shared/ThemedText'
import { Image, ImageBackground, StyleSheet, Text } from 'react-native'
import { cross, loginBackground } from '@/src/assets'
import AuthInput from '../components/form/AuthInput'
import BaseButton from '../components/shared/BaseButton'
import { WIDTH } from '../constants/Metrices'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../hooks/useAuth'

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Too short').required('Password is required'),
});


const Login = () => {
    const navigation = useNavigation();
    const { login } = useAuth();
    return (
        <BaseContainer>
            <ImageBackground style={styles.mainView} source={loginBackground}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={login}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            <Image style={styles.logo} source={cross} />
                            <ThemedText style={styles.title} type='title'>User Login</ThemedText>
                            <AuthInput
                                onBlur={handleBlur('email')}
                                onChangeText={handleChange('email')}
                                placeholder='Email or Username'
                                value={values.email}
                            />
                            {touched.email && errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
                            <AuthInput
                                onBlur={handleBlur('password')}
                                onChangeText={handleChange('password')}
                                placeholder='Password'
                                value={values.password}
                            />
                            {touched.password && errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
                            <ThemedText style={styles.forgotLink} type='defaultSemiBold'>Forgot Password?</ThemedText>
                            <BaseButton onPress={handleSubmit} title='Login' />
                            <ThemedText style={styles.bottomText} >This app is only for Registered users</ThemedText>
                        </>
                    )}
                </Formik>
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