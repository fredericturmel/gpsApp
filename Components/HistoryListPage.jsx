import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
export const HistoryListPage = function () {
    return (
        <View style={defaultHistoryListPageStyles.container}>
            <Text>HistoryListPage</Text>
            <StatusBar style="auto" />
        </View>
    );
};

const defaultHistoryListPageStyles = StyleSheet.create({
    container: {
        marginTop: 25,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
