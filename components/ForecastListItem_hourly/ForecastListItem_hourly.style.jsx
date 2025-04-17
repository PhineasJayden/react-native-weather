import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#0000005c",
    borderRadius: 15,
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: "white",
  },
  img: {
    width: 40,
    height: 40,
  },
  imgRain: {
    width: 20,
    height: 20,
  },
  hour: {
    fontSize: 30,
  },
  rain: {
    minWidth: 80,
    textAlign: "right",
    fontSize: 20,
  },
  temperature: {
    minWidth: 70,
    textAlign: "right",
  },
});
