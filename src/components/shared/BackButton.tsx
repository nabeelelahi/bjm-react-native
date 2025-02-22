import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { backIcon, backIconWhite } from '@/src/assets'
import { useNavigation } from '@react-navigation/native'
import { useColorScheme } from '../../hooks/useColorScheme'

const BackButton = () => {
  const navigation = useNavigation()
  const colorScheme = useColorScheme()
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginHorizontal: 16 }}>
      <Image style={{ height: 16, width: 16 }} source={colorScheme === 'light' ? backIcon : backIconWhite} />
    </TouchableOpacity>
  )
}

export default BackButton