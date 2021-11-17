import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundImg: {
        height: "100%",
    },
    container: {
        flex: 1,
        alignContent: "center",
        marginTop: 100,
        paddingHorizontal: 20,
    },
    firstView: {
        marginBottom: 10,
    },
    button: {
        alignSelf: "center",
        alignItems: "center",
        width: "25%",
        padding: 10,
        backgroundColor: "#23272B",
        borderRadius: 10,
    },
    secondView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 10,
        width: "100%",
    },
});

export default styles;
