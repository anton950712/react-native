import React from "react";
import { Button, SafeAreaView, StatusBar, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProductRoute } from "Routes/Product";
import { HomeRoute } from "Routes/Home";
import { Routes } from "Types/routes.interface";
import { colors } from "Constants";

import { styles } from "./App.styles";

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar animated />
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.blue500
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontWeight: "500",
              fontFamily: "Roboto",
              fontSize: 20
            },
            headerTitleAlign: "center",
            headerRight: () => (
              <Button title="O" />
            )
          }}
        >
          <Stack.Screen
            name={Routes.Home}
            component={HomeRoute}
            options={{
              title: "Ecommerce Store",
              headerLeft: () => (
                <Button title="=" />
              )
            }}
          />
          <Stack.Screen
            name={Routes.Product}
            component={ProductRoute}
            options={{
              title: ""
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
