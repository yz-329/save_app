import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { TabBar } from "@/components/TabBar";

// icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faGear } from "@fortawesome/free-solid-svg-icons";


export default function TabLayout() {

    return (
        
        <Tabs tabBar={props => <TabBar {...props} />}>
            <Tabs.Screen
            name="(home)"
            options={{
                tabBarLabel: "Home",
                title: "Home",
                headerShown: false}}
            />

            <Tabs.Screen
            name="(menu)"
            options={{
                tabBarLabel: "Menu",
                title: "Menu",
                headerShown: false}}
            />
            
            <Tabs.Screen
            name="settings"
            options={{
                tabBarLabel: "Settings",
                title: "Settings"}}
            />
        </Tabs>
    );
}
