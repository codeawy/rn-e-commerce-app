import { faker } from "@faker-js/faker";
import { Product } from "@/interfaces/product";

export const products: Product[] = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: Number(faker.commerce.price()),
  imageURL: faker.helpers.arrayElement([
    require("../../assets/images/clothes/product-01.png"),
    require("../../assets/images/clothes/product-02.png"),
    require("../../assets/images/clothes/product-03.png"),
  ]),
}));
