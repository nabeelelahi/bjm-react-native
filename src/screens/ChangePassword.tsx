import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import BaseButton from "@/src/components/shared/BaseButton";
import AuthInput from "../components/form/AuthInput";
import { BaseContainer } from "../components/shared/BaseContainer";
import { ThemedView } from "../components/shared/ThemedView";
import { Colors } from "../constants/Colors";
import { ThemedText } from "../components/shared/ThemedText";

const changePasswordField = [
    {
        id: '1',
        label: 'Old Password',
    },
    {
        id: '1',
        label: 'New Passowrd',
    },
    {
        id: '1',
        label: 'Confirm New Password',
    },
]

const ChangePassword = () => {
    return (
        <BaseContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground} style={styles.container}>
                    <View style={styles.formContainer}>
                        {changePasswordField.map((item) => (
                            <ThemedView lightColor={Colors.light.tintedBackground} darkColor={Colors.dark.tintedBackground}>
                                <ThemedText style={{ paddingHorizontal: 20 }} lightColor={Colors.light.text} darkColor={Colors.dark.text}>{item.label}</ThemedText>
                                <AuthInput placeholder={item.label} />
                            </ThemedView>
                        ))}
                        <BaseButton title='Change Password' />
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

export default ChangePassword;
