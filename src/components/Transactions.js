import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { Colors, Styles } from "../../Constants/Constants";

const Transactions = () => {
  return (
    <View style={styles.card}>
      {/* <Text>Transactions</Text> */}

      {[1, 2, 3, 4].map((item, i) => {
        return (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: 16,
              borderBottomColor: "rgba(240, 240, 240, 1)",
              borderBottomWidth: 1,
              //   height: 60,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 32,
                  width: 32,
                  backgroundColor: "rgba(191, 233, 221, 0.25)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 40,
                  marginRight: 12,
                }}
              >
                <Text
                  style={{
                    ...Styles.PoppinsBold,
                    color: Colors.green,
                    fontSize: 16,
                  }}
                >
                  A
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    ...Styles.PoppinsBold,
                    lineHeight: 14,
                    fontSize: 12,
                  }}
                >
                  Amazon
                </Text>
                <Text
                  style={{
                    ...Styles.PoppinsRegular,
                    lineHeight: 15,
                    fontSize: 10,
                    color: "rgba(129, 152, 163, 1)",
                  }}
                >
                  12 Nov 2021
                </Text>
              </View>
            </View>
            <Text
              style={{
                ...Styles.PoppinsBold,
                fontSize: 14,
                color: Colors.red,
              }}
            >
              - $32.99
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    paddingHorizontal: 12,
  },
});
