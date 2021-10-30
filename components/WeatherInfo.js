import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View, Image } from 'react-native'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const WeatherInfo = ({ currentWeather }) => {

    const iconUrl = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`

    return (
        <>
            {
                currentWeather &&
                <View style={styles.weatherInfo}>
                    <Text style={styles.textName}>{currentWeather.name}</Text>
                    <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
                    <Text style={styles.textPrimary}>{currentWeather.main.temp.toFixed(1)}°C</Text>
                    <Text style={styles.weatherDescription}>{currentWeather.weather[0].description}</Text>
                    <Text style={styles.texSecondary}>{currentWeather.weather[0].main}</Text>
                    <View style={styles.minMax}>
                        <Text style={styles.maxTemp}>
                            <FontAwesome5 name="angle-up" size={20} color={'red'} /> {currentWeather.main.temp_max.toFixed(1)}°C</Text>
                        <Text style={styles.minTemp}><FontAwesome5 name="angle-down" size={20} color={'blue'} /> {currentWeather.main.temp_min.toFixed(1)}°C</Text>
                    </View>
                </View>}
        </>
    )
}

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
})

export default WeatherInfo