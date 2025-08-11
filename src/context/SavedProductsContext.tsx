import { Product } from "@/interfaces/product";
import { createContext, useContext, useState } from "react";

type SavedProductsContextType = {
  toggleSavedProduct: (product: Product) => void;
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

  const toggleSavedProduct = (product: Product) => {
    console.log("toggle saved product", product);
  };

  const value = {
    toggleSavedProduct,
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
