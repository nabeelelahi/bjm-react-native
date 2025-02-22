import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { DocumentCard } from "../components/partial/DocGuide/DocumentCard";
import { BaseContainer } from "../components/shared/BaseContainer";
import { ThemedView } from "../components/shared/ThemedView";
import { Colors } from "../constants/Colors";

const documents = [
    {
        id: "1",
        title: "Introduction to BJM",
        time: "08.30 PM",
        date: "Mon, 19 Jul 2022",
    },
    {
        id: "2",
        title: "A Journey to Unemployment",
        time: "08.30 PM",
        date: "Mon, 19 Jul 2022",
    },
    {
        id: "3",
        title: "Spiritually Affected",
        time: "08.30 PM",
        date: "Mon, 19 Jul 2022",
    },
    {
        id: "4",
        title: "Spiritually Affected",
        time: "08.30 PM",
        date: "Mon, 19 Jul 2022",
    },
];


const DocGuideScreen = () => {

    return (
        <BaseContainer>
            <ThemedView darkColor={Colors.dark.tintedBackground} lightColor={Colors.light.tintedBackground} style={styles.container}>
                <FlatList
                    data={documents}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <DocumentCard item={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </ThemedView>
        </BaseContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
});

export default DocGuideScreen;
