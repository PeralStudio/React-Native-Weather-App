import React from 'react'
import WeatherInfo from '../components/WeatherInfo'
import WeatherDetails from '../components/WeatherDetails';
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import haze from '../assets/haze.jpg';
import clouds from '../assets/clouds.jpg';
import rainy from '../assets/rainy.png';
import sunny from '../assets/sunny.jpg';
const Data = ({ route, navigation }) => {

    const checkImageBackground = (weather) => {
        // if (weather === 'Snow') return snow
        if (weather === 'Clouds') return clouds
        if (weather === 'Clear') return sunny
        if (weather === 'Rain') return rainy
        if (weather === 'Haze') return haze
        return haze;
    }

    return (
        <ImageBackground
            source={checkImageBackground(route.params.currentWeather.weather[0].main)}
            style={styles.backgroundImg}
            resizeMode='cover'
        >
            <View style={styles.view}>
                <WeatherInfo currentWeather={route.params.currentWeather} />
                <WeatherDetails currentWeather={route.params.currentWeather}
                />
            </View>
            <View style={styles.viewTwo}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={{ color: 'white' }}>VOLVER</Text>
                </TouchableOpacity>
                {/* <Button
                    onPress={() => {
                        navigation.navigate('Home')
                    }}
                    title="Volver"
                    color="#0362fc"
                    accessibilityLabel="Volver"
                /> */}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    viewTwo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    backgroundImg: {
        height: '100%',
    },
    button: {
        alignSelf: 'center',
        alignItems: 'center',
        width: '25%',
        padding: 10,
        backgroundColor: '#23272B',
        borderRadius: 10
    }
});

export default Data