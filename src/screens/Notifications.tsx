import { ScrollView } from 'react-native'
import React from 'react'
import { BaseContainer } from '../components/shared/BaseContainer'
import { noNotification } from '../assets'
import { ThemedView } from '../components/shared/ThemedView'
import { Colors } from '../constants/Colors'
import FastImage from 'react-native-fast-image'
import { HEIGHT } from '../constants/Metrices'
import { ThemedText } from '../components/shared/ThemedText'
import NotificationCard from '../components/partial/Notifications/Card'
import FlatListComponent from '../components/shared/FlatList'
import { NotificationDto } from '../@types/Notification'

const Notifications = () => {
  return (
    <BaseContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatListComponent<NotificationDto>
          route='notification'
          method="get"
          style={{ backgroundColor: 'transparent' }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <NotificationCard item={item} />}
          noDataComp={(
            <ThemedView darkColor={Colors.dark.tintedBackground} lightColor={Colors.light.tintedBackground} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: HEIGHT(80) }}>
              <FastImage resizeMode='contain' style={{ height: 200, width: 200 }} source={noNotification} />
              <ThemedText darkColor={Colors.dark.text} lightColor={Colors.light.text}>
                No Notifications
              </ThemedText>
            </ThemedView>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
        {/* <ThemedView darkColor={Colors.dark.tintedBackground} lightColor={Colors.light.tintedBackground} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: HEIGHT(80) }}>
          <FastImage resizeMode='contain' style={{ height: 200, width: 200 }} source={noNotification} />
          <ThemedText darkColor={Colors.dark.text} lightColor={Colors.light.text}>
            No Notifications
          </ThemedText>
        </ThemedView> */}
      </ScrollView>
    </BaseContainer>
  )
}

export default Notifications