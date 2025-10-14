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
import { useNavigation } from "@react-navigation/native";
import Loader from "../components/shared/Loader";

const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().min(3, 'description is Too short').required(),
});

const ReportBug = () => {
    const { execute, loading } = useRequest('user-feedback', 'post', { type: 'delay' });
    const navigation = useNavigation()
    const onSubmit = (values: Record<string, unknown>) => {
        execute({
            body: values as never,
            cbSuccess: (response) => {
                navigation.goBack()
            }
        })

    }
    return (
        <BaseContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground} style={styles.container}>
                    <Formik
                        initialValues={{ title: "", description: "", }}
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
                                        Title
                                    </ThemedText>
                                    <AuthInput
                                        placeholder={''}
                                        onBlur={handleBlur('title')}
                                        onChangeText={handleChange('title')}
                                        value={values.title}
                                    />
                                    {touched.title && errors.title && <Text style={{ color: 'red',marginHorizontal: 20 }}>{errors.title}</Text>}
                                </ThemedView>
                                <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground}>
                                    <ThemedText
                                        style={{ paddingHorizontal: 20 }}
                                        lightColor={Colors.light.text}
                                        darkColor={Colors.dark.text}
                                    >
                                        Description
                                    </ThemedText>
                                    <AuthInput
                                        placeholder={''}
                                        onBlur={handleBlur('description')}
                                        onChangeText={handleChange('description')}
                                        value={values.description}
                                        multiline={true}
                                        numberOfLines={5}
                                    />
                                    {touched.description && errors.description && <Text style={{ color: 'red', marginHorizontal: 20 }}>{errors.description}</Text>}
                                </ThemedView>
                                {
                                    loading ?
                                        <Loader />
                                        :
                                        <BaseButton onPress={handleSubmit} title='Submit' />
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

export default ReportBug;
