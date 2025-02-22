import React from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import { BaseContainer } from "../components/shared/BaseContainer";
import { Colors } from "../constants/Colors";
import { ThemedText } from "../components/shared/ThemedText";
import { bibleBackground } from "../assets";

const Bible = () => {
    return (
        <BaseContainer>
            <ImageBackground source={bibleBackground} resizeMode="stretch" style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{...styles.contentContainer}}>
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
            </ImageBackground>
        </BaseContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingBottom: 30,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    paragraph: {
        marginBottom: 10,
        textAlign: "center",
    },
});

export default Bible;
