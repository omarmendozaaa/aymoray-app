import React from "react";
import { KeyboardTypeOptions, StyleSheet, ViewStyle } from "react-native";
import { Colors } from "react-native-ui-lib";
import { FONTS } from "config/FoundationConfig";
import { Hoshi } from "libs/react-native-textinput-effects/index";

interface Props {
  keyboardType?: KeyboardTypeOptions;
  label: string;
  parentStyle?: ViewStyle;
  value?: string;
  onChangeText?: (text: string) => void;
  optional?: boolean;
  secureTextEntry?: boolean;
}
const Input = ({
  keyboardType,
  label,
  parentStyle,
  onChangeText,
  value,
  optional,
  secureTextEntry,
}: Props) => {
  return (
    <Hoshi
      label={label}
      borderColor={"transparent"}
      style={styles.hoshi}
      labelStyle={styles.labelStyle}
      inputStyle={styles.inputStyle}
      secureTextEntry={secureTextEntry}
      height={22}
      keyboardType={keyboardType}
      parentStyle={parentStyle}
      onChangeText={onChangeText}
      value={value}
      optional={optional}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  hoshi: {
    borderBottomWidth: 0,
  },
  labelStyle: {
    color: Colors.color58,
    fontSize: 16,
    fontFamily: FONTS.medium,
    textAlign: "left",
  },
  inputStyle: {
    color: Colors.color28,
    fontSize: 16,
    fontFamily: FONTS.heavy,
  },
});
