import { Image, Text, View } from "react-native";

import { Product } from "Types/products.interface";

import { styles } from "./index.styles";

export const ProductCard = ({ id, attributes }: Product) => (
  <View style={styles.container}>
    <Image
      style={styles.img}
      source={{
        uri: `https://picsum.photos/${id}/100`,
      }}
    />
    <Text style={styles.name}>{ attributes.name }</Text>
    <Text style={styles.price}>{ attributes.display_price }</Text>
  </View>
);
