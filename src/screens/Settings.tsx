import { StyleSheet, Image, ScrollView } from 'react-native'
import { BaseContainer } from '@/src/components/shared/BaseContainer'
import { ThemedView } from '@/src/components/shared/ThemedView'
import { WIDTH } from '@/src/constants/Metrices'
import { profile, profileWhite } from '@/src/assets'
import { ThemedText } from '@/src/components/shared/ThemedText'
import Link from '@/src/components/partial/Settings/Link'
import { useColorScheme } from '../hooks/useColorScheme'
import { Colors } from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
// import DarkModeOption from '../components/partial/Settings/DarkModeOption'
// import PushNotificationOption from '../components/partial/Settings/PushNotificationOption'
import { baseShadow } from '../assets/styles/shadow'
import { baseRadius } from '../assets/styles/radius'
import { getStorageData, removeStorageData } from '../utils/storage'
import { CommonActions } from '@react-navigation/native';
import { useEffect, useState } from 'react'
import { UserDto } from '../@types/User'
import { useUser } from '../context/userContext'


const Settings = () => {
  const colorScheme = useColorScheme()
  const navigation = useNavigation()
  const [state, dispatch] = useUser();


  return (
    <BaseContainer>
      <ScrollView showsVerticalScrollIndicator={false} style={[styles.body, { backgroundColor: Colors[colorScheme ?? 'light'].background }, baseShadow, baseRadius]}>
        <ThemedView style={{ ...styles.childBody, borderColor: colorScheme === 'dark' ? '#fff' : '#CACACA' }}>
          <ThemedView style={{
            ...styles.header,
            borderBottomColor: colorScheme === 'dark' ? '#fff' : '#CACACA'
          }}>
            <Image style={{ height: 41, width: 38 }} source={colorScheme === 'light' ? profile : profileWhite} />
            <ThemedText darkColor={Colors.dark.icon} lightColor={Colors.light.icon} style={styles.headerText}>{state?.name ?? state?.email}</ThemedText>
          </ThemedView>
          <ThemedText style={styles.subTitle}>Account Settings</ThemedText>
          <Link onPress={() => navigation.navigate('EditProfile' as never)} title="Edit Profile" />
          <Link onPress={() => navigation.navigate('ChangePassword' as never)} title="Change Password" />
          {/* <PushNotificationOption /> */}
          {/* <DarkModeOption /> */}
        </ThemedView>
        <ThemedView style={{
          ...styles.childBody,
          borderBottomWidth: 0,
        }}>
          <ThemedText style={styles.subTitle}>Application Settings</ThemedText>
          <Link onPress={() => navigation.navigate('ReportBug' as never)} title="Report a Bug" />
          <Link onPress={() => navigation.navigate(...['WebView', { url: 'https://www.betweenjobsministry.org/about-3' }] as never)} title="About us & FAQ's" />
          <Link onPress={() => navigation.navigate(...['WebView', { url: 'https://www.betweenjobsministry.org/privacypolicy' }] as never)} title="Privacy Policy" />
          <Link onPress={() => navigation.navigate(...['WebView', { url: 'https://www.betweenjobsministry.org/terms-conditions' }] as never)} title="Terms and Conditions" />
          {/* <Link onPress={() => navigation.navigate('Faqs' as never)} title="FAQ's" /> */}
          <Link onPress={() => {
            removeStorageData('user');
            removeStorageData('access-token');
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  { name: 'Splash' }, // Replace 'Home' with your root/index route
                ],
              })
            );
          }} title="Logout" />
        </ThemedView>
      </ScrollView>
    </BaseContainer>
  )
}

export default Settings

const styles = StyleSheet.create({
  body: {
    width: WIDTH(90),
    flex: 1,
    alignSelf: 'center',
    marginVertical: 15,
    paddingVertical: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  childBody: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    padding: 15,
    gap: 15,
    paddingHorizontal: 10,
    width: '95%'
  },
  headerText: {
    fontSize: 18,
  },
  subTitle: {
    fontSize: 18,
    marginVertical: 10
  }
})