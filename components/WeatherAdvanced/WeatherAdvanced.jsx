import { Image, View } from "react-native";
import { Txt } from "../Txt/Txt.jsx";
import {
  StyledContainer,
  StyledLabel,
  StyledValue,
  style,
} from "./WeatherAdvanced.style.jsx";

export function WeatherAdvanced({ sunrise, sunset, windspeed }) {
  return (
    <View style={style.container}>
      <StyledContainer>
        <Image style={style.img} source={require("../../assets/sunrise.png")} />
        <StyledValue>{sunrise}</StyledValue>
        <StyledLabel>Sunrise</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <Image style={style.img} source={require("../../assets/sunset.png")} />
        <StyledValue>{sunset}</StyledValue>
        <StyledLabel>Sunset</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <Image style={style.img} source={require("../../assets/wind.png")} />
        <StyledValue>{windspeed} km/h</StyledValue>
        <StyledLabel>Wind speed</StyledLabel>
      </StyledContainer>
    </View>
  );
}
