import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { BaseContainer } from "../components/shared/BaseContainer";
import { ThemedView } from "../components/shared/ThemedView";
import { Colors } from "../constants/Colors";
import { ThemedText } from "../components/shared/ThemedText";

const PrivacyPolicy = () => {
    return (
        <BaseContainer>
            <ThemedView darkColor={Colors.dark.tintedBackground} lightColor={Colors.light.tintedBackground} style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{...styles.contentContainer, backgroundColor: 'transparent'}}>
                    <ThemedText darkColor={Colors.dark.text} lightColor={Colors.light.text} style={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </ThemedText>
                    <ThemedText darkColor={Colors.dark.text} lightColor={Colors.light.text} style={styles.paragraph}>
                        Consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ThemedText>
                    <ThemedText darkColor={Colors.dark.text} lightColor={Colors.light.text} style={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </ThemedText>
                    <ThemedText darkColor={Colors.dark.text} lightColor={Colors.light.text} style={styles.paragraph}>
                        Consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ThemedText>
                </ScrollView>
            </ThemedView>
        </BaseContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    contentContainer: {
        paddingBottom: 30,
        paddingTop: 40,
    },
    paragraph: {
        marginBottom: 10,
        textAlign: "center",
    },
});

export default PrivacyPolicy;
