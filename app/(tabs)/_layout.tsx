import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";


export default function TabLayout() {

    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: "blue",

        }}>
            <Tabs.Screen
            name="(home)"
            options={{
                tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faSackDollar}/>,
                tabBarLabel: "Home",
                headerShown: false}}
            />
            
            <Tabs.Screen
            name="settings"
            options={{
                tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faGear} />,
                tabBarLabel: "Settings",
                title: "Settings"}}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
})