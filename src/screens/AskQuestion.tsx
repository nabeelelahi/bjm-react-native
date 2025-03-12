import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import BaseButton from '@/src/components/shared/BaseButton';
import AuthInput from '../components/form/AuthInput';
import { BaseContainer } from '../components/shared/BaseContainer';
import { ThemedView } from '../components/shared/ThemedView';
import { Colors } from '../constants/Colors';
import { ThemedText } from '../components/shared/ThemedText';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRequest } from '../hooks/useRequest';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Loader from '../components/shared/Loader';

const askQuestionField = [
    {
        id: '1',
        label: 'Title',
        name: 'title',
    },
    {
        id: '1',
        label: 'Description',
        name: 'description',
    },
]

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().min(2, 'Description should be at least 2 characters').required('Description is required'),
});

const AskQuestion = ({ route }: { route: any }) => {
    const { execute, loading } = useRequest('question-answer', 'post', { type: 'delay' });
    const navigation = useNavigation();
    const onSubmit = (values: { title: string; description: string }, actions: any) => {
        execute({
            body: {
                ...values,
                community: route.params.community,
            },
            cbSuccess: () => {
                actions.resetForm();
                navigation.goBack();
            },
        });
    }
    return (
        <BaseContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground} style={styles.container}>
                    <View style={styles.formContainer}>
                        <Formik
                            initialValues={{ title: '', description: '' }}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <>
                                    {askQuestionField.map((item) => (
                                        <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground}>
                                            <ThemedText style={{ paddingHorizontal: 20 }} lightColor={Colors.light.text} darkColor={Colors.dark.text}>{item.label}</ThemedText>
                                            <AuthInput
                                                onBlur={handleBlur(item.name)}
                                                onChangeText={handleChange(item.name)}
                                                // @ts-expect-error
                                                value={values[item.name]}
                                                placeholder={item.label}
                                            />
                                            {/* @ts-expect-error */}
                                            {touched[item.name] && errors[item.name] && <Text style={{ color: 'red', paddingHorizontal: 20, paddingBottom: 5 }}>{errors[item.name]}</Text>}
                                        </ThemedView>
                                    ))}
                                    {
                                        loading ?
                                        <Loader />
                                        :
                                        <BaseButton onPress={handleSubmit} title="Submit" />
                                    }
                                </>
                            )}
                        </Formik>
                    </View>
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
        alignItems: 'center',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5A189A',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
    },
    saveButton: {
        backgroundColor: '#004D71',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default AskQuestion;
