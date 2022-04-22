import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slider } from "@miblanchard/react-native-slider";
import { Colors, Sizes } from "../../Constants/Constants";

const Progress = ({ title, money, titleProps, subtitleProps, sliderProps }) => {
  const ThumComp = () => {
    return null;
  };
  return (
    <View style={styles.progressContainer}>
      <View>
        <Text {...titleProps}>{title}</Text>
        <Text {...subtitleProps}>{money}</Text>
      </View>
      <View
        style={{
          width: "70%",
        }}
      >
        <Slider
          maximumTrackTintColor={"#F0F0F0"}
          thumbTintColor={Colors.white}
          step={1}
          minimumValue={0}
          // maximumValue={item.endLesson}
          disabled
          trackStyle={{
            width: "100%",
            height: 16,
            borderRadius: 49,
          }}
          renderThumbComponent={ThumComp}
          {...sliderProps}
        />
      </View>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Sizes.width,
    paddingHorizontal: 16,
  },
});
