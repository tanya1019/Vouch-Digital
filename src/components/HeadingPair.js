import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeadingPair = ({ heading, title, subtitle, subSX }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        width: "100%",
      }}
    >
      <View>
        <Text
          style={{
            color: "#023047",
            fontFamily: "PoppinsBold",
            fontSize: 16,
            lineHeight: 24,
          }}
        >
          {heading}
        </Text>
        <Text
          style={{
            color: "#8198A3",
            fontFamily: "PoppinsRegular",
            fontSize: 12,
            lineHeight: 18,
          }}
        >
          {title}
        </Text>
      </View>
      <Text
        style={{
          color: "#8198A3",
          fontFamily: "PoppinsRegular",
          fontSize: 12,
          lineHeight: 18,
          ...subSX,
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export default HeadingPair;

const styles = StyleSheet.create({});
