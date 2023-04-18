import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

import { Product } from "Types/products.interface";
import { ProductCard } from "Elements/ProductCard";

import { styles } from "./index.styles";

export const CartRoute = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async (callback?: () => void) => {
    const response = await fetch(`https://demo.spreecommerce.org/api/v2/storefront/products?per_page=8`);
    const jsonData = await response.json();

    const productData = jsonData.data;

    if (productData) {
      setProducts(productData);
    }

    callback?.();
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return !loading
    ? products.length
      ? (
        <View style={styles.mainContainer}>
          <FlatList
            style={styles.content}
            numColumns={2}
            data={products}
            keyExtractor={item => item.id }
            renderItem={({ item }) => (
              <ProductCard {...item} />
            )}
          />
          <View>
            <Text style={styles.amount}>Amount Payable: ${ products.reduce((acc, el) => +el.attributes.price + acc, 0) }</Text>
          </View>
        </View>
      )
      : <Text style={styles.noItems}>Your Cart is Empty</Text>
    : <ActivityIndicator />
};
