// components/NotificationCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NotificationDto } from '../../../@types/Notification';
import { formatTimeAgo } from '../../../utils/date';

const NotificationCard: React.FC<{ item: NotificationDto }> = ({
    item
}) => {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.image_url }} style={styles.image} />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <Text style={styles.time}>{formatTimeAgo(item.created_at)}</Text>
        </View>
    );
};

export default NotificationCard;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 0.6,
        borderBottomColor: '#eee',
    },
    imageContainer: {
        position: 'relative',
        marginRight: 10,
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    badge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: '#f39c12',
        width: 18,
        height: 18,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
    },
    title: {
        fontWeight: '700',
        fontSize: 14,
        color: '#000',
    },
    description: {
        fontSize: 12,
        color: '#555',
        marginTop: 2,
    },
    time: {
        fontSize: 11,
        color: '#999',
        marginLeft: 8,
        marginTop: 4,
    },
});
