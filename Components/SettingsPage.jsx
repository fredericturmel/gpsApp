import { StyleSheet, Text, View } from "react-native";

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
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
