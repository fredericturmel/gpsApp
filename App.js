import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { StyleSheet, Text, View } from "react-native";
import { HomePage } from "./Components/HomePage";
import { HistoryListPage } from "./Components/HistoryListPage";
import { SettingsPage } from "./Components/SettingsPage";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Home") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === "HistoryList") {
                            iconName = focused ? "list" : "list-outline";
                        } else if (route.name === "Settings") {
                            iconName = focused
                                ? "settings"
                                : "settings-outline";
                        }

                        // You can return any component that you like here!
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                    tabBarActiveTintColor: "#2196F3",
                    tabBarInactiveTintColor: "gray",
                })}>
                <Tab.Screen name="Home" component={HomePage} />
                <Tab.Screen name="HistoryList" component={HistoryListPage} />
                <Tab.Screen name="Settings" component={SettingsPage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
