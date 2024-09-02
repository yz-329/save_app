import { Stack, useNavigation } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {

    return (
        <Stack screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="(tabs)" />
        </Stack>
    );
}