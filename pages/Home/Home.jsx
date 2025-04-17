import { style } from "./Home.style.jsx";
import { Text, TouchableOpacity, View } from "react-native";
import { Txt } from "../../components/Txt/Txt.jsx";
import { WeatherBasic } from "../../components/WeatherBasic/WeatherBasic.jsx";
import { getWeatherInterpretation } from "../../utils/weather-utils.js";
import { WeatherAdvanced } from "../../components/WeatherAdvanced/WeatherAdvanced.jsx";
import { useNavigation } from "@react-navigation/native";
import { Searchbar } from "../../components/Searchbar/Searchbar.jsx";
import { useEffect } from "react";

export function Home({ weather, city, onSubmitSearch, setImgBG }) {
  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherInterpretation(
    currentWeather.weathercode
  );
  const nav = useNavigation();

  useEffect(() => {
    setImgBG(currentInterpretation.imgBG);
  }, [weather]);

  return (
    <>
      <View style={style.weather_basic}>
        <WeatherBasic
          dailyWeather={weather.daily}
          city={city}
          interpretation={currentInterpretation}
          temperature={Math.round(currentWeather.temperature)}
        />
      </View>
      <View style={style.forecast}>
        <TouchableOpacity
          onPress={() => nav.navigate("Forecast_hourly", { city, ...weather })}
        >
          <Txt>{"> get hourly forecast"}</Txt>
        </TouchableOpacity>
      </View>
      <View style={style.searchbar_container}>
        <Searchbar onSubmit={onSubmitSearch} />
      </View>
      <View style={style.weather_advanced}>
        <WeatherAdvanced
          windspeed={currentWeather.windspeed}
          sunrise={weather.daily.sunrise[0].split("T")[1]}
          sunset={weather.daily.sunset[0].split("T")[1]}
        />
      </View>
    </>
  );
}
