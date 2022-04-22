import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Sizes, Styles } from "../../Constants/Constants";

const SmartActionCard = () => {
  return (
    <View style={styles.actionCardContainer}>
      <View>
        <Text style={styles.text}>
          Save <Text style={styles.textDecoration}>$5</Text> when I walk {"\n"}
          <Text style={styles.textDecoration}>5000</Text> steps daily
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: 160,
            marginTop: 32,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.headerText}>Counts</Text>
            <Text style={styles.subHeaderText}>48 Times</Text>
          </View>
          <View style={{}}>
            <Text style={styles.headerText}>Amount</Text>
            <Text style={styles.subHeaderText}>$240</Text>
          </View>
        </View>
      </View>
      <Image
        style={{ width: 81.61, height: 120 }}
        resizeMode="contain"
        source={require("../../assets/runningman.png")}
      />
    </View>
  );
};

export default SmartActionCard;

const styles = StyleSheet.create({
  actionCardContainer: {
    height: 168,
    width: "100%",
    backgroundColor: "rgba(244, 226, 226, 0.5)",
    flexDirection: "row",
    padding: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 16,
  },
  text: {
    fontFamily: "InterBold",
    fontSize: 18,
    lineHeight: 21.78,
  },
  headerText: {
    ...Styles.PoppinsRegular,
    color: "#023047",
  },
  subHeaderText: {
    ...Styles.PoppinsBold,
  },
  textDecoration: { textDecorationLine: "underline" },
});
