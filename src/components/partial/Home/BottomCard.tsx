import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemedText } from '../../shared/ThemedText'
import { WIDTH } from '@/src/constants/Metrices'
import { Colors } from '@/src/constants/Colors'
import { useColorScheme } from '@/src/hooks/useColorScheme'
import { baseShadow } from '../../../assets/styles/shadow'
import { baseRadius } from '../../../assets/styles/radius'

const BottomCard = ({ title, image, onPress, isFull }: { title: string; image: React.ReactNode, onPress: () => unknown, isFull?: boolean }) => {
    const colorScheme = useColorScheme()
    return (
        <TouchableOpacity onPress={onPress} style={[styles.body, {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
            width: isFull ? WIDTH(90) : WIDTH(45)
        },
            baseShadow,
            baseRadius,
        ]}>
            {image}
            <ThemedText lightColor={Colors.light.text} darkColor={Colors.dark.text} style={styles.text} type='defaultSemiBold'>{title}</ThemedText>
        </TouchableOpacity>
    )
}

export default BottomCard

const styles = StyleSheet.create({
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 140,
    },
    icon: {
        height: 79,
        width: 77
    },
    text: {
        fontSize: 17,
        marginVertical: 2
    }
}) 