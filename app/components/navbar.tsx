import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
// Import icons from Lucide React
import { Heart, Search, ShoppingCart, User } from "lucide-react-native";

import { useNavigation, useNavigationState } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../types.js";


type NavigationProp = NativeStackNavigationProp<RootStackParamList>; // Pass through the screens dictionary used in types.tsx

const Navbar = () => {
  const navigation = useNavigation<NavigationProp>();

  // Grab current route name from the navigation state
  const currentRouteName = useNavigationState(state => {
    // Defensive check for empty state
    if (!state || !state.routes || state.index === undefined) return null;
    return state.routes[state.index]?.name;
  });

  const getLinkStyle = (screenName: string) => [
    styles.linkText,
    currentRouteName === screenName && styles.activeLinkText,
  ];

  // Function to handle icon button presses
  const handleIconPress = (iconName: string) => {
    console.log(`You clicked on ${iconName} icon`);
  };

  return (
    
    <View style={styles.navbar}>
      {/* Left side - Navigation Links */}
      <View style={styles.navigationLinks}>
        
        {/* HOME Button */}
        <Pressable onPress={() => navigation.navigate("Home")}>
        <Text style={getLinkStyle('Home')}>HOME</Text>
        </Pressable>

        {/* ABOUT Button */}
        <Pressable onPress={() => navigation.navigate("About")}>
        <Text style={getLinkStyle('About')}>ABOUT</Text>
        </Pressable>

        {/* CONTACT Button */}
        <Pressable onPress={() => navigation.navigate("Contact")}>
        <Text style={getLinkStyle('Contact')}>CONTACT</Text>
        </Pressable>

      </View>

      {/* Right side - Icon Buttons */}
      <View style={styles.iconButtons}>
        
        {/* Search Icon */}
        <Pressable 
          onPress={() => handleIconPress('Search')}
          style={styles.iconButton}
        >
          <Search size={20} color="black" />
        </Pressable>

        {/* Heart/Favorites Icon */}
        <Pressable 
          onPress={() => handleIconPress('Favorites')}
          style={styles.iconButton}
        >
          <Heart size={20} color="black" />
        </Pressable>

        {/* Shopping Cart Icon */}
        <Pressable 
          onPress={() => handleIconPress('Cart')}
          style={styles.iconButton}
        >
          <ShoppingCart size={20} color="black" />
        </Pressable>

        {/* User/Account Icon */}
        <Pressable 
          onPress={() => handleIconPress('Account')}
          style={styles.iconButton}
        >
          <User size={20} color="black" />
        </Pressable>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Main navbar container
  navbar: {
    position: "absolute",        // Stays at top of screen
    top: 0,                     // Positioned at very top
    width: "100%",              // Takes full width
    height: 55,                 // Fixed height
    paddingVertical: 10,        // Top and bottom padding
    paddingHorizontal: 15,      // Left and right padding
    backgroundColor: "#ffd9ec", // Pink background color
    flexDirection: "row",       // Arrange children horizontally
    justifyContent: "space-between", // Space items apart (this pushes icons to the right)
    alignItems: "center",       // Center items vertically
    zIndex: 5,                 // Make sure it stays on top
    elevation: 8,              // Android shadow
    borderRadius: 6,           // Rounded corners
    shadowColor: "gray",
    shadowRadius: 8
  },
  
  // Container for navigation links (left side)
  navigationLinks: {
    flexDirection: "row",       // Arrange links horizontally
  },
  
  // Style for each link text
  linkText: {
    marginLeft: 10,            // Space between each link
    padding: 10,
    color: "black",            // Text color
    fontSize: 16,              // Text size
    fontFamily: 'Inter_800Regular', // Font style
    userSelect: "none",
  },

  activeLinkText: {
    fontWeight: 'bold',
    fontFamily: 'Inter_900Regular', // Font style
  },

  // Container for icon buttons (right side)
  iconButtons: {
    flexDirection: "row",       // Arrange icons horizontally
    alignItems: "center",       // Center icons vertically
  },

  // Style for each icon button
  iconButton: {
    marginLeft: 15,            // Space between each icon
    padding: 5,                // Touchable area around icon
    borderRadius: 4,           // Slight rounding for better touch feedback
  },
});

export default Navbar;