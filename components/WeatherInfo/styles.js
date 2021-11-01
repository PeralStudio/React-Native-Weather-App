import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    weatherInfo: {
        marginTop: 50,
        alignItems: 'center',
    },
    weatherDescription: {
        textTransform: 'capitalize',
    },
    weatherIcon: {
        width: 150,
        height: 150,
        marginTop: -30,
        marginBottom: 10
    },
    textName: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    textPrimary: {
        fontSize: 40,
        color: 'black',
        marginTop: -50
    },
    texSecondary: {
        fontSize: 20,
        color: 'red',
        fontWeight: '500',
        marginTop: 0,
    },
    minMax: {
        flexDirection: 'row',
    },
    minTemp: {
        marginLeft: 10,
        fontSize: 20,
        color: 'black',
        fontWeight: '500',
        marginTop: 0,
    },
    maxTemp: {
        marginRight: 10,
        fontSize: 20,
        color: 'black',
        fontWeight: '500',
        marginTop: 0,
    },
});

export default styles;