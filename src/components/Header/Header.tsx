import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>
      <Image 
        source={require("../../../assets/logo-nasa.png")}
        style={styles.image}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  },
  image: {
    width: 50,
    height: 50,
  }
});
