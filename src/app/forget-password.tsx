import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgetPasswordSchema, ForgetPasswordFormData } from "../schema/auth";
import { useState } from "react";
import ScreenHeader from "@/shared/Header";

const ForgetPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ForgetPasswordFormData>({
    mode: "onChange",
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgetPasswordFormData) => {
    console.log(data);
    setTimeout(() => {
      router.push("/verify-code");
    }, 1000);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-4">
          <ScreenHeader
            title="Forgot password"
            description="Enter your email for the verification process. We will send 4 digits code to your email."
          />
          {/* Email Input */}
          <View className="mb-8">
            <Text className="font-poppins-medium mb-2 text-gray-700">
              Email
            </Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <View className="relative">
                  <TextInput
                    className={`border ${
                      errors.email
                        ? "border-red-500"
                        : value
                        ? "border-green-500"
                        : "border-gray-300"
                    } rounded-lg p-4 font-poppins pr-10`}
                    placeholder="Enter your email address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={value}
                    onChangeText={onChange}
                  />
                  {value && (
                    <View className="absolute right-3 top-4">
                      {errors.email ? (
                        <Entypo name="warning" size={24} color="red" />
                      ) : (
                        <AntDesign name="checkcircle" size={24} color="green" />
                      )}
                    </View>
                  )}
                </View>
              )}
            />
            {errors.email && (
              <Text className="text-red-500 font-poppins mt-1">
                {errors.email.message}
              </Text>
            )}
          </View>

          {/* Send Code Button */}
          <TouchableOpacity
            className={`rounded-lg py-4 items-center mb-6 ${
              isValid ? "bg-primary" : "bg-primary-200"
            }`}
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting || !isValid}
          >
            <Text className="text-white font-poppins-bold text-lg">
              Send Code
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({});
