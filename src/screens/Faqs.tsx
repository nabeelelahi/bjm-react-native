import React, { useState, useMemo } from "react";
import {
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";  // Updated import
import { BaseContainer } from "../components/shared/BaseContainer";
import { ThemedView } from "../components/shared/ThemedView";
import { Colors } from "../constants/Colors";
import { ThemedText } from "../components/shared/ThemedText";
import { useColorScheme } from "../hooks/useColorScheme";

const faqData = [
    { id: "1", question: "What is Viral Pitch?", answer: "Viral Pitch is a platform..." },
    { id: "2", question: "How to apply for a campaign?", answer: "You can apply by..." },
    { id: "3", question: "How to know status of a campaign?", answer: "Check the status in..." },
    { id: "4", question: "How to know status of a campaign?", answer: "Check the status in..." },
    { id: "5", question: "How to apply for a campaign?", answer: "You can apply by..." },
    { id: "6", question: "How to know status of a campaign?", answer: "Check the status in..." },
];

const FAQs = () => {
    const [search, setSearch] = useState("");
    const [expanded, setExpanded] = useState<null | string>(null);
    const colorScheme = useColorScheme();

    // Memoize the filtered FAQs to improve performance on large datasets
    const filteredFAQs = useMemo(() => 
        faqData.filter((faq) =>
            faq.question.toLowerCase().includes(search.toLowerCase())
        ),
        [search]
    );

    return (
        <BaseContainer>
            <ThemedView darkColor={Colors.dark.tintedBackground} lightColor={Colors.light.tintedBackground} style={styles.container}>
                <ThemedText type="subtitle" style={{ marginHorizontal: 20 }} lightColor={Colors.light.icon} darkColor={Colors.dark.icon}>
                    We’re here to help you with anything and everything on ViralPitch
                </ThemedText>
                <ThemedView shadow radius darkColor={Colors.dark.background} lightColor={Colors.light.background} style={styles.searchContainer}>
                    <Ionicons name="search-outline" size={20} color="#aaa" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search Help"
                        onChangeText={setSearch}
                        value={search}
                        accessibilityLabel="Search Help Input"
                    />
                </ThemedView>

                <ThemedText type="defaultSemiBold" lightColor={Colors.light.icon} darkColor={Colors.dark.icon} style={styles.faqTitle}>
                    FAQ's
                </ThemedText>

                {/* FAQ List */}
                <FlatList
                    data={filteredFAQs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                ...styles.faqItem,
                                backgroundColor: Colors[colorScheme ?? 'light'].background,
                                borderBottomColor: Colors[colorScheme ?? 'light'].text,
                            }}
                            onPress={() => setExpanded(expanded === item.id ? null : item.id)}
                            accessibilityLabel={`Toggle answer for ${item.question}`}
                        >
                            <ThemedText lightColor={Colors.light.text} darkColor={Colors.light.text}>
                                {item.question}
                            </ThemedText>
                            {expanded === item.id && (
                                <ThemedText lightColor={Colors.light.text} darkColor={Colors.light.text} style={styles.faqAnswer}>
                                    {item.answer}
                                </ThemedText>
                            )}
                        </TouchableOpacity>
                    )}
                />
            </ThemedView>
        </BaseContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
    searchContainer: {
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginVertical: 20,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
    },
    faqTitle: {
        marginBottom: 10,
        marginHorizontal: 20,
    },
    faqItem: {
        padding: 15,
        borderRadius: 8,
        marginBottom: 8,
        borderBottomColor: '#D4D4D4',
        borderBottomWidth: 1,
        elevation: 2,
    },
    faqAnswer: {
        fontSize: 14,
        color: "#666",
        marginTop: 5,
    },
});

export default FAQs;
