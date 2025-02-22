import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ArticleCardProps } from '@/src/@types';
import { homeParallax } from '@/src/assets';
import { ThemedView } from '../../shared/ThemedView';
import { Colors } from '@/src/constants/Colors';
import { ThemedText } from '../../shared/ThemedText';
const ArticleCard = ({ item }: { item: ArticleCardProps }) => (
    <ThemedView radius shadow darkColor={Colors.dark.background} lightColor={Colors.light.background} style={styles.card}>
        <ThemedView darkColor={Colors.dark.background} lightColor={Colors.light.background} style={styles.textContainer}>
            <View style={[styles.categoryBadge, { backgroundColor: item.categoryColor }]}>
                <ThemedText style={styles.categoryText}>{item.category}</ThemedText>
            </View>
            <ThemedText
                darkColor={Colors.dark.icon}
                lightColor={Colors.light.icon}
                type='defaultSemiBold'
                style={styles.title}
            >{item.title}</ThemedText>
            <ThemedText style={styles.time}>{item.time}</ThemedText>
            <ThemedText style={styles.description}>{item.description}</ThemedText>
        </ThemedView>
        <Image source={homeParallax} style={styles.thumbnail} />
    </ThemedView>
);

export default ArticleCard

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        padding: 15,
        marginBottom: 15,
        marginHorizontal: 15,
    },
    textContainer: {
        flex: 1,
        paddingRight: 10,
    },
    categoryBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: "flex-start",
        marginBottom: 5,
    },
    categoryText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#FFF",
    },
    title: {
        marginBottom: 5,
    },
    time: {
        fontSize: 12,
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
    },
    thumbnail: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
});