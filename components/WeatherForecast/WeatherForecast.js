import dayjs from 'dayjs';
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from './styles'

const WeatherForecast = (weatherForecast) => {

    console.log(weatherForecast);

    const getDate = (timestamp) => dayjs(timestamp).format('DD/MM/YYYY');


    return (
        <View style={styles.container}>
            <View style={styles.scrollContainer}>
                <ScrollView horizontal={true} style={styles.scrollItems}>
                    {weatherForecast.weatherForecast.daily.map((daily) => (
                        <>
                            <Text key={daily.dt}>{daily.weather[0].main}</Text>
                            <Text>{getDate(daily.dt)}</Text>
                        </>

                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

export default WeatherForecast