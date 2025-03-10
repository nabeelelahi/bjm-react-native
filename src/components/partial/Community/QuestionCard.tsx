import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArticleCardProps } from '@/src/@types';
import { ThemedView } from '../../shared/ThemedView';
import { Colors } from '@/src/constants/Colors';
import { ThemedText } from '../../shared/ThemedText';
import { baseRadius } from '../../../assets/styles/radius';
import { baseShadow } from '../../../assets/styles/shadow';
import { useColorScheme } from '../../../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';

const QuestionCard = ({ item }: { item: ArticleCardProps }) => {
    const colorScheme = useColorScheme()
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate(...["QuestionAnswer", { ...item }] as never)} style={[styles.card, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
            <ThemedView style={styles.textContainer}>
                <ThemedText
                    darkColor={Colors.dark.icon}
                    lightColor={Colors.light.icon}
                    type='defaultSemiBold'
                    style={styles.title}
                >{item.title}</ThemedText>
                <ThemedText style={styles.time}>{item.time}</ThemedText>
                <ThemedText style={styles.description}>{item.description}</ThemedText>
            </ThemedView>
        </TouchableOpacity>
    )
};

export default QuestionCard

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        padding: 15,
        marginBottom: 15,
        marginHorizontal: 15,
        borderRadius: baseRadius.borderRadius,
        ...baseShadow
    },
    textContainer: {
        flex: 1,
        paddingRight: 10,
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