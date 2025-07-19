import { StyleSheet, Text, View } from "react-native";
import Navbar from "./components/navbar";

export default function Index() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <View style={styles.content}>
        <Text>Shut up lil bro</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 80, // space below navbar
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
