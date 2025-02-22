import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import BaseButton from "@/src/components/shared/BaseButton";
import AuthInput from "../components/form/AuthInput";
import { BaseContainer } from "../components/shared/BaseContainer";
import { ThemedView } from "../components/shared/ThemedView";
import { Colors } from "../constants/Colors";
import { ThemedText } from "../components/shared/ThemedText";

const EditProfile = () => {
    const [form] = useState({
        Name: "Robert Wilson",
        Email: "Robert@gmail.com",
        Password: "********",
        Address: "24/11 Robert Road, NY, USA",
        Mobile: "Access your data",
    });

    return (
        <BaseContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground} style={styles.container}>
                    <View style={styles.formContainer}>
                        {Object.entries(form).map(([key, value]) => (
                            <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground}>
                                <ThemedText style={{ paddingHorizontal: 20 }} lightColor={Colors.light.text} darkColor={Colors.dark.text}>{key}</ThemedText>
                                <AuthInput placeholder={value} />
                            </ThemedView>
                        ))}
                        <BaseButton title='Save Changes' />
                    </View>
                </ThemedView>
            </ScrollView>
        </BaseContainer >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    formContainer: {
        flex: 1,
        alignItems: "center",
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#5A189A",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
    },
    saveButton: {
        backgroundColor: "#004D71",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    saveButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default EditProfile;
