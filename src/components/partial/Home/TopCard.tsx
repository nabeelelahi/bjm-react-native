import { Image, TouchableOpacity } from 'react-native';
import React from 'react'

const TopCard = ({ image, onPress, children }: { image: any, onPress: () => unknown, children: React.ReactNode }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image style={{ height: 110, width: 166 }} source={image} />
            {children}
        </TouchableOpacity>
    )
}

export default TopCard