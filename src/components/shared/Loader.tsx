import { ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedView } from './ThemedView'
import { Colors } from '../../constants/Colors'

const Loader = () => {
    return (
        <ThemedView style={styles.container} darkColor={Colors.dark.tintedBackground} lightColor={Colors.light.tintedBackground}>
            <ActivityIndicator size={'large'} />
        </ThemedView>
    )
}

export default Loader;

export const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})