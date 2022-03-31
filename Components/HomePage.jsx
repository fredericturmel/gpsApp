import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export const HomePage = function () {
    return (
        <View style={defaultHomePageStyles.container}>
            <Text>HomePage</Text>
            <StatusBar style="auto" />
        </View>
    );
};

const defaultHomePageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
