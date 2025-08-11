import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const ScreenHeader = ({
  title,
  description,
  backButton = true,
  titleStyle,
}: {
  backButton?: boolean;
  title: string;
  description?: string;
  titleStyle?: StyleProp<TextStyle>;
}) => {
  return (
    <View className="flex-col gap-2">
      {backButton && (
        <TouchableOpacity onPress={() => router.back()} className="py-2">
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      )}
      <Text className="text-5xl font-bold" style={titleStyle}>
        {title}
      </Text>
      {description && (
        <Text className="text-gray-500 font-poppins mb-8">{description}</Text>
      )}
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({});
