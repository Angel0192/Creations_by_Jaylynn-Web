import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.links}>
        {["Shop", "About", "Contact"].map((label) => (
          <Pressable key={label} onPress={() => console.log(label)}>
            <Text style={styles.link}>{label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    top: 0,
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 24,
    backgroundColor: "#ffd9ec",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10,
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7a005c",
  },
  links: {
    flexDirection: "row",
    //marginRight: 10, // if gap doesn’t work, use marginRight manually below
  },
  link: {
    marginLeft: 15,
    color: "#7a005c",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default Navbar;
