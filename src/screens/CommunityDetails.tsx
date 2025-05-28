import React, { useEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { BaseContainer } from "../components/shared/BaseContainer";
import { ThemedView } from "../components/shared/ThemedView";
import { Colors } from "../constants/Colors";
import Entypo from "react-native-vector-icons/Entypo";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useColorScheme } from "../hooks/useColorScheme";
import QuestionCard from "../components/partial/Community/QuestionCard";
import { useRequest } from "../hooks/useRequest";
import { QuestionAnswerDto } from "../@types/QuestionAnswer";
import Loader from "../components/shared/Loader";

const CommunityDetails = ({ route }: any) => {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    const { data, loading, execute } = useRequest<QuestionAnswerDto[]>('question-answer', 'get', {
        type: 'delay',
        params: {
            community: route.params._id,
            parent: null,
        },
    });
    useFocusEffect(
        React.useCallback(() => {
            execute();
        }, [navigation])
    )
    useEffect(() => {
        navigation.setOptions({
            headerTitle: route.params.title.length > 12 ? route.params.title.substring(0, 12).trim() + '...' : route.params.title,
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('AskQuestion', { community: route.params._id })} style={[styles.headerPlusIcon, { backgroundColor: Colors[colorScheme ?? 'light'].primary }]}>
                    <Entypo name='plus' size={26} color={Colors[colorScheme ?? 'light'].background} />
                </TouchableOpacity>
            ),
        });
    }, [])

    return (
        <BaseContainer>
            <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground} style={styles.container}>
                {
                    loading ?
                        <Loader />
                        :
                        <FlatList
                            data={data}
                            style={{ backgroundColor: 'transparent' }}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item) => item._id}
                            renderItem={({ item }) => <QuestionCard item={item} />}
                            contentContainerStyle={{ paddingBottom: 20 }}
                        />
                }
            </ThemedView>
        </BaseContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#5A189A",
        textAlign: "center",
        marginBottom: 20,
    },
    headerPlusIcon: {
        padding: 10,
        margin: 10,
        marginHorizontal: 15,
        borderRadius: 10,
    }
});

export default CommunityDetails;
