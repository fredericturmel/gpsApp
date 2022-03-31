import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StatusGpsBlock } from "./StatusGpsBlock";
import { Header } from "./Header";

export const HomePage = function () {
    return (
        <View style={defaultHomePageStyles.container}>
            <Header />
            <StatusGpsBlock positionAvailable={true} />
            <StatusBar style="auto" />
        </View>
    );
};

const defaultHomePageStyles = StyleSheet.create({
    container: {
        marginTop: 25,

        flex: 1,
        backgroundColor: "#fff",
    },
});
