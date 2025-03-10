import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { BaseContainer } from '../components/shared/BaseContainer'
import QuestionCard from '../components/partial/Community/QuestionCard'

const QuestionAnswer = ({ route }: any) => {
    return (
        <BaseContainer>
        <ScrollView style={{ flex: 1, paddingVertical: 20 }}>
            <QuestionCard item={route.params} />
        </ScrollView>
        </BaseContainer>
    )
}

export default QuestionAnswer