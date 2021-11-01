import React from 'react'
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';
import styles from './styles';
import { Button, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import haze from '../../assets/haze.jpg';
import clouds from '../../assets/clouds.jpg';
import rainy from '../../assets/rainy.png';
import sunny from '../../assets/sunny.jpg';
import WeatherForecast from '../../components/WeatherForecast/WeatherForecast';


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
                {/* <WeatherForecast weatherForecast={route.params.weatherForecast} /> */}
            </View>
        </ImageBackground>
    )
}

export default Data