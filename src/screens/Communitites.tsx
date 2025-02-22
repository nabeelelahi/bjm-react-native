import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";  // ✅ Replaced expo-vector-icons
import { community1, homeParallax } from "../assets";
import { ThemedText } from "../components/shared/ThemedText";
import { Colors } from "../constants/Colors";
import { ThemedView } from "../components/shared/ThemedView";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "../hooks/useColorScheme";

const allCommunities = [
    { id: "1", name: "Spirituality", image: community1 },
    { id: "2", name: "Art & Craft", image: community1 },
    { id: "3", name: "Spirituality", image: community1 },
    { id: "4", name: "Coming soon", image: community1 },
];

const myCommunities = [
    { id: "1", name: "Reiki Healing", image: homeParallax, rating: 4.3, members: "10K+" },
    { id: "2", name: "Crystal Healing", image: homeParallax, rating: 4.3, members: "10K+" },
    { id: "3", name: "Crystal Healing", image: homeParallax, rating: 4.3, members: "10K+" },
];

const Communities = () => {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={[styles.container, { backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground }]}>
            <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground} style={styles.sectionHeader}>
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
            />

            <ThemedText
                type="subtitle"
                lightColor={Colors.light.icon}
                darkColor={Colors.dark.icon}
                style={{ marginBottom: 15 }}
            >
                My Communities
            </ThemedText>

            {myCommunities.map((community) => (
                <View key={community.id} style={styles.card}>
                    <Image source={community.image} style={styles.cardImage} />
                    <View style={styles.overlay} />
                    <Text style={styles.cardTitle}>{community.name}</Text>

                    <View style={styles.ratingContainer}>
                        <FontAwesome name="star" size={14} color="gold" />  {/* ✅ Replaced expo icons */}
                        <ThemedText style={styles.ratingText}>
                            {community.rating} ({community.members} members)
                        </ThemedText>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("Articles" as never)} style={styles.button}>
                        <ThemedText style={styles.buttonText}>View Community</ThemedText>
                    </TouchableOpacity>
                </View>
            ))}
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
        backgroundColor: "#fff",
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
