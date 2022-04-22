import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { Colors, Sizes, Styles } from "../../Constants/Constants";
import ProgressCircle from "react-native-progress-circle";

const data = [
  {
    id: "1",
    name: "Sarah J.",
    currency: "$405/$5000",
    src: require("../../assets/card.png"),
    progress: 75,
  },
  {
    id: "2",
    name: "Sarah J.",
    currency: "$405/$5000",
    src: require("../../assets/card.png"),
    progress: 25,
  },
  {
    id: "3",
    name: "Sarah J.",
    currency: "$405/$5000",
    src: require("../../assets/card.png"),
    progress: 10,
  },
];

const FriendsList = () => {
  return (
    <View style={{ height: 160, marginBottom: 16 }}>
      <FlatList
        data={data}
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.cardContainer}>
              <ProgressCircle
                percent={item.progress}
                radius={32}
                borderWidth={6}
                color={Colors.primary}
                shadowColor={"rgba(240, 240, 240, 1)"}
                bgColor={"#F0F0F0"}
              >
                <Image
                  source={require("../../assets/image.png")}
                  resizeMode="contain"
                  style={{
                    height: 55,
                    width: 55,
                    borderRadius: 55,
                  }}
                />
              </ProgressCircle>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.currency}>{item.currency}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FriendsList;

const styles = StyleSheet.create({
  cardContainer: {
    width: Sizes.width / 3 - 10,
    borderRadius: 8,
    backgroundColor: "white",
    paddingTop: 20,
    marginTop: 16,
    marginHorizontal: 4,
    elevation: 5,
    paddingLeft: 20,
    marginBottom: 5,
    paddingBottom: 16,
  },
  name: {
    ...Styles.PoppinsBold,
    color: "#023047",
  },
  currency: {
    ...Styles.PoppinsRegular,
    color: "#023047",
  },
});
