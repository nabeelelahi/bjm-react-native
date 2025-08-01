import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import BaseButton from "@/src/components/shared/BaseButton";
import AuthInput from "../components/form/AuthInput";
import { BaseContainer } from "../components/shared/BaseContainer";
import { ThemedView } from "../components/shared/ThemedView";
import { Colors } from "../constants/Colors";
import { ThemedText } from "../components/shared/ThemedText";
import * as Yup from 'yup';
import { Formik } from "formik";
import { getStorageData, setStorageData } from "../utils/storage";
import { UserDto } from "../@types/User";
import { useRequest } from "../hooks/useRequest";
import { useNavigation } from "@react-navigation/native";
import Loader from "../components/shared/Loader";
import { updateUser, useUser } from "../context/userContext";

const validationSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email('Invalid email'),
    address: Yup.string().min(3, 'Address is Too short'),
    mobile_n0: Yup.string(),
});

const EditProfile = () => {
    const [state, dispatch] = useUser();
    const { execute, loading } = useRequest('user', 'patch', { type: 'delay', routeParams: state?._id });
    const navigation = useNavigation()
    const onSubmit = (values: Partial<UserDto>) => {
        execute({
            body: values as never,
            cbSuccess: (response) => {
                setStorageData('user', response.data as object)
                // @ts-ignore
                updateUser(dispatch, response.data as object)
                navigation.goBack()
            }
        })

    }
    return (
        <BaseContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground} style={styles.container}>
                    <Formik
                        initialValues={{
                            name: state?.name,
                            address: state?.address,
                            mobile_no: state?.mobile_no,
                        }}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View style={styles.formContainer}>
                                <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground}>
                                    <ThemedText
                                        style={{ paddingHorizontal: 20 }}
                                        lightColor={Colors.light.text}
                                        darkColor={Colors.dark.text}
                                    >
                                        Name
                                    </ThemedText>
                                    <AuthInput
                                        placeholder={''}
                                        onBlur={handleBlur('name')}
                                        onChangeText={handleChange('name')}
                                        value={values.name}
                                    />
                                    {touched.name && errors.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}
                                </ThemedView>
                                <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground}>
                                    <ThemedText
                                        style={{ paddingHorizontal: 20 }}
                                        lightColor={Colors.light.text}
                                        darkColor={Colors.dark.text}
                                    >
                                        Email
                                    </ThemedText>
                                    <AuthInput
                                        value={state?.email}
                                        disabled={true}
                                    />
                                </ThemedView>
                                <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground}>
                                    <ThemedText
                                        style={{ paddingHorizontal: 20 }}
                                        lightColor={Colors.light.text}
                                        darkColor={Colors.dark.text}
                                    >
                                        Address
                                    </ThemedText>
                                    <AuthInput
                                        placeholder={''}
                                        onBlur={handleBlur('address')}
                                        onChangeText={handleChange('address')}
                                        value={values.address}
                                    />
                                    {touched.address && errors.address && <Text style={{ color: 'red' }}>{errors.address}</Text>}
                                </ThemedView>
                                <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground}>
                                    <ThemedText
                                        style={{ paddingHorizontal: 20 }}
                                        lightColor={Colors.light.text}
                                        darkColor={Colors.dark.text}
                                    >
                                        Mobile No
                                    </ThemedText>
                                    <AuthInput
                                        placeholder={''}
                                        onBlur={handleBlur('mobile_no')}
                                        onChangeText={handleChange('mobile_no')}
                                        value={values.mobile_no}
                                    />
                                    {touched.mobile_no && errors.mobile_no && <Text style={{ color: 'red' }}>{errors.mobile_no}</Text>}
                                </ThemedView>
                                {
                                    loading ?
                                        <Loader />
                                        :
                                        <BaseButton onPress={handleSubmit} title='Save Changes' />
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

export default EditProfile;
