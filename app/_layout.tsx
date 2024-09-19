import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'Montserrat Regular': require('../assets/fonts/Montserrat Regular.ttf'),
        'Montserrat Black': require('../assets/fonts/Montserrat Black.ttf'),
        'Montserrat Bold': require('../assets/fonts/Montserrat Bold.ttf'),
      });

    return (
        <Stack screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="(tabs)" />
        </Stack>
    );
}