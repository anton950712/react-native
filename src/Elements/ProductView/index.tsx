import { Alert, Button, Image, ScrollView, Text, View } from "react-native";

import { Product } from "Types/products.interface";
import { colors } from "Constants";

import { styles } from "./index.styles";

export const ProductView = ({ id, attributes }: Product) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: `https://picsum.photos/${id}/250`,
          }}
        />
        <View style={styles.mainDataContainer}>
          <Text style={styles.name}>{ attributes.name }</Text>
          <Text style={styles.price}>{ attributes.display_price }</Text>
        </View>
        <Text style={styles.description}>
          { attributes.description }
          { attributes.description }
          { attributes.description }
        </Text>
      </ScrollView>
      <View style={styles.button}>
        <Button
          title="ADD TO CART"
          color={colors.blue500}
          onPress={() => Alert.alert("Button pressed")}
        />
      </View>
    </View>
  );
};
