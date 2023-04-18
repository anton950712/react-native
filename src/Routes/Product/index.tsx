import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

import { ProductView } from "Elements/ProductView";
import { Product } from "Types/products.interface";

export const ProductRoute = () => {
  const [product, setProduct] = useState<Product | null>(null);

  const route = useRoute();

  const getData = async (callback?: () => void) => {
    const response = await fetch(`https://demo.spreecommerce.org/api/v2/storefront/products/${route.params.id}`);
    const jsonData = await response.json();

    const productData = jsonData.data;

    if (productData) {
      setProduct(productData);
    }

    callback?.();
  }

  useEffect(() => {
    getData();
  }, []);

  return product
    ? <ProductView {...product} />
    : <ActivityIndicator />
};
