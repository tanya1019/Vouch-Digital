import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Back from "../../../assets/back.svg";
import { Colors, Styles, Sizes } from "../../../Constants/Constants";
import { ImageButton } from "../Buttons";
import { ProgressBar } from "react-native-paper";
import { Slider } from "@miblanchard/react-native-slider";
import Progress from "../Progress";
import HeadingPair from "../HeadingPair";
import FriendsList from "../FriendsList";
import SmartActionCard from "../SmartActionCard";
import Transactions from "../Transactions";

const Account = ({ navigation }) => {
  const ThumComp = () => {
    return null;
  };
  return (
    <ScrollView
      style={{
        backgroundColor: Colors.primary,
        height: "100%",
        width: "100%",
        marginTop: 40,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              style={{ height: 16, width: 10 }}
              source={require("../../../assets/back.png")}
            />
          </TouchableOpacity>
          <Text
            style={{ ...Styles.PoppinsBold, color: "white", marginLeft: 18 }}
          >
            Account
          </Text>
        </View>
        <Image
          style={{ height: 18, width: 16 }}
          source={require("../../../assets/bell.png")}
        />
      </View>
      {/* <Back width={20} height={40} /> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Text
          style={{
            ...Styles.PoppinsRegular,
            maxWidth: Sizes.width - 160,
            color: "white",
            fontSize: 14,
          }}
        >
          Your ideal deposit amount needs to be 54.79 for 1825 days.
        </Text>
        <Image
          style={{
            width: 125,
            height: 70,
          }}
          resizeMode="contain"
          source={require("../../../assets/man.png")}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginTop: 30,
          marginBottom: 22,
        }}
      >
        <ImageButton
          buttonProps={{
            style: { width: "25%" },
          }}
          imageProps={{
            source: require("../../../assets/summary.png"),
          }}
          title="Summary"
          textProps={{
            style: {
              ...Styles.PoppinsRegular,
              color: "white",
              lineHeight: 18,
              marginTop: 4,
            },
          }}
        />
        <ImageButton
          buttonProps={{
            style: { width: "25%" },
          }}
          imageProps={{
            source: require("../../../assets/withdrawal.png"),
          }}
          title="Withdrawal"
          textProps={{
            style: {
              ...Styles.PoppinsRegular,
              color: "white",
              lineHeight: 18,
              marginTop: 4,
            },
          }}
        />
        <ImageButton
          buttonProps={{
            style: { width: "25%" },
          }}
          imageProps={{
            source: require("../../../assets/deposit.png"),
          }}
          title="Deposits"
          textProps={{
            style: {
              ...Styles.PoppinsRegular,
              color: "white",
              lineHeight: 18,
              marginTop: 4,
            },
          }}
        />
        <ImageButton
          buttonProps={{
            style: { width: "25%" },
          }}
          imageProps={{
            source: require("../../../assets/statistics.png"),
          }}
          title="Statistics"
          textProps={{
            style: {
              ...Styles.PoppinsRegular,
              color: "white",
              lineHeight: 18,
              marginTop: 4,
            },
          }}
        />
      </View>
      <View style={styles.bottomSheet}>
        <View
          style={{
            width: Sizes.width - 32,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 24,
          }}
        >
          <TouchableOpacity
            style={{
              ...styles.topTab,
              // borderRightWidth: 1,
              // borderRightColor: "#E8E8E8",
              justifyContent: "flex-start",
            }}
          >
            <Image
              source={require("../../../assets/card.png")}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
            <View
              style={{
                paddingLeft: 8,
              }}
            >
              <Text
                style={{
                  ...Styles.PoppinsRegular,
                  color: "#416475",
                  lineHeight: 18,
                }}
              >
                Balance
              </Text>
              <Text
                style={{
                  ...Styles.PoppinsBold,
                  fontSize: 18,
                  lineHeight: 24,
                }}
              >
                $21,000
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: 32,
              width: 1,
              backgroundColor: "#e8e8e8",
            }}
          ></View>
          <TouchableOpacity
            style={{
              ...styles.topTab,
            }}
          >
            <Image
              source={require("../../../assets/flag.png")}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
            <View
              style={{
                paddingLeft: 8,
              }}
            >
              <Text
                style={{
                  ...Styles.PoppinsRegular,
                  color: "#416475",
                  lineHeight: 18,
                }}
              >
                Target
              </Text>
              <Text
                style={{
                  ...Styles.PoppinsBold,
                  fontSize: 18,
                  lineHeight: 24,
                }}
              >
                $1,00,000
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          <Slider
            maximumTrackTintColor={"#F0F0F0"}
            minimumTrackTintColor={Colors.green}
            thumbTintColor={Colors.white}
            value={0.7}
            step={1}
            minimumValue={0}
            // maximumValue={item.endLesson}
            disabled
            trackStyle={{
              width: "100%",
              height: 5,
            }}
            renderThumbComponent={ThumComp}
          />
        </View>
        {/* <ProgressBar progress={0.5} color={Colors.green} /> */}
        <HeadingPair
          heading="Investment"
          title={"Savings Distribution"}
          subtitle={"View All"}
        />

        <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
          <Progress
            title={"Weekly Deposit"}
            money={"$1000"}
            titleProps={{
              style: {
                ...Styles.PoppinsRegular,
                color: "#416475",
                lineHeight: 18,
                marginTop: 4,
                fontSize: 10,
              },
            }}
            subtitleProps={{
              style: {
                ...Styles.PoppinsBold,
                color: "#023047",
              },
            }}
            sliderProps={{
              minimumTrackTintColor: Colors.green,
              value: 0.7,
            }}
          />
          <Progress
            title={"1-time Deposit"}
            money={"$5400"}
            titleProps={{
              style: {
                ...Styles.PoppinsRegular,
                color: "#416475",
                lineHeight: 18,
                marginTop: 4,
                fontSize: 10,
              },
            }}
            subtitleProps={{
              style: {
                ...Styles.PoppinsBold,
                color: "#023047",
              },
            }}
            sliderProps={{
              minimumTrackTintColor: Colors.primary,
              value: 0.6,
            }}
          />
          <Progress
            title={"Smart Actions"}
            money={"$50"}
            titleProps={{
              style: {
                ...Styles.PoppinsRegular,
                color: "#416475",
                lineHeight: 18,
                marginTop: 4,
                fontSize: 10,
              },
            }}
            subtitleProps={{
              style: {
                ...Styles.PoppinsBold,
                color: "#023047",
              },
            }}
            sliderProps={{
              minimumTrackTintColor: Colors.yellow,
              value: 0.1,
            }}
          />
        </View>
        <HeadingPair
          heading="Friends"
          title={"Individual Contribution"}
          subtitle={"View All"}
        />

        <FriendsList />
        <HeadingPair
          heading="Active Smart Action"
          title={"Individual Contribution"}
          subtitle={"+ Add Another"}
        />
        <SmartActionCard />
        <HeadingPair
          heading="Transactions"
          title={""}
          subtitle={"View all"}
          subSX={{ color: Colors.primary }}
        />
        <Transactions />
        <View
          style={{
            height: 20,
          }}
        ></View>
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 18,
    width: "100%",
  },
  bottomSheet: {
    backgroundColor: Colors.backgroundColor,
    width: Sizes.width,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  topTab: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
