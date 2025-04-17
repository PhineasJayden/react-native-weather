import { Text } from "react-native";
import { style } from "./Txt.style.jsx";

export function Txt({ children, styleNew, ...restProps }) {
  return (
    <Text style={[style.txt, styleNew]} {...restProps}>
      {children}
    </Text>
  );
}
