import { ImageSourcePropType } from "react-native";

export interface Product {
  id: string;
  name: string;
  price: number;
  imageURL: ImageSourcePropType;
}
