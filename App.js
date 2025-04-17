import { Alert, ImageBackground, Platform } from "react-native";
import { style } from "./App.style.js";
import { Home } from "./pages/Home/Home.jsx";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { WeatherAPI } from "./api/weather.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Forecast } from "./pages/Forecast/Forecast.jsx";
import { ForecastHourly } from "./pages/Forecast_hourly/Forecast_hourly.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dayBg from "./assets/day_bg.jpg";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";

const Stack = createNativeStackNavigator();
const navTheme = {
  colors: {
    background: "transparent",
  },
};

export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [imgBG, setImgBG] = useState(dayBg);

  useEffect(() => {
    getUserCoordinates();
    //subscribeToNotifications();

    /*Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response.notification.request.content.data);
    });

    Notifications.addNotificationReceivedListener((notification) => {
      console.log(notification.request.content.data);
    })
    */
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates);
      fetchCityByCoords(coordinates);
      saveCoordinates();
    }
  }, [coordinates]);

  async function saveCoordinates() {
    try {
      const coordsJSON = JSON.stringify(coordinates);
      await AsyncStorage.setItem("@coordinates", coordsJSON);
    } catch (err) {
      alert(err);
    }
  }

  async function loadCoordinates() {
    try {
      const coordsString = await AsyncStorage.getItem("@coordinates");
      setCoordinates(
        JSON.parse(coordsString) || { lat: 52.4716537, lng: 13.3141695 }
      );
      console.log(coordinates);
    } catch (err) {
      alert(err);
    }
  }
  /*
  async function subscribeToNotifications() {
    let token;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== "granted") {
          alert("failed to get permission");
          return;
        }
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: Constants.expoConfig?.extra?.eas?.projectId,
        })
      ).data;

      //send the token to the backend for it to store
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token;
  }
*/
  async function fetchWeatherByCoords(coordinates) {
    const weatherResponse = await WeatherAPI.fetchWeatherByCoords(coordinates);
    setWeather(weatherResponse);
  }

  async function fetchCityByCoords(coordinates) {
    const cityResponse = await WeatherAPI.fetchCityByCoords(coordinates);

    setCity(
      cityResponse.address.city ||
        cityResponse.address.village ||
        cityResponse.address.town
    );
  }

  async function fetchCoordsByCity(city) {
    try {
      const coordsResponse = await WeatherAPI.fetchCoordsByCity(city);

      setCoordinates(coordsResponse);
    } catch (err) {
      Alert.alert("Please try again!", err);
    }
    this.textInput.clear();
  }

  async function getUserCoordinates() {
    try {
      const { status } = await requestForegroundPermissionsAsync();
      if (status === "granted") {
        const location = await getCurrentPositionAsync();
        setCoordinates({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
      } else {
        setCoordinates({ lat: 52.4716537, lng: 13.3141695 });
      }
    } catch (err) {
      loadCoordinates();
    }
  }

  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        imageStyle={style.img}
        style={style.img_background}
        source={imgBG}
      >
        <SafeAreaProvider>
          <SafeAreaView style={style.container}>
            {weather && (
              <Stack.Navigator
                screenOptions={{ headerShown: false, animation: "fade" }}
                initialRouteName="Home"
              >
                <Stack.Screen name="Home">
                  {() => (
                    <Home
                      city={city}
                      weather={weather}
                      onSubmitSearch={fetchCoordsByCity}
                      setImgBG={setImgBG}
                    />
                  )}
                </Stack.Screen>
                <Stack.Screen name="Forecast" component={Forecast} />
                <Stack.Screen
                  name="Forecast_hourly"
                  component={ForecastHourly}
                />
              </Stack.Navigator>
            )}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}
