import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    weatherDetails: {
        marginTop: 0,
        margin: 15,
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 10,
        backgroundColor: "white",
        opacity: 0.7,
    },
    weatherDetailsRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    weatherDetailsBox: {
        flex: 1,
        padding: 20,
    },
    weatherDetailsItems: {
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    textSecondary: {
        fontSize: 15,
        color: "black",
        fontWeight: "700",
        margin: 7,
    },
});

export default styles;
