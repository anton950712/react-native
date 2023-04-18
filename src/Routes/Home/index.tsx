import React, { useCallback, useEffect, useState } from "react";
import { FlatList, RefreshControl, TextInput, View } from "react-native";

import { ProductCard } from "Elements/ProductCard";
import { Product } from "Types/products.interface";

import { styles } from "./index.styles";

export const HomeRoute = () => {
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
    <>
      <View style={styles.search}>
        <TextInput
          style={styles.searchField}
          placeholder="Search..."
        />
      </View>
      <View style={styles.container}>
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
      </View>
    </>
  );
};
