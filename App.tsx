import React, { useCallback, useEffect, useState } from "react";
import { FlatList, RefreshControl, SafeAreaView, StatusBar, Text, TextInput, View } from "react-native";

import { Product } from "Types/products.interface";
import { ProductCard } from "Elements/ProductCard";
import { ProductView } from "Elements/ProductView";

import { styles } from "./App.styles";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const getData = async (callback?: () => void) => {
    const response = await fetch("https://demo.spreecommerce.org/api/v2/storefront/products");
    const jsonData = await response.json();

    const productsData = jsonData.data;

    if (productsData) {
      setProducts(productsData);
    }

    callback?.();
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData(() => setRefreshing(false))
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar animated />
      <View style={styles.header}>
        <Text style={styles.headerText}>Ecommerce Store</Text>
      </View>
      { true && (
        <>
          <View style={styles.search}>
            <TextInput
              style={styles.searchField}
              placeholder="Search..."
            />
          </View>
          <FlatList
            style={styles.content}
            numColumns={2}
            data={products}
            keyExtractor={item => item.id }
            renderItem={({ item }) => (
              <ProductCard {...item} />
            )}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
          />
        </>
      ) }
      { false && !!products.length && (
        <ProductView {...products[0]} />
      ) }
    </SafeAreaView>
  );
}

export default App;
