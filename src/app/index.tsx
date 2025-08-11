import Header from "@/shared/Header";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Category } from "@/interfaces/category";
import { categories } from "@/data/category";

export default function Page() {
  const [categoryList, setCategoryList] = useState<Category[]>(categories);

  const handleCategoryPress = (id: string) => {
    setCategoryList(
      categoryList.map((category) => ({
        ...category,
        active: category.id === id,
      })),
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView className="p-4">
          {/* Header */}
          <View className="flex-row items-center justify-between">
            <Header
              title="Discover"
              backButton={false}
              titleStyle={{ fontSize: 32 }}
            />
            <Ionicons name="notifications-outline" size={24} color="black" />
          </View>

          {/* Search Bar */}
          <View className="mb-4 mt-4 flex-row">
            <TouchableOpacity className="mr-2 flex-1 flex-row items-center rounded-lg bg-gray-100 px-4 py-3">
              <Ionicons
                name="search-outline"
                size={24}
                color="#9E9E9E"
                className="mr-2"
              />
              <TextInput
                placeholder="Search for clothes..."
                className="font-poppins flex-1 text-base text-gray-500"
              />
              <Ionicons name="mic-outline" size={24} color="#9E9E9E" />
            </TouchableOpacity>
            <TouchableOpacity className="items-center justify-center rounded-lg bg-black p-3">
              <Ionicons name="filter-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Category List */}
          <ScrollView
            horizontal
            className="flex-row flex-wrap gap-2"
            showsHorizontalScrollIndicator={false}
          >
            {categoryList.map((category) => (
              <TouchableOpacity
                key={category.id}
                className={`mr-2 rounded-lg px-4 py-2 ${
                  category.active ? "bg-black" : "bg-gray-100"
                }`}
                onPress={() => handleCategoryPress(category.id)}
              >
                <Text
                  className={`${category.active ? "text-white" : "text-black"}`}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
