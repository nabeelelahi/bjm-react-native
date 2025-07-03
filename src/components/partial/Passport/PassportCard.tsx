import React, { useState } from 'react'
import { ThemedText } from '@/src/components/shared/ThemedText'
import { ThemedView } from '@/src/components/shared/ThemedView'
import { Colors } from '@/src/constants/Colors'
import { passportIcon } from '@/src/assets'
import { Image, TouchableOpacity, StyleSheet } from 'react-native'
import { WIDTH } from '@/src/constants/Metrices'
import { useColorScheme } from '@/src/hooks/useColorScheme'
import { baseShadow } from '../../../assets/styles/shadow'
import { PassportDto } from '../../../@types/Passport'
import { request } from '../../../repository/request'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Loader from '../../shared/Loader'

const PassportCard = ({ item }: { item: PassportDto }) => {
    const colorScheme = useColorScheme();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(item);
    const onPassportPress = () => {
        setLoading(true);
        request('passport-marker', data.marked_done ? 'delete' : 'post')
            .setBody({ passport: data._id })
            .onSuccess(() => {
                setLoading(false);
                setData(p => ({ ...p, marked_done: !p.marked_done }));
            })
            .onFailure(() => setLoading(false))
            .call();
    };
    console.log('data.....', data)
    return (
        <TouchableOpacity
            onPress={onPassportPress}
            style={[
                styles.cardBody,
                { backgroundColor: Colors[colorScheme ?? 'light'].background, opacity: loading ? 0.5 : 1 },
                baseShadow
            ]}>
            <ThemedView style={{ flexDirection: 'row' }} lightColor={'transparent'} darkColor={'transparent'}>
                <Image resizeMode='contain' style={styles.icon} source={passportIcon} />
                <ThemedView lightColor={'transparent'} darkColor={'transparent'} style={{ marginHorizontal: 10, width: '80%' }}>
                    <ThemedText style={styles.blueText}>{data.title}</ThemedText>
                    <ThemedText style={styles.greyText}>{data.marked_done ? 'Completed' : 'Not Started'}</ThemedText>
                </ThemedView>
            </ThemedView>
            <ThemedView style={styles.checkBox} >
                {
                    loading ?
                        <Loader />
                        :
                        data.marked_done ?
                            <AntDesign name='check' size={20} />
                            :
                            null
                }
            </ThemedView>
        </TouchableOpacity>
    );
};

export default PassportCard;

const styles = StyleSheet.create({
    cardBody: {
        alignSelf: 'center',
        alignItems: 'center',
        // justifyContent: 'space-between',
        flexDirection: 'row',
        width: WIDTH(90),
        minHeight: 68,
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
        fontSize: 16,
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
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})