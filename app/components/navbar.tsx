import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
// Import icons from Lucide React
import { Heart, Search, ShoppingCart, User } from "lucide-react-native";

const Navbar = () => {
  // Function to handle when a nav link is pressed
  const handleLinkPress = (linkName: string) => {
    console.log(`You clicked on ${linkName}`);
    // Later you can add navigation here like: router.push('/shop')
  };

  // Function to handle icon button presses
  const handleIconPress = (iconName: string) => {
    console.log(`You clicked on ${iconName} icon`);
    // Add icon-specific logic here
  };

  return (
    <View style={styles.navbar}>
      {/* Left side - Navigation Links */}
      <View style={styles.navigationLinks}>
        
        {/* SHOP Button */}
        <Pressable onPress={() => handleLinkPress('SHOP')}>
          <Text style={styles.linkText} selectable={false}>SHOP</Text>
        </Pressable>

        {/* ABOUT Button */}
        <Pressable onPress={() => handleLinkPress('ABOUT')}>
          <Text style={styles.linkText} selectable={false}>ABOUT</Text>
        </Pressable>

        {/* CONTACT Button */}
        <Pressable onPress={() => handleLinkPress('CONTACT')}>
          <Text style={styles.linkText} selectable={false}>CONTACT</Text>
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
    borderRadius: 8,           // Rounded corners
  },
  
  // Container for navigation links (left side)
  navigationLinks: {
    flexDirection: "row",       // Arrange links horizontally
  },
  
  // Style for each link text
  linkText: {
    marginLeft: 20,            // Space between each link
    color: "black",            // Text color
    fontSize: 16,              // Text size
    fontFamily: 'Inter_400Regular', // Font style
    userSelect: "none",
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