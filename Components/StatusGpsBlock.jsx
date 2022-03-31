import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export const StatusGpsBlock = function ({ positionAvailable }) {
    const color = positionAvailable ? "#bada55" : "#ff1010";

    return (
        <View style={defaultStatusGpsBlockStyles.container}>
            <Text style={defaultStatusGpsBlockStyles.title}>Status GPS</Text>
            <View
                style={{
                    ...defaultStatusGpsBlockStyles.status,
                    backgroundColor: color,
                }}></View>
        </View>
    );
};

const defaultStatusGpsBlockStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        padding: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,
    },
    title: { fontSize: 20 },
    status: {
        height: 20,
        width: 20,
        borderRadius: 10,
    },
});
