import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import QuestionCard from '../components/partial/Community/QuestionCard';
import { BaseContainer } from '../components/shared/BaseContainer';
import { ThemedView } from '../components/shared/ThemedView';
import { Colors } from '../constants/Colors';
import AnswerCard from '../components/partial/Community/AnswerCard';
import { QuestionAnswerDto } from '../@types/QuestionAnswer';
import { useRequest } from '../hooks/useRequest';
import Loader from '../components/shared/Loader';
import { ThemedText } from '../components/shared/ThemedText';
import Toast from 'react-native-toast-message';

export default function QuestionForum({ route }: any) {

    const [newAnswer, setNewAnswer] = useState('');
    const { data, loading, setData } = useRequest<QuestionAnswerDto[]>('question-answer', 'get', {
        type: 'mount',
        params: {
            community: route.params.community,
            parent: route.params._id,
        },
    });
    const { loading: submitLoading, execute } = useRequest<QuestionAnswerDto>('question-answer', 'post', {
        type: 'delay',
    });
    const onSubmit = () => {
        if (!newAnswer.length) {
            return Toast.show({ type: 'error', text1: 'Please input your answer.' });
        }
        execute({
            body: {
                title: newAnswer,
                community: route.params.community,
                parent: route.params._id,
            },
            cbSuccess: (response) => setData(p => [response.data, ...p]),
        })
    };

    return (
        <BaseContainer>
            <ThemedView style={styles.container} darkColor={Colors.dark.tintedBackground} lightColor={Colors.light.tintedBackground}>

                {/* Question Section */}
                <QuestionCard disablePress item={route.params} />

                {/* Answers Section */}
                {
                    loading ?
                        <Loader />
                        :
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item._id}
                            renderItem={({ item }) => (
                                <AnswerCard item={item} />
                            )}
                        />
                }

                {/* Input Field */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Write your answer..."
                        value={newAnswer}
                        onChangeText={setNewAnswer}
                    />
                    <TouchableOpacity disabled={submitLoading} onPress={onSubmit} style={styles.submitButton}>
                        <ThemedText style={styles.submitButtonText}>{submitLoading ? 'Loading...' : 'Submit'}</ThemedText>
                    </TouchableOpacity>
                </View>
            </ThemedView>
        </BaseContainer>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    answerContainer: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 5,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    answerAuthor: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    answerDescription: {
        fontSize: 16,
        marginVertical: 5,
    },
    timestamp: {
        fontSize: 12,
        color: 'gray',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
    },
    input: {
        flex: 1,
        borderBottomWidth: 1,
        paddingVertical: 5,
        marginRight: 10,
    },
    submitButton: {
        backgroundColor: Colors.light.primary,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    submitButtonText: {
        color: Colors.light.background
    }
});

