import { TouchableOpacity, View } from "react-native";
import { style } from "./Header.style.jsx";
import { Txt } from "../Txt/Txt.jsx";
import { useNavigation } from "@react-navigation/native";

export function Header({ city, children }) {
  const nav = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.back_btn} onPress={() => nav.goBack()}>
        <Txt>{"<"}</Txt>
      </TouchableOpacity>
      <View style={style.header_txt}>
        <Txt>{city.toUpperCase()}</Txt>
        <Txt styleNew={style.subtitle}>{children}</Txt>
      </View>
    </View>
  );
}
