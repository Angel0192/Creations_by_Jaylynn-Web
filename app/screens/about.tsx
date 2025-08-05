import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Navbar from '../components/navbar';

export default function AboutPage() {
  return (
    <View>
      <Navbar/>
        <ScrollView style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
          
          <View style={styles.aboutContainer}>
            <View>

            </View>
            <Text style={styles.text}>Hello my name is,</Text>
            <Text style={styles.name}>Jaylynn Allen</Text>
          </View>
          
        </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({

  scrollView: {
    flex: 1,
    marginTop: 55, // Height of your navbar
  },
  scrollContent: {
    paddingBottom: 20, // Extra space at bottom
  },

  aboutContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },

  image: {
    
  },

  text: {
    fontFamily: "Inter_800Regular",
    fontWeight: "regular",
    paddingLeft: 10,
    fontSize: 15,
    padding: 8,
  },

  name: {
    fontFamily: "Inter_800Regular",
    fontWeight: "bold",
    paddingLeft: 10,
    fontSize: 15,
    padding: 8,
  }
  
});