import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemedText } from '../../shared/ThemedText'
import { forwardIcon } from '@/src/assets'
import { WIDTH } from '@/src/constants/Metrices'
import { useColorScheme } from '@/src/hooks/useColorScheme'
import { ThemedView } from '../../shared/ThemedView'
import BaseSwitch from '../../shared/Switch'

const PushNotificationOption = () => {
    const colorScheme = useColorScheme()
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={{ ...styles.link, color: colorScheme === 'dark' ? '#fff' : '#000' }}>Push Notifications</ThemedText>
            <BaseSwitch />
        </ThemedView>
    )
}

export default PushNotificationOption

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'tranparent',
    },
    link: {
        fontSize: 18,
    },
})