interface Attributes {
  name: string;
  price: string;
  currency: string;
  display_price: string;
  description: string;
}

export interface Product {
  id: string;
  type: string;
  attributes: Attributes
}
