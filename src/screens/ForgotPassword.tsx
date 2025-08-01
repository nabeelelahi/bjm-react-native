import React from 'react'
import { BaseContainer } from '@/src/components/shared/BaseContainer'
import { ThemedText } from '@/src/components/shared/ThemedText'
import { ActivityIndicator, Image, ImageBackground, StyleSheet, Text } from 'react-native'
import { cross, loginBackground } from '@/src/assets'
import AuthInput from '../components/form/AuthInput'
import BaseButton from '../components/shared/BaseButton'
import { WIDTH } from '../constants/Metrices'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
});


const ForgotPassword = ({ route }: any) => {
    const { forgotPassword, loading } = useAuth();
    return (
        <BaseContainer>
            <ImageBackground style={styles.mainView} source={loginBackground}>
                <Formik
                    initialValues={{ email: route.params.email }}
                    validationSchema={validationSchema}
                    onSubmit={forgotPassword}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>

                            <ThemedText style={styles.title} type='title'>Recover Password</ThemedText>
                            <AuthInput
                                onBlur={handleBlur('email')}
                                onChangeText={handleChange('email')}
                                placeholder='Email'
                                value={values.email}
                            />
                            {touched.email && errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
                            {
                                loading ?
                                    <ActivityIndicator style={{ marginTop: 25 }} size={'large'} />
                                    :
                                    <BaseButton onPress={handleSubmit} title='Submit' />
                            }
                            <ThemedText style={styles.bottomText} >We will send a recovery code to your email.</ThemedText>
                        </>
                    )}
                </Formik>
            </ImageBackground>
        </BaseContainer>
    )
}

export default ForgotPassword

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