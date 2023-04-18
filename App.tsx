import React from "react";
import { Image, SafeAreaView, StatusBar, TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProductRoute } from "Routes/Product";
import { HomeRoute } from "Routes/Home";
import { CartRoute } from "Routes/Cart";
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
          screenOptions={({ navigation }) => ({
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
              <TouchableWithoutFeedback onPress={() => navigation.navigate(Routes.Cart)}>
                <Image source={require("./src/Assets/cart.png")} />
              </TouchableWithoutFeedback>
            )
          })}
        >
          <Stack.Screen
            name={Routes.Home}
            component={HomeRoute}
            options={{
              title: "Ecommerce Store",
              headerLeft: () => (
                <TouchableHighlight onPress={() => {}}>
                  <Image source={require("./src/Assets/menu.png")} />
                </TouchableHighlight>
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
          <Stack.Screen
            name={Routes.Cart}
            component={CartRoute}
            options={{
              title: "My Cart",
              headerRight: () => undefined
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
