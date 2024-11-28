import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";

import BottomTabNavigator from "./BottomTabNavigation";

const Stack = createStackNavigator();

export type StackParamList = {
  Home: undefined; // Якщо екран не приймає параметрів
  Login: undefined;
  Registration: { userEmail: string }; // Якщо екран приймає параметри
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{
          title: "",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          title: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
