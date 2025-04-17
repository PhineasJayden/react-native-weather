import { style } from "./WeatherBasic.style.jsx";
import { View, Image, TouchableOpacity } from "react-native";
import { Txt } from "../Txt/Txt.jsx";
import { Clock } from "../Clock/Clock.jsx";
import { useNavigation } from "@react-navigation/native";

export function WeatherBasic({
  temperature,
  interpretation,
  city,
  dailyWeather,
}) {
  const nav = useNavigation();
  return (
    <>
      <View style={style.clock}>
        <Clock />
      </View>
      <View style={style.city}>
        <Txt>{city}</Txt>
      </View>
      <View style={style.interpretation}>
        <Txt styleNew={style.interpretation_txt}>{interpretation.label}</Txt>
      </View>
      <View style={style.temp_box}>
        <TouchableOpacity
          onPress={() => nav.navigate("Forecast", { city, ...dailyWeather })}
        >
          <Txt styleNew={style.temp}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image style={style.image} source={interpretation.image} />
      </View>
    </>
  );
}
