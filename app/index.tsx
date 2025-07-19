import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "./components/navbar";
import Tile from "./components/productTile";

export default function Index() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo Section */}
        <View style={styles.top}>
          <Image 
            source={require("../assets/images/logo.png")} 
            style={styles.image}
          />
        </View>

        {/* Accessories Section */}
        <Text style={styles.sectionTitle}>ACCESSORIES</Text>
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
          contentContainerStyle={styles.horizontalContent}
        >
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
        </ScrollView>

        {/* Add more sections here to test vertical scrolling */}
        <Text style={styles.sectionTitle}>FEATURED</Text>
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
          contentContainerStyle={styles.horizontalContent}
        >
          <Tile/>
          <Tile/>
          <Tile/>
        </ScrollView>

        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Text style={styles.sectionTitle}>NEW ARRIVALS</Text>
          <Text style={styles.sectionTitle}>Testing..</Text>
        </View>

        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
          contentContainerStyle={styles.horizontalContent}
        >
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
        </ScrollView>

        {/* Add some bottom padding */}
        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginTop: 55, // Height of your navbar
  },
  scrollContent: {
    paddingBottom: 20, // Extra space at bottom
  },
  top: {
    marginTop: 30,
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderWidth: 1,          
    borderColor: '#000',
    borderRadius: 8,
  },
  sectionTitle: {
    marginBottom: 15,
    marginTop: 20,
    fontFamily: "Inter_800Regular",
    fontWeight: "bold",
    paddingLeft: 10,
    fontSize: 15,
    padding: 8,
  },
  horizontalScroll: {
    marginBottom: 10,
  },
  horizontalContent: {
    paddingHorizontal: 10,
  },
  bottomPadding: {
    height: 50, // Extra space at the bottom
  },
});