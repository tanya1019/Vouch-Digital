import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Styles, Colors, Sizes } from "../../../Constants/Constants";
import Input from "../Input";
import axios from "axios";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signin = async () => {
    const data = {
      email: email,
      password: password,
    };
    const res = axios.post("https://reqres.in/api/login", data);
    console.log(res);
  };
  // useEffect(() => {

  //   signin();
  // }, []);

  return (
    <View style={{ ...Styles.container }}>
      <ScrollView
        // style={{
        //   position: "absolute",
        //   bottom: 0,
        // }}
        //style={{ flex: 1, width: "100%", backgroundColor: "pink" }}
        contentContainerStyle={{ height: "100%" }}
      >
        <View
          style={{
            width: "100%",
            height: 145,
            backgroundColor: Colors.primary,
          }}
        ></View>
        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
              }}
              style={styles.image}
            />
            <Image
              source={require("../../../assets/edit.png")}
              style={{
                height: 32,
                width: 32,
                position: "absolute",
                bottom: 0,
                right: 3,
              }}
            />
          </View>
          <Input
            title={"Email"}
            inputProps={{
              placeholder: "Enter your email",
              placeholderTextColor: "grey",
              value: email,
              onChangeText: (text) => setEmail(text),
            }}
            sx={{
              marginBottom: 24,
            }}
          />
          <Input
            title={"Password"}
            inputProps={{
              placeholder: "Enter your password",
              placeholderTextColor: "grey",
              secureTextEntry: true,
              value: password,
              onChangeText: (text) => setPassword(text),
            }}
            sx={{
              marginBottom: 24,
            }}
          />
          <TouchableOpacity
            style={styles.login}
            onPress={() => {
              //signin();
              console.log(email, password);
              navigation.navigate("Account");
            }}
          >
            <Text style={{ ...Styles.PoppinsBold, color: "white" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.backgroundColor,
    width: Sizes.width,
    height: Sizes.height - 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingHorizontal: 16,
    //  position: "absolute",
    //bottom: 0,
    alignItems: "center",
    paddingTop: 115,
  },
  image: {
    height: 124,
    width: 124,
    borderRadius: 124,
  },
  imageWrapper: {
    height: 126,
    width: 126,
    position: "absolute",
    top: -62,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 120,
  },
  login: {
    backgroundColor: Colors.primary,
    borderRadius: 35,
    width: "100%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
});
