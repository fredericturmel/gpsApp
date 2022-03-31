import { StyleSheet, Text, View } from "react-native";

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
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
