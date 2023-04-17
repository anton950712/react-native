import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, TextInput, View } from "react-native";

import { styles } from "./App.styles";

function App() {
  return (
    <SafeAreaView>
      <StatusBar animated />
      <View style={styles.header}>
        <Text style={styles.headerText}>Ecommerce Store</Text>
      </View>
      <View style={styles.search}>
        <TextInput
          style={styles.searchField}
          placeholder="Search..."
        />
      </View>
      <ScrollView style={styles.content}>
        <Text>Card</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
