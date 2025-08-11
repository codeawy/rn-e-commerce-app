import { Product } from "@/interfaces/product";
import { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type SavedProductsContextType = {
  toggleSavedProduct: (product: Product) => Promise<boolean>;
  isProductSaved: (productId: string) => boolean;
};

export const SavedProductsContext = createContext<SavedProductsContextType>(
  {} as SavedProductsContextType,
);

export const SavedProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [savedProducts, setSavedProducts] = useState<Product[]>([]);

  const persistSavedProduct = async (products: Product[]) => {
    try {
      const jsonValue = JSON.stringify(products);
      await AsyncStorage.setItem("savedProducts", jsonValue);
      console.log("Saved products to storage", products.length);
    } catch (error) {
      console.error("Error while saving products:", error);
    }
  };

  const toggleSavedProduct = async (product: Product): Promise<boolean> => {
    try {
      const productExists = savedProducts.some((p) => p.id === product.id);

      let updatedSavedProduct: Product[];

      if (productExists) {
        console.log("Removing product from saved:", product.id);
        updatedSavedProduct = savedProducts.filter((p) => p.id !== product.id);
      } else {
        console.log("Adding product to saved:", product.id);
        updatedSavedProduct = [...savedProducts, product];
      }

      setSavedProducts(updatedSavedProduct);
      await persistSavedProduct(updatedSavedProduct);
      return !productExists;
    } catch (error) {
      console.error("Error toggling saved product:", error);
      return false;
    }
  };

  const isProductSaved = (productId: string): boolean => {
    return savedProducts.some((product) => product.id === productId);
  };

  const value = {
    toggleSavedProduct,
    isProductSaved,
  };
  return (
    <SavedProductsContext.Provider value={value}>
      {children}
    </SavedProductsContext.Provider>
  );
};

export const useSavedProducts = () => {
  const context = useContext(SavedProductsContext);

  if (!context) {
    throw new Error(
      "useSavedProducts must be used within a SavedProductsProvider",
    );
  }

  return context;
};
