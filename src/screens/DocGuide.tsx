import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { DocumentCard } from "../components/partial/DocGuide/DocumentCard";
import { BaseContainer } from "../components/shared/BaseContainer";
import { ThemedView } from "../components/shared/ThemedView";
import { Colors } from "../constants/Colors";
import { useRequest } from "../hooks/useRequest";
import { DocGuideDto } from "../@types/DocGuide";
import Loader from "../components/shared/Loader";

const DocGuideScreen = () => {
    const { data, loading } = useRequest<DocGuideDto[]>('doc-guide', 'get', { type: 'mount' });
    return (
        <BaseContainer>
            <ThemedView darkColor={Colors.dark.tintedBackground} lightColor={Colors.light.tintedBackground} style={styles.container}>
                {
                    loading ?
                        <Loader />
                        :
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item._id}
                            renderItem={({ item }) => (
                                <DocumentCard item={item} />
                            )}
                            showsVerticalScrollIndicator={false}
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
        paddingHorizontal: 20,
        paddingTop: 10,
    },
});

export default DocGuideScreen;
