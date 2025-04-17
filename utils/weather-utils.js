export const WEATHER_INTERPRATIONS = [
  {
    codes: [0],
    label: "Sunny",
    image: require("../assets/sun.png"),
    imgBG: require("../assets/sunny_bg.png"),
  },
  {
    codes: [1, 2, 3, 45, 48],
    label: "Cloudy",
    image: require("../assets/clouds.png"),
    imgBG: require("../assets/cloudy_bg.jpg"),
  },
  {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
    label: "Rainy",
    image: require("../assets/rain.png"),
    imgBG: require("../assets/rainy_bg.png"),
  },
  {
    codes: [71, 73, 75, 77],
    label: "Snowy",
    image: require("../assets/snow.png"),
    imgBG: require("../assets/snow_bg.jpg"),
  },
  {
    codes: [95, 96, 99],
    label: "Thunderous",
    image: require("../assets/thunder.png"),
    imgBG: require("../assets/thunderous_bg2.jpg"),
  },
];

export function getWeatherInterpretation(code) {
  return WEATHER_INTERPRATIONS.find((interpretation) =>
    interpretation.codes.includes(code)
  );
}

export const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
