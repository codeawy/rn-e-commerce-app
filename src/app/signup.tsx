import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, router } from "expo-router";
import { ErrorMessage } from "@hookform/error-message";
import { signupSchema, SignupFormData } from "../schema/auth";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import ScreenHeader from "@/shared/Header";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupFormData>({
    mode: "onChange",
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignupFormData) => {
    setIsSubmitting(true);
    console.log("Form submitted:", data);
    // Here you would typically call your registration API
    // On success, navigate to the next screen
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // router.push("/");
    }, 1000);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 py-8">
          <ScreenHeader
            title="Create an account"
            description="Let's create your account."
          />

          {/* Full Name Input */}
          <View className="mb-5">
            <Text className="font-poppins-medium mb-2 text-gray-700">
              Full Name
            </Text>
            <Controller
              control={control}
              name="fullName"
              render={({ field: { onChange, value } }) => (
                <View className="relative">
                  <TextInput
                    className={`border ${
                      errors.fullName
                        ? "border-red-500"
                        : value
                        ? "border-green-500"
                        : "border-gray-300"
                    } rounded-lg p-4 font-poppins pr-10`}
                    placeholder="Enter your full name"
                    value={value}
                    onChangeText={onChange}
                  />
                  {value && (
                    <View className="absolute right-3 top-4">
                      {errors.fullName ? (
                        <Entypo name="warning" size={24} color="red" />
                      ) : (
                        <AntDesign name="checkcircle" size={24} color="green" />
                      )}
                    </View>
                  )}
                </View>
              )}
            />
            <ErrorMessage
              errors={errors}
              name="fullName"
              render={({ message }) => (
                <Text className="text-red-500 font-poppins mt-1">
                  {message}
                </Text>
              )}
            />
          </View>

          {/* Email Input */}
          <View className="mb-5">
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
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <Text className="text-red-500 font-poppins mt-1">
                  {message}
                </Text>
              )}
            />
          </View>

          {/* Password Input */}
          <View className="mb-6">
            <Text className="font-poppins-medium mb-2 text-gray-700">
              Password
            </Text>
            <View className="relative">
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <View
                    className={`flex-row items-center border ${
                      errors.password
                        ? "border-red-500"
                        : value
                        ? "border-green-500"
                        : "border-gray-300"
                    } rounded-lg`}
                  >
                    <TextInput
                      className="flex-1 p-4 font-poppins"
                      placeholder="Enter your password"
                      secureTextEntry={!showPassword}
                      value={value}
                      onChangeText={onChange}
                    />
                    {value && (
                      <View className="px-2">
                        {errors.password ? (
                          <Entypo name="warning" size={24} color="red" />
                        ) : (
                          <AntDesign
                            name="checkcircle"
                            size={24}
                            color="green"
                          />
                        )}
                      </View>
                    )}
                    <Pressable
                      onPress={() => setShowPassword(!showPassword)}
                      className={`pr-4 absolute ${
                        !isValid && value ? "right-6" : "right-0"
                      }`}
                    >
                      {showPassword ? (
                        <AntDesign name="eyeo" size={24} color="black" />
                      ) : (
                        <Feather name="eye-off" size={24} color="black" />
                      )}
                    </Pressable>
                  </View>
                )}
              />
            </View>
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <Text className="text-red-500 font-poppins mt-1">
                  {message}
                </Text>
              )}
            />
          </View>

          {/* Terms and Conditions */}
          <View className="mb-6">
            <Text className="text-gray-600 font-poppins">
              By signing up you agree to our{" "}
              <Text className="text-blue-600 font-poppins-medium">Terms</Text>,{" "}
              <Text className="text-blue-600 font-poppins-medium">
                Privacy Policy
              </Text>
              , and{" "}
              <Text className="text-blue-600 font-poppins-medium">
                Cookie Use
              </Text>
            </Text>
          </View>

          {/* Signup Button */}
          <TouchableOpacity
            className={`rounded-lg py-4 items-center mb-6 ${
              isValid ? "bg-primary" : "bg-primary-200"
            }`}
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting || !isValid}
          >
            <Text className="text-white font-poppins-bold text-lg">
              Create an Account
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center mb-6">
            <View className="flex-1 h-[1px] bg-gray-300" />
            <Text className="mx-4 text-gray-500 font-poppins">Or</Text>
            <View className="flex-1 h-[1px] bg-gray-300" />
          </View>

          {/* Social Signup Buttons */}
          <View className="mb-8">
            <TouchableOpacity className="flex-row justify-center items-center border border-gray-300 rounded-lg py-4 mb-3">
              <Image
                source={require("../../assets/images/logos_google-icon.png")}
                className="w-6 h-6 mr-2"
              />
              <Text className="font-poppins-medium">Sign Up with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-center items-center bg-facebook rounded-lg py-4">
              <Image
                source={require("../../assets/images/logos_facebook.png")}
                className="w-6 h-6 mr-2"
              />
              <Text className="font-poppins-medium text-white">
                Sign Up with Facebook
              </Text>
            </TouchableOpacity>
          </View>

          {/* Login Link */}
          <View className="flex-row justify-center">
            <Text className="font-poppins text-gray-600">
              Already have an account?{" "}
            </Text>
            <Link href="/login" className="font-poppins text-primary underline">
              Log In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
