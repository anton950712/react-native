import { Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Product } from "Types/products.interface";
import { RootStackParamList } from "Types/routes.interface";

import { styles } from "./index.styles";

export const ProductCard = ({ id, attributes }: Product) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onPress = () => {
    navigation.navigate("Product", { id });
  };
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: `https://picsum.photos/${id}/100`,
        }}
      />
      <Text style={styles.name}>{ attributes.name }</Text>
      <Text style={styles.price}>{ attributes.display_price }</Text>
    </TouchableOpacity>
  );
};
