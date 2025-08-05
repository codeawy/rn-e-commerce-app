import {
  NativeSyntheticEvent,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import ScreenHeader from "@/shared/Header";
import { Link, router } from "expo-router";

const VerifyCode = () => {
  const inputRefs = useRef<TextInput[]>([]);
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (text: string, index: number) => {
    // Only allow digits
    if (!/^\d*$/.test(text)) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto-advance to next input
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const onKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (event.nativeEvent.key === "Backspace" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isCodeComplete = code.every((digit) => digit !== "");

  // Handle submit
  const handleSubmit = () => {
    if (!isCodeComplete) return;

    setIsSubmitting(true);
    // Simulate API verification
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/reset-password");
    }, 1000);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-4">
          <View>
            <ScreenHeader
              title="Verify Code"
              description="Enter the 4 digits code sent to your email."
            />
          </View>
          <View className="flex-row gap-2 justify-center items-center">
            {Array.from({ length: 4 }).map((_, index) => (
              <TextInput
                ref={(el) => {
                  if (el) {
                    inputRefs.current[index] = el;
                  }
                }}
                key={index}
                className="border border-gray-300 rounded-lg p-4 w-[72px] h-[72px] text-center text-2xl"
                // TODO: Add a custom keyboard for the code input
                keyboardType="number-pad"
                maxLength={1}
                value={code[index]}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(event) => onKeyPress(event, index)}
              />
            ))}
          </View>
          {/* Resend Code Link */}
          <View className="flex-row justify-center mb-8 mt-4">
            <Text className="text-gray-500 font-poppins text-lg">
              Email not received?{" "}
            </Text>
            <Pressable
              onPress={() => {
                router.push("/forget-password");
              }}
            >
              <Text className="text-primary font-poppins underline text-lg font-bold">
                Resend code
              </Text>
            </Pressable>
          </View>

          {/* Continue Button */}
          <TouchableOpacity
            className={`rounded-lg py-4 items-center mt-auto ${
              isCodeComplete ? "bg-primary" : "bg-primary-200"
            }`}
            onPress={handleSubmit}
            disabled={!isCodeComplete || isSubmitting}
          >
            <Text className="text-white font-poppins-bold text-lg">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerifyCode;

const styles = StyleSheet.create({});
