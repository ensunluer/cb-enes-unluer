import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { UsersScreen } from "../screens/UsersScreen";
import { UserDetailsScreen } from "../screens/UserDetailsScreen";
import { AddUser } from "../screens/AddUser";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen
          name="Userst"
          component={UsersScreen}
          options={{ title: "User Screen" }}
        />
        <Stack.Screen
          name="UserDetailsScreen"
          component={UserDetailsScreen}
          options={{ title: "User Details Screen" }}
        />
        <Stack.Screen
          name="AddUser"
          component={AddUser}
          options={{ title: "Add User" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
