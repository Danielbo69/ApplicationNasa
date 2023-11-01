import { StyleSheet, View, ActivityIndicator } from "react-native";
import React, { useState } from "react";

const Loader = () => {
  return (
    <View>
      <ActivityIndicator style={styles.loader} color='#fff' size='large'/>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loader: {
    margin: 20,
  },
});
