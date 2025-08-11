import { ImageSourcePropType } from "react-native";

export interface Product {
  id: string;
  name: string;
  price: number;
  imageURL: ImageSourcePropType; // will be URL from API, but using local paths for now!
  discountPercentage?: number;
}
