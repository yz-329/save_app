import { Stack, useNavigation } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'Nerko One Regular': require('../assets/fonts/Nerko One Regular.ttf'),
        'Montserrat Regular': require('../assets/fonts/Montserrat Regular.ttf'),

      });

    return (
        <Stack screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="(tabs)" />
        </Stack>
    );
}