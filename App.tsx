import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProductRoute } from "Routes/Product";
import { HomeRoute } from "Routes/Home";
import { Routes } from "Types/routes.interface";

import { styles } from "./App.styles";

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar animated />
        <View style={styles.header}>
          <Text style={styles.headerText}>Ecommerce Store</Text>
        </View>
        <Stack.Navigator>
          <Stack.Screen name={Routes.Home} component={HomeRoute} />
          <Stack.Screen name={Routes.Product} component={ProductRoute} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
