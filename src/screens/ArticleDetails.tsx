import React from "react";
import { StyleSheet } from "react-native";
import { BaseContainer } from "../components/shared/BaseContainer";
import { ThemedView } from "../components/shared/ThemedView";
import { Colors } from "../constants/Colors";
import ArticleCard from "../components/partial/Articles/ArticleCard";
import { ArticleDto } from "../@types/Article";
import FlatListComponent from "../components/shared/FlatList";
import { ThemedText } from "../components/shared/ThemedText";
import { ScrollView } from "react-native-gesture-handler";

const ArticlesDetailScreen = ({ route }: any) => {
    const { data } = route.params;
    return (
        <BaseContainer>
            <ScrollView>
                <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground} style={styles.container}>
                    <ArticleCard item={data} is_active={false} />
                    <ThemedText style={styles.articleDescription} darkColor={Colors.dark.text} lightColor={Colors.light.text}>
                        {data.description}
                    </ThemedText>
                </ThemedView>
            </ScrollView>
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
    articleDescription: {
        marginHorizontal: 20,
    },
    headerPlusIcon: {
        padding: 10,
        margin: 10,
        marginHorizontal: 15,
        borderRadius: 10,
    }
});

export default ArticlesDetailScreen;
