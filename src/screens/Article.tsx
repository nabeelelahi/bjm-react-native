import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { BaseContainer } from "../components/shared/BaseContainer";
import { ThemedView } from "../components/shared/ThemedView";
import { Colors } from "../constants/Colors";
import ArticleCard from "../components/partial/Articles/ArticleCard";
import { useRequest } from "../hooks/useRequest";
import { ArticleDto } from "../@types/Article";
import Loader from "../components/shared/Loader";

const ArticlesScreen = () => {

    const { data, loading } = useRequest<ArticleDto[]>('article', 'get', { type: 'mount' });

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
                            renderItem={({ item }) => <ArticleCard item={item} />}
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

export default ArticlesScreen;
