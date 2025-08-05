import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Navbar from '../components/navbar';

export default function ContactPage() {
  return (
    <View style = {styles.container}>
      <Navbar/>
        <ScrollView style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
          <Text>Contact Page</Text>
        </ScrollView>
    </View>
  )
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
  
});