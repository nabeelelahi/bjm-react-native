import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedView } from '../../shared/ThemedView'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { ThemedText } from '../../shared/ThemedText'
import { useNavigation } from '@react-navigation/native'
import { CommunityDto } from '../../../@types/Communtiy';

const CommunityCard = ({ item }: { item: CommunityDto }) => {
    const navigation = useNavigation();
    return (
        <ThemedView lightColor={Colors.light.background} darkColor={Colors.dark.background} key={item._id} style={styles.card}>
            <Image source={{ uri: item.image_url }} style={styles.cardImage} />
            <View style={styles.overlay} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <View style={styles.ratingContainer}>
                {/* <FontAwesome name="star" size={14} color="gold" />  ✅ Replaced expo icons
                <ThemedText style={styles.ratingText}>
                    {item.rating} ({item.members} members)
                </ThemedText> */}
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(...["CommunityDetails", { ...item }] as never)} style={styles.button}>
                <ThemedText style={styles.buttonText}>View Community</ThemedText>
            </TouchableOpacity>
        </ThemedView>
    )
}

export default CommunityCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 15,
        elevation: 5,
    },
    cardImage: {
        width: "100%",
        height: 140,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    cardTitle: {
        position: "absolute",
        top: 20,
        left: 15,
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        top: 50,
        left: 15,
    },
    ratingText: {
        color: "#fff",
        marginLeft: 5,
        fontSize: 14,
    },
    button: {
        backgroundColor: "#fff",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        position: "absolute",
        bottom: 15,
        left: 15,
    },
    buttonText: {
        color: "#7C3AED",
        fontWeight: "bold",
    },
});