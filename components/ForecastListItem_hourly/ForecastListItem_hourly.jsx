import { Image, View } from "react-native";
import { Txt } from "../Txt/Txt.jsx";
import { style } from "./ForecastListItem_hourly.style.jsx";

export function ForecastListItemHourly({ image, hour, temperature, rain }) {
  return (
    <View style={style.container}>
      <Image style={style.img} source={image} />
      <Txt styleNew={style.hour}>{hour}</Txt>
      <Txt styleNew={style.temperature}>{temperature}°C</Txt>
      <Txt styleNew={style.rain}>
        ({rain}%
        <Image
          style={style.imgRain}
          source={require("../../assets/raindrop.png")}
        />
        )
      </Txt>
    </View>
  );
}
