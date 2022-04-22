import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Colors = {
  primary: "#4563E4",
  backgroundColor: "#FEFEFE",
  offWhite: "#F7F7F7",
  green: "#00A676",
  yellow: "#FFB703",
  red: "#D63230",
  lightGreen: "rgba(191, 233, 221, 0.25)",
};

const Sizes = {
  height: height,
  width: width,
  padding: 10,
  margin: 15,
};

const Styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    // alignItems: "center",
  },
  PoppinsRegular: {
    fontFamily: "PoppinsRegular",
    fontSize: 12,
    color: "black",
  },
  PoppinsBold: {
    fontFamily: "PoppinsBold",
    fontSize: 14,
    color: "black",
  },
};

export { Sizes, Colors, Styles };
