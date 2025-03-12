import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { QuestionAnswerDto } from '../../../@types/QuestionAnswer'
import { formatTimeAgo } from '../../../utils/date'
import { ThemedText } from '../../shared/ThemedText'
import { ThemedView } from '../../shared/ThemedView'

const AnswerCard = ({ item }: { item: QuestionAnswerDto }) => {
  return (
    <ThemedView style={styles.card}>
      {/* <ThemedText style={styles.answerAuthor}>{item.user.name}</ThemedText> */}
      <ThemedText style={styles.description}>{item.title}</ThemedText>
      <View style={styles.bottomSection}>
        <ThemedText style={styles.time}>{'Author: ' + item.user.name}</ThemedText>
        <ThemedText style={styles.time}>{formatTimeAgo(item.created_at)}</ThemedText>
      </View>
    </ThemedView>
  )
}

export default AnswerCard

// Styles
const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  description: {
    fontSize: 14,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  time: {
    fontSize: 12,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    paddingVertical: 5,
    marginRight: 10,
  },
});