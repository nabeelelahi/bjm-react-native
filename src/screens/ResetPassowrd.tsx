import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import BaseButton from "@/src/components/shared/BaseButton";
import AuthInput from "../components/form/AuthInput";
import { BaseContainer } from "../components/shared/BaseContainer";
import { ThemedView } from "../components/shared/ThemedView";
import { Colors } from "../constants/Colors";
import { ThemedText } from "../components/shared/ThemedText";
import * as Yup from 'yup';
import { Formik } from "formik";
import { useRequest } from "../hooks/useRequest";
import Loader from "../components/shared/Loader";
import { useAuth } from "../hooks/useAuth";

const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Must include at least one uppercase letter")
        .matches(/[a-z]/, "Must include at least one lowercase letter")
        .matches(/\d/, "Must include at least one number")
        .matches(/[@$!%*?&]/, "Must include at least one special character")
        .required("Password is required"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm Password is required"),
});


const ResetPassowrd = ({route}: any) => {
    const {loading, resetPassword} = useAuth();
    return (
        <BaseContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground} style={styles.container}>
                    <Formik
                        initialValues={{ newPassword: '', confirmPassword: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => 
                            resetPassword({
                                password: values.newPassword, 
                                reset_password_token: route.params.reset_password_token
                            })}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

                            <View style={styles.formContainer}>
                                <ThemedText style={styles.title} type='title'>Reset Password</ThemedText>
                                <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground}>
                                    <ThemedText
                                        style={{ paddingHorizontal: 20 }}
                                        lightColor={Colors.light.text}
                                        darkColor={Colors.dark.text}
                                    >New Password</ThemedText>
                                    <AuthInput
                                        onBlur={handleBlur('newPassword')}
                                        onChangeText={handleChange('newPassword')}
                                        value={values.newPassword}
                                    />
                                    {touched.newPassword && errors.newPassword && <Text style={{ color: 'red', marginHorizontal: 15 }}>{errors.newPassword}</Text>}
                                </ThemedView>
                                <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground}>
                                    <ThemedText
                                        style={{ paddingHorizontal: 20 }}
                                        lightColor={Colors.light.text}
                                        darkColor={Colors.dark.text}
                                    >Confirm New Password</ThemedText>
                                    <AuthInput
                                        onBlur={handleBlur('confirmPassword')}
                                        onChangeText={handleChange('confirmPassword')}
                                        value={values.confirmPassword}
                                    />
                                    {touched.confirmPassword && errors.confirmPassword && <Text style={{ color: 'red', marginHorizontal: 15 }}>{errors.confirmPassword}</Text>}
                                </ThemedView>
                                {
                                    loading ?
                                        <Loader />
                                        :
                                        <BaseButton onPress={handleSubmit} title='Reset Password' />
                                }
                            </View>
                        )}
                    </Formik>
                </ThemedView>
            </ScrollView>
        </BaseContainer >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        paddingTop: 10,
        paddingBottom: 35
    },
    formContainer: {
        flex: 1,
        alignItems: "center",
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#5A189A",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
    },
    saveButton: {
        backgroundColor: "#004D71",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    saveButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default ResetPassowrd;
