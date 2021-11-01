import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { API_TOKEN, BASE_WEATHER_URL, BASE_WEATHER_FORECAST_URL } from "@env"
import { SearchBar } from 'react-native-elements';
import haze from '../../assets/haze.jpg';


const Home = (props) => {

    const [citySearch, setCitySearch] = useState('');
    const [currentWeather, setCurrentWeather] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    // useEffect(() => {
    //     fetchWeather();
    // }, [citySearch])

    const fetchWeather = async (citySearch) => {
        try {
            // let { status } = await Location.requestForegroundPermissionsAsync()

            // if (status !== 'granted') {
            //     setErrorMessage('El acceso al GPS es necesario para usar esta Aplicación.')
            //     return
            // }
            // const location = await Location.getCurrentPositionAsync()

            // const { latitude, longitude } = location.coords

            const weatherUrl = `${BASE_WEATHER_URL}${citySearch}&units=metric&appid=${API_TOKEN}`

            const response = await fetch(weatherUrl)

            const result = await response.json()

            const weatherUrlForecast = `${BASE_WEATHER_FORECAST_URL}lat=${result.coord.lat}&lon=${result.coord.lon}&exclude=minutely&appid=${API_TOKEN}`

            const responseForecast = await fetch(weatherUrlForecast)

            const resultForecast = await responseForecast.json()

            if (response.ok) {
                setCurrentWeather(result)
                props.navigation.navigate('Data', {
                    currentWeather: result,
                    weatherForecast: resultForecast
                });
                setCitySearch('');
                getForecastCall(result);
            }
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    // const getForecastCall = async (resultForecast) => {

    //     const weatherUrl = `${BASE_WEATHER_FORECAST_URL}lat=${resultForecast.coord.lat}&lon=${resultForecast.coord.lon}&exclude=minutely&appid=${API_TOKEN}`

    //     const response = await fetch(weatherUrl)

    //     const result = await response.json()

    //     if (response.ok) {
    //         setWeatherForecast(result)
    //         props.navigation.navigate('Data', {
    //             currentWeather: currentWeather,
    //             weatherForecast: result
    //         });
    //     }
    // }

    return (
        <ImageBackground
            source={haze}
            style={styles.backgroundImg}
            resizeMode='cover'
        >
            <View style={styles.container}>
                <View style={styles.firstView}>
                    <SearchBar
                        placeholder="Buscar Ciudad"
                        onChangeText={e => { setCitySearch(e) }}
                        value={citySearch}
                        containerStyle={{
                            backgroundColor: 'transparent', borderWidth: 0, borderRadius: 5, borderBottomColor: 'transparent',
                            borderTopColor: 'transparent'
                        }}
                    // lightTheme
                    // style={styles.searchBar}
                    />
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => fetchWeather(citySearch)}
                    >
                        <Text
                            style={{ color: 'white' }}>BUSCAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImg: {
        height: '100%',
    },
    container: {
        flex: 1,
        alignContent: 'center',
        marginTop: 100,
        paddingHorizontal: 20,
    },
    firstView: {
        marginBottom: 10
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

export default Home