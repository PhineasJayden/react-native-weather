import { TextInput } from "react-native";
import { Txt } from "../Txt/Txt.jsx";
import { style } from "./Searchbar.style.jsx";

export function Searchbar({ onSubmit }) {
  return (
    <TextInput
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      style={style.input}
      placeholder="Change the City"
      ref={(input) => {
        this.textInput = input;
      }}
    />
  );
}
