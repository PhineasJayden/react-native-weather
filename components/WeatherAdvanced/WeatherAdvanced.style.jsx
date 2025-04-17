import { StyleSheet, View } from "react-native";
import { Txt } from "../Txt/Txt.jsx";

export const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#0000005c",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 15,
  },
  img: {
    height: 50,
    width: 50,
  },
});

export function StyledContainer({ children }) {
  return <View style={{ alignItems: "center" }}>{children}</View>;
}

export function StyledLabel({ children }) {
  return <Txt styleNew={{ fontSize: 20 }}>{children}</Txt>;
}

export function StyledValue({ children }) {
  return <Txt styleNew={{ fontSize: 30 }}>{children}</Txt>;
}
