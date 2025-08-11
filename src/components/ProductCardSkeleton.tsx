import { View, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

const ProductCardSkeleton = () => {
  const pulseAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    );
    pulse.start();

    return () => pulse.stop();
  }, [pulseAnim]);

  const animatedStyle = {
    backgroundColor: pulseAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["#E5E5E5", "#F5F5F5"],
    }),
  };

  return (
    <View className="mb-4 w-[48%]">
      <View className="relative">
        {/* Image skeleton */}
        <Animated.View
          className="h-48 w-full rounded-lg"
          style={animatedStyle}
        />

        {/* Heart icon skeleton */}
        <Animated.View
          className="absolute right-2 top-2 h-10 w-10 rounded-md"
          style={[animatedStyle, { backgroundColor: "#D1D5DB" }]}
        />

        {/* Product name skeleton */}
        <Animated.View
          className="mt-2 h-4 w-3/4 rounded"
          style={animatedStyle}
        />

        {/* Price skeleton */}
        <Animated.View
          className="mt-1 h-3 w-1/2 rounded"
          style={animatedStyle}
        />
      </View>
    </View>
  );
};

export default ProductCardSkeleton;
