
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabRoutes from "@/routes/tabroutes"

const Stack = createNativeStackNavigator();

type StackNavigation = {
  HomeScreen: undefined;
  TabRoutes: undefined;

}

export type StackTypes = NativeStackNavigationProp<StackNavigation>


export default function AuthRoutes() {
  return (
    <SafeAreaProvider>
    
        <Stack.Navigator
        initialRouteName="Home"
        > 
        <Stack.Screen
          name="HomeScreen"
          component={TabRoutes}
          options={{
            headerShown: false
          }}
        />
        </Stack.Navigator>
      
    </SafeAreaProvider>
  );
}