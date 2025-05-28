import React from "react";
import { StyleSheet } from "react-native";
import { BaseContainer } from "../components/shared/BaseContainer";
import { ThemedView } from "../components/shared/ThemedView";
import { Colors } from "../constants/Colors";
import ArticleCard from "../components/partial/Articles/ArticleCard";
import { ArticleDto } from "../@types/Article";
import FlatListComponent from "../components/shared/FlatList";

const ArticlesScreen = () => {
    return (
        <BaseContainer>
            <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground} style={styles.container}>
                <FlatListComponent<ArticleDto>
                    route='article'
                    method="get"
                    style={{ backgroundColor: 'transparent' }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => <ArticleCard item={item} />}
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

export default ArticlesScreen;
