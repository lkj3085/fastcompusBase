import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinkStackNavigation } from "./LinkStackNavigation";
import { AddLinkScreen } from "../screen/AddLinkScreen";

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "containedModal",
      }}>
      <Stack.Screen name="LinkStack" component={LinkStackNavigation} />
      <Stack.Screen name="AddLink" component={AddLinkScreen} />
    </Stack.Navigator>
  );
};
