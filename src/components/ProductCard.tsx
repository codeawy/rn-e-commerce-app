import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Product } from "@/interfaces/product";
import { Ionicons } from "@expo/vector-icons";
import { useSavedProducts } from "@/context/SavedProductsContext";
import { router } from "expo-router";

const ProductCard = ({ product }: { product: Product }) => {
  const { isProductSaved, toggleSavedProduct } = useSavedProducts();

  return (
    <View className="mb-4 w-[48%]">
      <TouchableOpacity
        className="relative"
        onPress={() => router.push("product")}
      >
        <Image source={product.imageURL} className="h-48 w-full rounded-lg" />
        <TouchableOpacity
          className="absolute right-2 top-2 rounded-md bg-white p-2"
          onPress={() => {
            toggleSavedProduct(product);
          }}
        >
          <Ionicons
            name={isProductSaved(product.id) ? "heart" : "heart-outline"}
            size={24}
            color={isProductSaved(product.id) ? "red" : "black"}
          />
        </TouchableOpacity>
        <Text className="text-sm font-bold">{product.name}</Text>
        <Text>{product.price}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
