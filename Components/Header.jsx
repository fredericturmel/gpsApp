import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export const Header = function () {
    return (
        <View style={defaultHeaderStyles.container}>
            <Text style={defaultHeaderStyles.title}>GeoTracker</Text>
        </View>
    );
};

const defaultHeaderStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        padding: 20,
        backgroundColor: "#32B4B4",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "#105050",
        borderBottomWidth: 6,
    },
    title: {
        fontSize: 25,
        fontStyle: "italic",
        fontWeight: "100",
        color: "white",
    },
    status: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: "#bada55",
    },
});
