import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { hamburger, profile, profileWhite } from '@/src/assets'
import { useColorScheme } from '@/src/hooks/useColorScheme'
import { useNavigation } from '@react-navigation/native'

export const Hamburger = () => {
    return (
        <View style={styles.hamburgerContainer}>
            <Image style={styles.hamburger} source={hamburger} />
        </View>
    )
}

export const Profile = () => {
    const colorScheme = useColorScheme();
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Settings' as never)} style={styles.profileContainer}>
            <Image style={styles.profile} source={colorScheme === 'light' ? profile : profileWhite} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    hamburgerContainer: {
        marginHorizontal: 20,
    },
    hamburger: {
        height: 32,
        width: 32
    },
    profileContainer: {
        marginHorizontal: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        padding: 2,
        borderRadius: 100
    },
    profile: {
        height: 32,
        width: 29
    }
});