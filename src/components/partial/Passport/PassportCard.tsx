import React from 'react'
import { ThemedText } from '@/src/components/shared/ThemedText'
import { ThemedView } from '@/src/components/shared/ThemedView'
import { Colors } from '@/src/constants/Colors'
import { passportIcon } from '@/src/assets'
import { Image, TouchableOpacity, StyleSheet } from 'react-native'
import { WIDTH } from '@/src/constants/Metrices'
import { useColorScheme } from '@/src/hooks/useColorScheme'
import { baseShadow } from '../../../assets/styles/shadow'

const PassportCard = () => {
    const colorScheme = useColorScheme()
    return (
        <TouchableOpacity style={[styles.cardBody, { backgroundColor: Colors[colorScheme ?? 'light'].background }, baseShadow]}>
            <ThemedView style={{ flexDirection: 'row' }} lightColor={Colors.light.background} darkColor={Colors.dark.background}>
                <Image resizeMode='contain' style={styles.icon} source={passportIcon} />
                <ThemedView style={{ marginHorizontal: 10 }}>
                    <ThemedText style={styles.blueText}>Attend First Timer Meeting</ThemedText>
                    <ThemedText style={styles.greyText}>Not Started</ThemedText>
                </ThemedView>
            </ThemedView>
            <ThemedView style={styles.checkBox} />
        </TouchableOpacity>
    )
}

export default PassportCard

const styles = StyleSheet.create({
    cardBody: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: WIDTH(90),
        height: 68,
        paddingVertical: 10,
        paddingRight: 20,
        paddingLeft: 10,
        marginVertical: 10,
    },
    icon: {
        height: 40, width: 40, alignSelf: 'center'
    },
    blueText: {
        color: Colors.light.primary,
        marginVertical: 0,
        fontSize: 16
    },
    greyText: {
        marginVertical: 0,
        fontSize: 14
    },
    checkBox: {
        borderWidth: 1,
        height: 24,
        width: 24,
        borderRadius: 5,
        marginBottom: 5
    }
})