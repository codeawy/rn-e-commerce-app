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
    index: number,
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
          <View className="flex-row items-center justify-center gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <TextInput
                ref={(el) => {
                  if (el) {
                    inputRefs.current[index] = el;
                  }
                }}
                key={index}
                className="h-[72px] w-[72px] rounded-lg border border-gray-300 p-4 text-center text-2xl"
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
          <View className="mb-8 mt-4 flex-row justify-center">
            <Text className="font-poppins text-lg text-gray-500">
              Email not received?{" "}
            </Text>
            <Pressable
              onPress={() => {
                router.push("/forget-password");
              }}
            >
              <Text className="font-poppins text-lg font-bold text-primary underline">
                Resend code
              </Text>
            </Pressable>
          </View>

          {/* Continue Button */}
          <TouchableOpacity
            className={`mt-auto items-center rounded-lg py-4 ${
              isCodeComplete ? "bg-primary" : "bg-primary-200"
            }`}
            onPress={handleSubmit}
            disabled={!isCodeComplete || isSubmitting}
          >
            <Text className="font-poppins-bold text-lg text-white">
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
