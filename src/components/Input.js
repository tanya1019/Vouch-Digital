import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Styles, Colors } from "../../Constants/Constants";

const Input = ({ title, inputProps, sx }) => {
  return (
    <View style={{ ...styles.inputContainer, ...sx }}>
      <Text style={styles.placeholder}>{title}</Text>
      <TextInput {...inputProps} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
  placeholder: {
    ...Styles.PoppinsRegular,
    color: "#416475",
  },
  input: {
    backgroundColor: Colors.offWhite,
    height: 52,
    width: "100%",
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
});
