import React from "react";
import { TextInput, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "@/src/constants/Colors";
import { IconSymbol } from "../../ui/IconSymbol";
import { ThemedView } from "../../shared/ThemedView";
import { baseShadow } from "../../../assets/styles/shadow";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar = ({ placeholder = "Search..." }) => {
    const colorSchemame = useColorScheme()
    return (
        <ThemedView style={[styles.container, {backgroundColor: Colors[colorSchemame ?? 'light'].background }, baseShadow]}>
            <TextInput style={{ ...styles.input, color: Colors[colorSchemame ?? 'light'].text }} placeholder={placeholder} />
            <AntDesign size={20} name='search1' color={Colors[colorSchemame ?? 'light'].icon} />
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 50,
        paddingHorizontal: 30,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 15,
    },
});

export default SearchBar;
