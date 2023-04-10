import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";

const HomeScreen = ({ navigation, route }) => {
  return (
    <View
      style={{
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        alignSelf: "center",
        flex: 1,
        backgroundColor:"#e345"
      }}
    >
      {/* <Link
        to={"/Home"}
        style={[styles.btnContainer, { backgroundColor: "orangered" }]}
      >
        Home
      </Link>
      <Link
        to={"/About"}
        style={[styles.btnContainer, { backgroundColor: "purple" }]}
      >
        About
      </Link>
      <Link
        to={"/Contact"}
        style={[styles.btnContainer, { backgroundColor: "cyan" }]}
      >
        Contact
      </Link> */}
      <Text style={styles.text}>Home</Text>
      <Link
        to={"/UserPanel"}
        style={[styles.btnContainer, { backgroundColor: "cyan",width:160,marginTop:10,fontSize:18,fontWeight:"800" }]}
      >
        Go to Profile
      </Link>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  btnContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#000",
    color: "#fff",
    width: 100,
    textAlign: "center",
    borderRadius: 50,
    elevation: 20,
    fontWeight: "700",
    alignSelf: "center",
  },
  text:{
    fontSize:40,
    color:"white",
    fontWeight:"800",
  }
});
