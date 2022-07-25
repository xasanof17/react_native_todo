import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Navbar = ({title}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: '#eee',
    padding: 10,
  },
  navbarText: {
    color: "black",
    fontSize: 20,
  },
});

export default Navbar;
