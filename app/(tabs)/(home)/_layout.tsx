import { Stack, useNavigation } from "expo-router";
import { useEffect } from "react";

export default function HomeLayout() {

  return (
    <Stack screenOptions={
      {
        headerShown: false,
        headerStyle: {backgroundColor: '#f4511e',},
      }
    }>
      <Stack.Screen name="index" />
    </Stack>
  );
}
