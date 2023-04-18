export enum Routes {
  Home = "Home",
  Product = "Product"
}

export type RootStackParamList = {
  Home: {};
  Product: { id: string };
};
