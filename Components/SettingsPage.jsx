import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
export const SettingsPage = function () {
    return (
        <View style={defaultSettingsPageStyles.container}>
            <Text>SettingsPage</Text>
            <StatusBar style="auto" />
        </View>
    );
};

const defaultSettingsPageStyles = StyleSheet.create({
    container: {
        marginTop: 25,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
