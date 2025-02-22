import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemedText } from '../../shared/ThemedText'
import { forwardIcon, forwardIconWhite } from '@/src/assets'
import { WIDTH } from '@/src/constants/Metrices'
import { useColorScheme } from '@/src/hooks/useColorScheme'

const Link = ({ title, onPress }: { title: string, onPress: () => unknown }) => {
    const colorScheme = useColorScheme()
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <ThemedText style={{ ...styles.link, color: colorScheme === 'dark' ? '#fff' : '#000' }}>{title}</ThemedText>
            <Image style={styles.forwardIcon} source={colorScheme === 'light' ? forwardIcon : forwardIconWhite} />
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    link: {
        fontSize: 18,
    },
    forwardIcon: {
        height: 12,
        width: 7.5
    }
})