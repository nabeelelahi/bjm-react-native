import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import { Colors } from "@/src/constants/Colors";
import { ThemedView } from "../../shared/ThemedView";
import { ThemedText } from "../../shared/ThemedText";
import { articles, articlesWhite } from "@/src/assets";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { baseShadow } from "../../../assets/styles/shadow";
import { baseRadius } from "../../../assets/styles/radius";

export const DocumentCard = ({ item }: any) => {
    const colorScheme = useColorScheme()
    return (
        <TouchableOpacity
            style={[styles.card, { backgroundColor: Colors[colorScheme ?? 'light'].background }, baseShadow, baseRadius]}
        >
            <ThemedView lightColor={Colors.light.primary} darkColor={Colors.dark.primary} style={styles.cardHeader}>
                <ThemedText
                    lightColor={Colors.light.background}
                    darkColor={Colors.dark.background}
                    type="defaultSemiBold"
                >Document {item.id}</ThemedText>
                <MaterialIcons name="more-horiz" size={24} color="white" />
            </ThemedView>
            <ThemedView
                style={{ ...styles.cardBody, borderBottomColor: Colors[colorScheme ?? 'light'].text }}
                lightColor={Colors.light.background}
                darkColor={Colors.dark.background}
            >
                <Image source={colorScheme === 'light' ? articles : articlesWhite} style={styles.image} />
                <ThemedText
                    type="defaultSemiBold"
                    style={styles.title}
                    lightColor={Colors.light.text}
                    darkColor={Colors.dark.text}
                >
                    {item.title}
                </ThemedText>
            </ThemedView>
            <View style={styles.cardFooter}>
                <View style={styles.row}>
                    <FontAwesome name="clock-o" size={12} color="#FF3B30" />
                    <ThemedText style={styles.timeText}>{item.time}</ThemedText>
                    <FontAwesome name="comment-o" size={12} color="#777" style={styles.iconSpacing} />
                    <ThemedText darkColor={Colors.dark.text} lightColor={Colors.light.text} style={styles.infoText}>1</ThemedText>
                    <FontAwesome name="eye" size={12} color="#777" style={styles.iconSpacing} />
                    <ThemedText darkColor={Colors.dark.text} lightColor={Colors.light.text} style={styles.infoText}>2</ThemedText>
                </View>
                <ThemedText darkColor={Colors.dark.text} lightColor={Colors.light.text} style={styles.infoText}>{item.date}</ThemedText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 15,
        height: 152,
    },
    cardBody: {
        margin: 10,
        marginHorizontal: 15,
        padding: 7,
        borderBottomWidth: 0.3,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'flex-start',
    },
    image: {
        width: 20,
        height: 28,
    },
    cardHeader: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    title: {
        marginBottom: 10,
    },
    cardFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10,
        paddingHorizontal: 15,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    timeText: {
        color: "#FF486A",
        fontSize: 12,
        marginLeft: 4,
    },
    iconSpacing: {
        marginLeft: 10,
    },
    infoText: {
        marginLeft: 4,
        fontSize: 12
    },
});