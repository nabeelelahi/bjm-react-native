import React, { useState } from 'react'
import { BaseContainer } from '@/src/components/shared/BaseContainer'
import { ThemedText } from '@/src/components/shared/ThemedText'
import { ActivityIndicator, ImageBackground, StyleSheet, View } from 'react-native'
import { loginBackground } from '@/src/assets'
import BaseButton from '../components/shared/BaseButton'
import { WIDTH } from '../constants/Metrices'
import { useAuth } from '../hooks/useAuth'
import { OtpInput } from "react-native-otp-entry";
import { Colors } from '../constants/Colors'
import { useToast } from "react-native-toast-notifications";
import { useNavigation } from '@react-navigation/native'

const OTP = ({ route }: any) => {
    const { verifyCode, loading } = useAuth();
    const navigation = useNavigation();
    const [code, setCode] = useState('');

    return (
        <BaseContainer>
            <ImageBackground style={styles.mainView} source={loginBackground}>
                <ThemedText style={styles.title} type='title'>Enter Verification Code</ThemedText>
                <View style={styles.otpView}>
                    <OtpInput
                        numberOfDigits={4}
                        focusColor={Colors.dark.primary}
                        onTextChange={(text) => setCode(text)}
                    />
                </View>
                {
                    loading ?
                        <ActivityIndicator style={{ marginTop: 25 }} size={'large'} />
                        :
                        <BaseButton onPress={() => verifyCode({
                            identifier: route.params.identifier,
                            code
                        })} disabled={code.length !== 4} title='Submit' />
                }
                <ThemedText style={styles.bottomText} >We will send a recovery code to your email.</ThemedText>
            </ImageBackground>
        </BaseContainer>
    )
}

export default OTP

const styles = StyleSheet.create({
    logo: {
        // height: 100,
        width: 100
    },
    title: {
        paddingTop: 10,
        paddingBottom: 35
    },
    otpView: {
        marginVertical: 25,
        backgroundColor: 'transparent'
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