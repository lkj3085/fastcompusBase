import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinkDetailScreen } from "../screen/LinkDetailScreen";
import { LinkListScreen } from "../screen/LinkListScreen";

const Stack = createNativeStackNavigator();

export const LinkStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="LinkList"
      screenOptions={{
        headerShown: false,
        presentation: "card",
      }}>
      <Stack.Screen name="LinkList" component={LinkListScreen} />
      <Stack.Screen name="LinkDetail" component={LinkDetailScreen} />
    </Stack.Navigator>
  );
};
