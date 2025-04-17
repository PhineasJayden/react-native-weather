import { useRoute } from "@react-navigation/native";
import { style } from "./Forecast.style.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem.jsx";
import { View } from "react-native";
import { DAYS, getWeatherInterpretation } from "../../utils/weather-utils.js";

export function Forecast() {
  const { params } = useRoute();

  const forecastList = (
    <View style={{ marginTop: 50 }}>
      {params.time.map((time, index) => {
        const weatherCode = params.weathercode[index];
        const image = getWeatherInterpretation(weatherCode).image;
        const temperatureMax = params.temperature_2m_max[index];
        const temperatureMin = params.temperature_2m_min[index];
        const date = new Date(time);
        const dayOfTheWeek = DAYS[date.getDay()];
        const formatedDate = date.toLocaleDateString("default", {
          day: "numeric",
          month: "numeric",
        });

        return (
          <ForecastListItem
            key={time}
            image={image}
            day={dayOfTheWeek}
            date={formatedDate.slice(0, -3)}
            temperature={temperatureMax.toFixed(0)}
            temperatureMin={temperatureMin.toFixed(0)}
          />
        );
      })}
    </View>
  );
  return (
    <>
      <Header city={params.city}>7 day forecast</Header>

      {forecastList}
    </>
  );
}
