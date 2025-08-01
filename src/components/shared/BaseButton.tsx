import { BaseButtonProps } from "@/src/@types";
import { Colors } from "@/src/constants/Colors";
import { WIDTH } from "@/src/constants/Metrices";
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, useColorScheme } from "react-native";
import { baseShadow } from "../../assets/styles/shadow";



const BaseButton: React.FC<BaseButtonProps> = ({
    title,
    onPress,
    backgroundColor = "primary",
    textColor = "background",
    disabled = false
}) => {
    const colorScheme = useColorScheme()
    return (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    backgroundColor: Colors[colorScheme ?? 'light'][backgroundColor],
                    opacity: disabled ? .7 : 1
                },
                baseShadow
            ]}
            onPress={onPress}
            activeOpacity={0.7}
            disabled={disabled}
        >
            <Text style={[styles.text, { color: Colors[colorScheme ?? 'light'][textColor] }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 72,
        width: WIDTH(90),
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginVertical: 15
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default BaseButton;
