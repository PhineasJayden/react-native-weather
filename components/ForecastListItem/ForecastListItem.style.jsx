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
    width: 50,
    height: 50,
  },
  day: {
    fontSize: 20,
  },
  date: {
    fontSize: 20,
  },
  temperature: {
    minWidth: 50,
    textAlign: "right",
  },
  temperatureMin: {
    fontSize: 20,
    minWidth: 50,
    textAlign: "right",
    color: "#bae6fd",
  },
});
