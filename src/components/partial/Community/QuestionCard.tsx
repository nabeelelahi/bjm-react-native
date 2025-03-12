import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ThemedView } from '../../shared/ThemedView';
import { Colors } from '@/src/constants/Colors';
import { ThemedText } from '../../shared/ThemedText';
import { baseRadius } from '../../../assets/styles/radius';
import { baseShadow } from '../../../assets/styles/shadow';
import { useColorScheme } from '../../../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';
import { formatTimeAgo } from '../../../utils/date';
import { QuestionAnswerDto } from '../../../@types/QuestionAnswer';

const QuestionCard = ({ item, disablePress = false }: { item: QuestionAnswerDto, disablePress?: boolean }) => {
    const colorScheme = useColorScheme()
    const navigation = useNavigation()
    if (!disablePress)
        return (
            <TouchableOpacity onPress={() => navigation.navigate(...["QuestionAnswer", { ...item }] as never)} style={[styles.card, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
                <ThemedView style={styles.textContainer}>
                    <ThemedText
                        darkColor={Colors.dark.icon}
                        lightColor={Colors.light.icon}
                        type='defaultSemiBold'
                        style={styles.title}
                    >{item.title}</ThemedText>
                    <ThemedText style={styles.description}>{item.description}</ThemedText>
                    <View style={styles.bottomSection}>
                        <ThemedText style={styles.time}>{'Author: ' + item.user.name}</ThemedText>
                        <ThemedText style={styles.time}>{formatTimeAgo(item.created_at)}</ThemedText>
                    </View>
                </ThemedView>
            </TouchableOpacity>
        )
    else
    return (
        <ThemedView style={[styles.card, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
            <ThemedView style={styles.textContainer}>
                <ThemedText
                    darkColor={Colors.dark.icon}
                    lightColor={Colors.light.icon}
                    type='defaultSemiBold'
                    style={styles.title}
                >{item.title}</ThemedText>
                <ThemedText style={styles.description}>{item.description}</ThemedText>
                <View style={styles.bottomSection}>
                    <ThemedText style={styles.time}>{'Author: ' + item.user.name}</ThemedText>
                    <ThemedText style={styles.time}>{formatTimeAgo(item.created_at)}</ThemedText>
                </View>
            </ThemedView>
        </ThemedView>
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
        // marginBottom: 5,
    },
    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
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