export enum Routes {
  Home = "Home",
  Product = "Product",
  Cart = "Cart"
}

export type RootStackParamList = {
  Home: {};
  Product: { id: string };
  Cart: {};
};
