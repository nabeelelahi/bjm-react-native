import React from 'react'
import { BaseContainer } from '@/src/components/shared/BaseContainer'
import ParallaxScrollView from "@/src/components/shared/ParallaxScrollView";
import { achievementGif, achievementsCard, articles, articlesWhite, community, communityWhite, docGuide, docGuideWhite, homeParallax, passportCard, passportGif } from "@/src/assets";
import { Colors } from "@/src/constants/Colors";
import { Image, StyleSheet } from 'react-native';
import { ThemedView } from '../components/shared/ThemedView';
import TopCard from '../components/partial/Home/TopCard';
import FastImage from 'react-native-fast-image';
import BottomCard
  from '../components/partial/Home/BottomCard';
import { useNavigation }
  from '@react-navigation/native';
import { useColorScheme } from '../hooks/useColorScheme';
import Carousel from 'react-native-reanimated-carousel';
import { WIDTH } from '../constants/Metrices';
import { 
  banner1, 
  banner2,
  banner3 } from '../assets';

const data = [
  banner1,  
  banner2,
  banner3,
]

const HomeScreen = () => {
  const navigation = useNavigation()
  const colorScheme = useColorScheme()
  return (
    <BaseContainer>
      {/* <SearchBar /> */}
      <ParallaxScrollView
        headerBackgroundColor={{ light: Colors.light.tintedBackground, dark: Colors.dark.tintedBackground }}
        headerImage={
          <Carousel
            loop
            width={WIDTH(100)}
            height={211}
            autoPlay={true}
            data={data}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
              <Image resizeMode='stretch' style={{ height: 211, width: WIDTH(100) }} source={item} />
            )}
          />
        }
      >
        <ThemedView style={styles.topCardContainer}>
          <TopCard onPress={() => navigation.navigate('Passports' as never)} image={passportCard} >
            <FastImage style={{ height: 34, width: 34, position: 'absolute', top: 20, left: 70 }} source={passportGif} />
          </TopCard>
          <TopCard onPress={() => navigation.navigate('Achievements' as never)} image={achievementsCard} >
            <FastImage style={{ height: 36, width: 36, position: 'absolute', top: 20, left: 65 }} source={achievementGif} />
          </TopCard>
        </ThemedView>

        <ThemedView style={styles.bottomCardContainer}>
          {/* <BottomCard
            onPress={() => navigation.navigate('Bible' as never)}
            title='Bible'
            image={<Image style={{ height: 79, width: 77 }} source={colorScheme === 'light' ? bible : bibleWhite} />}
          /> */}
          <BottomCard
            onPress={() => navigation.navigate('Articles' as never)}
            title='Articles'
            isFull
            image={<Image style={{ height: 71, width: 53 }} source={colorScheme === 'light' ? articles : articlesWhite} />}
          />
        </ThemedView>
        <ThemedView style={styles.bottomCardContainer}>
          <BottomCard
            onPress={() => navigation.navigate('DocGuide' as never)}
            title='Doc/Guide'
            image={<Image style={{ height: 70, width: 45 }} source={colorScheme === 'light' ? docGuide : docGuideWhite} />}
          />
          <BottomCard
            onPress={() => navigation.navigate('Communities' as never)}
            title='Community'
            image={<Image style={{ height: 54, width: 68 }} source={colorScheme === 'light' ? community : communityWhite} />}
          />
        </ThemedView>
      </ParallaxScrollView>
    </BaseContainer>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  topCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
    backgroundColor: 'transparent'
  },
  bottomCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent',
    marginVertical: 10
  }
})