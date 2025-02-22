import { Image } from 'react-native'
import React from 'react'
import ParallaxScrollView from '@/src/components/shared/ParallaxScrollView'
import { WIDTH } from '@/src/constants/Metrices'
import { ThemedView } from '@/src/components/shared/ThemedView'
import { Colors } from '@/src/constants/Colors'
import PassportCard from '@/src/components/partial/Passport/PassportCard'
import { BaseContainer } from '../components/shared/BaseContainer'
import { passportBanner } from '../assets'



const Passports = () => {
    return (
        <BaseContainer>
            <ParallaxScrollView
                headerImage={<Image style={{ width: WIDTH(100), alignSelf: 'center', height: 137 }} source={passportBanner} />
                }
                headerBackgroundColor={{ light: Colors.light.background, dark: Colors.light.background }}
            >
                <ThemedView
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    lightColor={Colors.light.tintedBackground}
                    darkColor={Colors.dark.tintedBackground}
                >
                    <PassportCard />
                    <PassportCard />
                    <PassportCard />
                    <PassportCard />
                </ThemedView>
            </ParallaxScrollView>
        </BaseContainer>
    )
}

export default Passports

