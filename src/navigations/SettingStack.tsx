import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-reanimated';
import { useColorScheme } from '../hooks/useColorScheme';
import { Colors } from '../constants/Colors';
import Settings from '../screens/Settings';
import BackButton from '../components/shared/BackButton';
import FAQs from '../screens/Faqs';
import EditProfile from '../screens/EditProfile';
import ChangePassword from '../screens/ChangePassword';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import TermsAndConditions from '../screens/TermsAndConditions';
import About from '../screens/About';

const Stack = createStackNavigator();

export default function SettingStack() {
    const colorScheme = useColorScheme();
    return (
        <>
            <Stack.Navigator initialRouteName='SettingsScreen'>
                <Stack.Screen
                    name="SettingsScreen"
                    component={Settings}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Settings',
                        headerTitleStyle: { color: Colors[colorScheme ?? 'light'].tintedText, fontSize: 22 },
                        headerStyle: {
                            backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground,
                            height: 75
                        }
                    }}
                />
                <Stack.Screen
                    name="Faqs"
                    component={FAQs}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: "FAQ's",
                        headerTitleStyle: { color: Colors[colorScheme ?? 'light'].tintedText, fontSize: 22 },
                        headerLeft: () => <BackButton />,
                        headerStyle: {
                            backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground,
                            height: 75
                        }
                    }}
                />
                <Stack.Screen
                    name="EditProfile"
                    component={EditProfile}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: "Personal Info.",
                        headerTitleStyle: { color: Colors[colorScheme ?? 'light'].tintedText, fontSize: 22 },
                        headerLeft: () => <BackButton />,
                        headerStyle: {
                            backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground,
                            height: 75
                        }
                    }}
                />
                <Stack.Screen
                    name="ChangePassword"
                    component={ChangePassword}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: "Change Password",
                        headerTitleStyle: { color: Colors[colorScheme ?? 'light'].tintedText, fontSize: 22 },
                        headerLeft: () => <BackButton />,
                        headerStyle: {
                            backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground,
                            height: 75
                        }
                    }}
                />
                <Stack.Screen
                    name="PrivacyPolicy"
                    component={PrivacyPolicy}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: "Privacy Policy",
                        headerTitleStyle: { color: Colors[colorScheme ?? 'light'].tintedText, fontSize: 22 },
                        headerLeft: () => <BackButton />,
                        headerStyle: {
                            backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground,
                            height: 75
                        }
                    }}
                />
                <Stack.Screen
                    name="TermsAndConditions"
                    component={TermsAndConditions}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: "Terms and Conditions",
                        headerTitleStyle: { color: Colors[colorScheme ?? 'light'].tintedText, fontSize: 22 },
                        headerLeft: () => <BackButton />,
                        headerStyle: {
                            backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground,
                            height: 75
                        }
                    }}
                />
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: "About us",
                        headerTitleStyle: { color: Colors[colorScheme ?? 'light'].tintedText, fontSize: 22 },
                        headerLeft: () => <BackButton />,
                        headerStyle: {
                            backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground,
                            height: 75
                        }
                    }}
                />
            </Stack.Navigator>
        </>
    );
}
