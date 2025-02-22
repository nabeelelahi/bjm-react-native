import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notifications from "../screens/Notifications";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useColorScheme } from "../hooks/useColorScheme.web";
import { Colors } from "../constants/Colors";
import BackButton from "../components/shared/BackButton";
import HomeStack from "./HomeStack";
import SettingStack from "./SettingStack";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import { navigate } from "./NavigationRef";

const Tab = createBottomTabNavigator();

const CustomTabButton = ({ children, onPress, isFocused }: any) => {
    const colorScheme = useColorScheme();
    return (
        <TouchableOpacity
            style={styles.tabButton}
            onPress={onPress}
            activeOpacity={1}
        >
            <View style={[styles.buttonContainer, { backgroundColor: isFocused ? Colors[colorScheme ?? "light"].primary : "transparent" }]}>
                {children}
            </View>
        </TouchableOpacity>
    );
};

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarStyle: {...styles.tabBarStyle, backgroundColor: Colors[colorScheme ?? "light"].tintedBackground},
                tabBarShowLabel: false,
                tabBarIconStyle: { height: 36, width: 35 },
                tabBarIcon: ({ focused }) => {
                    let icon = <AntDesign name="home" size={24} color={iconColor} />;;
                    const iconColor = focused ? Colors[colorScheme ?? "light"].iconActive : Colors[colorScheme ?? "light"].icon;

                    switch (route.name) {
                        case "Home":
                            icon = <AntDesign name="home" size={24} color={iconColor} />;
                            break;
                        case "Notifications":
                            icon = <Feather name="bell" size={24} color={iconColor} />;
                            break;
                        case "Settings":
                            icon = <Octicons name="gear" size={24} color={iconColor} />;
                            break;
                    }

                    return (
                        <CustomTabButton onPress={() => navigate(route.name as never)} isFocused={focused}>
                            {icon}
                        </CustomTabButton>
                    );
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{ 
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground,
                        height: 75
                    }
                 }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    headerTitleAlign: 'center',
                    headerTitle: "Notifications",
                    headerLeft: () => <BackButton />,
                    headerTitleStyle: { color: Colors[colorScheme ?? "light"].tintedText, fontSize: 22 },
                    headerStyle: {
                        backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground,
                        height: 75
                    }
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingStack}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 75,
        paddingTop: 15,
    },
    tabButton: {
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 60,
    },
    buttonContainer: {
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
});
