import { useRoute } from "@react-navigation/native";
import { style } from "./Forecast_hourly.style.jsx";
import { Header } from "../../components/Header/Header.jsx";

import { ScrollView, View } from "react-native";
import { getWeatherInterpretation } from "../../utils/weather-utils.js";
import { ForecastListItemHourly } from "../../components/ForecastListItem_hourly/ForecastListItem_hourly.jsx";

export function ForecastHourly() {
  const { params } = useRoute();
  const weatherHourly = params.hourly;
  const weatherCode1Day = weatherHourly.weathercode.slice(0, 24);
  const temperature1Day = weatherHourly.temperature_2m.slice(0, 24);

  const forecastList = (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      {weatherHourly.time.slice(0, 24).map((time, index) => {
        const weatherCode = weatherCode1Day[index];
        const image = getWeatherInterpretation(weatherCode).image;
        const temperature = temperature1Day[index];
        const timeFormatted = time.split("T")[1];
        const rainProbability = weatherHourly.precipitation_probability[index];

        return (
          <ForecastListItemHourly
            key={time}
            image={image}
            hour={timeFormatted}
            rain={rainProbability}
            temperature={temperature.toFixed(0)}
          />
        );
      })}
    </View>
  );
  return (
    <>
      <Header city={params.city}>Hourly Forecast</Header>
      <ScrollView>{forecastList}</ScrollView>
    </>
  );
}
