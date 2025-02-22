import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-reanimated';
import Login from '@/src/screens/login';
import TabLayout from './HomeTabs';

const Stack = createStackNavigator();



export default function BaseStack() {
    return (
        <>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Tabs" component={TabLayout} options={{ headerShown: false }}  />
                {/* <Stack.Screen name="+not-found" component={NotFoundScreen} /> */}
            </Stack.Navigator>
        </>
    );
}
