import { Image, ImageBackground, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { BaseContainer } from '@/src/components/shared/BaseContainer'
import ParallaxScrollView from '@/src/components/shared/ParallaxScrollView'
import { WIDTH } from '@/src/constants/Metrices'
import { achievementBadge } from '@/src/assets'
import { Colors } from '@/src/constants/Colors'
import { ThemedView } from '@/src/components/shared/ThemedView'
import { ThemedText } from '../components/shared/ThemedText'
import * as Progress from 'react-native-progress';
import { achievementBanner } from '../assets'

const Achievements = () => {
    const colorScheme = useColorScheme()
    return (
        <BaseContainer>
            <ParallaxScrollView
                headerImage={
                    <ImageBackground style={styles.banner} source={achievementBanner} >
                        <ThemedText style={styles.title} type='subtitle' darkColor={'#fff'} lightColor={'#fff'}>
                            8 Left to a New Job
                        </ThemedText>
                    </ImageBackground>
                }
                headerBackgroundColor={{ light: Colors.light.tintedBackground, dark: Colors.light.tintedBackground }}
            >
                <ThemedView
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    lightColor={Colors.light.tintedBackground}
                    darkColor={Colors.dark.tintedBackground}
                >
                    <ThemedText style={styles.title} type='subtitle' darkColor={'#fff'} lightColor={'#000'}>
                        You have Completed total 7 Steps out of 15 so far!
                    </ThemedText>
                    <ThemedView style={{ marginBottom: 20 }} lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground}>
                        <Progress.Circle
                            size={WIDTH(60)}
                            progress={0.5}
                            thickness={15}
                            color={Colors[colorScheme ?? 'light'].primary}
                            unfilledColor={Colors[colorScheme ?? 'light'].background}
                            borderColor={Colors[colorScheme ?? 'light'].background}
                        />
                    </ThemedView>
                    <ThemedView style={styles.achievementButton} lightColor={Colors.light.primary} darkColor={Colors.dark.primary}>
                        <ThemedView lightColor={Colors.light.primary} darkColor={Colors.dark.primary} style={styles.achievementCount}>
                            <ThemedText style={{ borderRadius: 20 }} lightColor='#fff' darkColor='#fff' type='title'>7</ThemedText>
                            <Image style={{ height: 24, width: 24 }} source={achievementBadge} />
                        </ThemedView>
                        <ThemedText lightColor='#fff' darkColor='#fff'>Total Achievements</ThemedText>
                    </ThemedView>
                </ThemedView>
            </ParallaxScrollView>
        </BaseContainer>
    )
}

export default Achievements

const styles = StyleSheet.create({
    banner: {
        width: WIDTH(100),
        height: 137,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        width: WIDTH(75),
        textAlign: 'center',
        margin: 25
    },
    achievementButton: {
        height: 96,
        width: WIDTH(80),
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    achievementCount: {
        flexDirection: 'row',
        borderRadius: 20
    }
})