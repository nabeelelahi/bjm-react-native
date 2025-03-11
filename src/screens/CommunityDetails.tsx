import React, { useEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { BaseContainer } from "../components/shared/BaseContainer";
import { ThemedView } from "../components/shared/ThemedView";
import { Colors } from "../constants/Colors";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "../hooks/useColorScheme";
import QuestionCard from "../components/partial/Community/QuestionCard";

const articles = [
    {
        id: "1",
        category: "UX",
        title: "6 visual design fundamentals that UX designers...",
        time: "17 hours ago",
        description:
            "When I was studying visual communications strategy in college, I was fascinated by how...",
        thumbnail: "https://source.unsplash.com/100x100/?business",
        categoryColor: "#FF3B30",
    },
    {
        id: "2",
        category: "Revolution",
        title: "A new, revolutionary is just around the corner...",
        time: "Yesterday",
        description:
            "New technologies are shaping the way we interact with the world around us...",
        thumbnail: "https://source.unsplash.com/100x100/?conference",
        categoryColor: "#007AFF",
    },
    {
        id: "3",
        category: "Life",
        title: "Is Your UI Messy? 7 Common Mistakes to Avoid",
        time: "2 days ago",
        description: "Discover the most common UI design mistakes and how to fix them...",
        thumbnail: "https://source.unsplash.com/100x100/?tech",
        categoryColor: "#FF3B30",
    },
];

const CommunityDetails = ({ route }: any) => {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    useEffect(() => {
        navigation.setOptions({
            headerTitle: route.params.title,
            headerRight: () => (
                <TouchableOpacity style={[styles.headerPlusIcon, { backgroundColor: Colors[colorScheme ?? 'light'].primary }]}>
                    <Entypo name='plus' size={26} color={Colors[colorScheme ?? 'light'].background} />
                </TouchableOpacity>
            ),
        });
    }, [])

    return (
        <BaseContainer>
            <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground} style={styles.container}>
                <FlatList
                    data={articles}
                    style={{ backgroundColor: 'transparent' }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <QuestionCard item={item} />}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
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
