import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
// import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from '@/src/hooks/useColorScheme';
import { Colors } from '@/src/constants/Colors';

export const BaseContainer = ({ children }: { children: React.ReactNode }) => {
    const colorScheme = useColorScheme();
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground }]}>
            {/* <StatusBar backgroundColor='white' /> */}
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})