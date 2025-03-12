import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { ThemedText } from "../components/shared/ThemedText";
import { Colors } from "../constants/Colors";
import { useColorScheme } from "../hooks/useColorScheme";
import CommunityCard from "../components/partial/Community/CommunityCard";
import { useRequest } from "../hooks/useRequest";
import { CommunityDto } from "../@types/Communtiy";
import Loader from "../components/shared/Loader";

const Communities = () => {
    const colorScheme = useColorScheme();
    const { data, loading } = useRequest<CommunityDto[]>('community', 'get', { type: 'mount' });
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={[styles.container, { backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground }]}>
            {/* <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground} style={styles.sectionHeader}>
                <ThemedText type="subtitle" lightColor={Colors.light.icon} darkColor={Colors.dark.icon}>
                    All Communities
                </ThemedText>
            </ThemedView>

            <FlatList
                data={allCommunities}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Articles" as never)} style={styles.communityItem}>
                        <Image resizeMode="stretch" source={item.image} style={styles.communityImage} />
                        <ThemedText lightColor={Colors.light.icon} darkColor={Colors.dark.icon} style={styles.communityName}>
                            {item.name}
                        </ThemedText>
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.communityList}
            /> */}

            <ThemedText
                type="subtitle"
                lightColor={Colors.light.icon}
                darkColor={Colors.dark.icon}
                style={{ marginVertical: 15 }}
            >
                All Communities
            </ThemedText>

            {loading ? <Loader /> : data && data.map((item: CommunityDto) => <CommunityCard item={item} />)}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
    },
    communityList: {
        paddingVertical: 15,
    },
    communityItem: {
        alignItems: "center",
        marginHorizontal: 10,
    },
    communityImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    communityName: {
        marginTop: 5,
        fontSize: 12,
    },
    card: {
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 15,
        elevation: 5,
    },
    cardImage: {
        width: "100%",
        height: 140,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    cardTitle: {
        position: "absolute",
        top: 20,
        left: 15,
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        top: 50,
        left: 15,
    },
    ratingText: {
        color: "#fff",
        marginLeft: 5,
        fontSize: 14,
    },
    button: {
        backgroundColor: "#fff",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        position: "absolute",
        bottom: 15,
        left: 15,
    },
    buttonText: {
        color: "#7C3AED",
        fontWeight: "bold",
    },
});

export default Communities;
