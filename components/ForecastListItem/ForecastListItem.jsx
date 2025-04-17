import { Image, View } from "react-native";
import { Txt } from "../Txt/Txt.jsx";
import { style } from "./ForecastListItem.style.jsx";
export function ForecastListItem({
  image,
  day,
  date,
  temperature,
  temperatureMin,
}) {
  return (
    <View style={style.container}>
      <Image style={style.img} source={image} />
      <Txt styleNew={style.day}>{day}</Txt>
      <Txt styleNew={style.date}>{date}</Txt>
      <Txt styleNew={style.temperature}>{temperature}°C</Txt>
      <Txt styleNew={style.temperatureMin}>{temperatureMin}°C</Txt>
    </View>
  );
}
