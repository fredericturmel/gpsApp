import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={defaultAppStyles.container}>
            <Text>App minimale ReactNative</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const defaultAppStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
