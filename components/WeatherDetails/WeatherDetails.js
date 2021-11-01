import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { ScrollView } from 'react-native'
import styles from './styles'

const WeatherDeatils = ({ currentWeather }) => {

    return (
        <ScrollView>
            <View style={styles.weatherDetails}>
                <View style={styles.weatherDetailsRow}>
                    <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: 'red' }}>
                        <View style={styles.weatherDetailsRow}>
                            <FontAwesome5 name="temperature-low" size={25} color={'red'} />
                            <View style={styles.weatherDetailsItems}>
                                <Text>Sensación :</Text>
                                <Text style={styles.textSecondary}>{currentWeather.main.feels_like.toFixed(1)} °C</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.weatherDetailsBox}>
                        <View style={styles.weatherDetailsRow}>
                            <MaterialCommunityIcons name="water" size={30} color={'red'} />
                            <View style={styles.weatherDetailsItems}>
                                <Text>Humedad :</Text>
                                <Text style={styles.textSecondary}>{currentWeather.main.humidity} %</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ ...styles.weatherDetailsRow, borderTopWidth: 1, borderTopColor: 'red' }}>
                    <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: 'red' }}>
                        <View style={styles.weatherDetailsRow}>
                            <MaterialCommunityIcons name="weather-windy" size={30} color={'red'} />
                            <View style={styles.weatherDetailsItems}>
                                <Text>Viento :</Text>
                                <Text style={styles.textSecondary}>{currentWeather.wind.speed.toFixed(1)} m/s</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.weatherDetailsBox}>
                        <View style={styles.weatherDetailsRow}>
                            <MaterialCommunityIcons name="speedometer" size={30} color={'red'} />
                            <View style={styles.weatherDetailsItems}>
                                <Text>Presión :</Text>
                                <Text style={styles.textSecondary}>{currentWeather.main.pressure} hPa</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default WeatherDeatils