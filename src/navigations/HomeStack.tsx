import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-reanimated';
import { useColorScheme } from '../hooks/useColorScheme';
import HomeScreen from '../screens/Home';
import { Profile } from '../components/partial/Home/HomeHeader';
import { Colors } from '../constants/Colors';
import Passports from '../screens/Passports';
import BackButton from '../components/shared/BackButton';
import Achievements from '../screens/Achievements';
import Articles from '../screens/Article';
import DocGuide from '../screens/DocGuide';
import Communities from '../screens/Communitites';
import Bible from '../screens/Bible';

const Stack = createStackNavigator();

export default function HomeStack() {
    const colorScheme = useColorScheme();
    return (
        <>
            <Stack.Navigator initialRouteName='HomeScreen'>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Welcome Robert',
                        headerTitleStyle: {
                            fontFamily: 'Poppins-Semibold',
                            color: Colors[colorScheme ?? 'light'].tintedText,
                            fontSize: 22,
                        },
                        headerRight: () => <Profile />,
                        headerLeft: () => null,
                        headerStyle: {
                            backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground,
                            height: 75
                        }
                    }} />
                <Stack.Screen
                    name="Passports"
                    component={Passports}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Passport',
                        headerLeft: () => <BackButton />,
                        headerTitleStyle: { fontFamily: 'Poppins-Semibold', color: Colors[colorScheme ?? 'light'].tintedText, fontSize: 22 },
                        headerStyle: {
                            backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground,
                            height: 75
                        }
                    }}
                />
                <Stack.Screen
                    name="Achievements"
                    component={Achievements}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Achievements',
                        headerLeft: () => <BackButton />,
                        headerTitleStyle: { fontFamily: 'Poppins-Semibold', color: Colors[colorScheme ?? 'light'].tintedText, fontSize: 22, fontFamily: 'Poppins-Semibold' },
                        headerStyle: {
                            backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground,
                            height: 75
                        }
                    }}
                />
                <Stack.Screen
                    name="Articles"
                    component={Articles}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Articles',
                        headerLeft: () => <BackButton />,
                        headerTitleStyle: { fontFamily: 'Poppins-Semibold', color: Colors[colorScheme ?? 'light'].tintedText, fontSize: 22 },
                        headerStyle: {
                            backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground,
                            height: 75
                        }
                    }}
                />
                <Stack.Screen
                    name="DocGuide"
                    component={DocGuide}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Doc/Guide',
                        headerLeft: () => <BackButton />,
                        headerTitleStyle: { color: Colors[colorScheme ?? 'light'].tintedText, fontSize: 22 },
                        headerStyle: {
                            backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground,
                            height: 75
                        }
                    }}
                />
                <Stack.Screen
                    name="Communities"
                    component={Communities}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Communities',
                        headerLeft: () => <BackButton />,
                        headerTitleStyle: { fontFamily: 'Poppins-Semibold', color: Colors[colorScheme ?? 'light'].tintedText, fontSize: 22 },
                        headerStyle: {
                            backgroundColor: Colors[colorScheme ?? 'light'].tintedBackground,
                            height: 75
                        }
                    }}
                />
                <Stack.Screen
                    name="Bible"
                    component={Bible}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: 'Bible',
                        headerLeft: () => <BackButton />,
                        headerTitleStyle: { fontFamily: 'Poppins-Semibold', color: Colors[colorScheme ?? 'light'].tintedText, fontSize: 22 },
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
