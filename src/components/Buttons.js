import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const ImageButton = ({ title, imageProps, buttonProps, textProps, sx }) => {
  return (
    <TouchableOpacity
      {...buttonProps}
      style={{
        ...styles.imageButtonContainer,
        ...sx,
      }}
    >
      <Image style={styles.image} resizeMode="contain" {...imageProps} />
      <Text {...textProps}>{title}</Text>
    </TouchableOpacity>
  );
};

export { ImageButton };

const styles = StyleSheet.create({
  imageButtonContainer: {
    alignItems: "center",
  },
  image: {
    width: 20,
    height: 20,
  },
});
