import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function Filter({ navigation }) {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>filter</Text>
      <Button title="submit" onPress={() => navigation.navigate("Result")} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
  text: {
    padding: 16,
    fontSize: 24,
  },
});

export default Filter;
