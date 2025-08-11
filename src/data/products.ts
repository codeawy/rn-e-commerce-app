import { Product } from "@/interfaces/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    price: 100,
    imageURL: require("../../assets/images/clothes/product-01.png"),
    discountPercentage: 10,
  },
  {
    id: "2",
    name: "Product 2",
    price: 200,
    imageURL: require("../../assets/images/clothes/product-02.png"),
    discountPercentage: 0,
  },
  {
    id: "3",
    name: "Product 3",
    price: 300,
    imageURL: require("../../assets/images/clothes/product-03.png"),
    discountPercentage: 20,
  },
  {
    id: "4",
    name: "Product 4",
    price: 400,
    imageURL: require("../../assets/images/clothes/product-01.png"),
    discountPercentage: 35,
  },
  {
    id: "5",
    name: "Product 5",
    price: 500,
    imageURL: require("../../assets/images/clothes/product-01.png"),
  },
  {
    id: "6",
    name: "Product 6",
    price: 600,
    imageURL: require("../../assets/images/clothes/product-02.png"),
  },
  {
    id: "7",
    name: "Product 7",
    price: 700,
    imageURL: require("../../assets/images/clothes/product-03.png"),
  },
  {
    id: "8",
    name: "Product 8",
    price: 800,
    imageURL: require("../../assets/images/clothes/product-01.png"),
  },
];
