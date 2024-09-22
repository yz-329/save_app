import { Stack, useNavigation } from "expo-router";

export default function MenuLayout() {

  return (
    <Stack screenOptions={
      {
        headerShown: false,
        headerStyle: {backgroundColor: '#f4511e',},
      }
    }>
      <Stack.Screen name="menu" />
    </Stack>
  );
}
