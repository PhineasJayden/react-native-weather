import axios from "axios";

URL =
  "https://api.open-meteo.com/v1/forecast?latitude=${}&longitude=${}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true";

export class WeatherAPI {
  static async fetchWeatherByCoords(coords) {
    return (
      await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true&hourly=temperature_2m,weathercode,precipitation_probability`
      )
    ).data;
  }

  static async fetchCityByCoords(coords) {
    return (
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.lat}&lon=${coords.lng}`
      )
    ).data;
  }

  static async fetchCoordsByCity(city) {
    try {
      const { latitude: lat, longitude: lng } = (
        await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=de&format=json`
        )
      ).data.results[0];

      return { lat: lat, lng: lng };
    } catch (err) {
      throw "Invalid city name";
    }
  }
}
