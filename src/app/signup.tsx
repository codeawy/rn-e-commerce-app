import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupFormData, signupSchema } from "@/schema/auth";
import { ErrorMessage } from "@hookform/error-message";

const SignUp = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  // Handlers
  const onSubmit = (data: SignupFormData) => {
    console.log(data);
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1">
        <View>
          <Text className="text-4xl font-PoppinsExtraBoldItalic">
            Create an account
          </Text>
          <Text>Let’s create your account.</Text>
        </View>

        <Controller
          control={control}
          name="fullName"
          render={({ field: { value, onChange } }) => (
            <View className="relative">
              <TextInput
                placeholder="Name"
                value={value}
                onChangeText={onChange}
              />
            </View>
          )}
        />
        <ErrorMessage
          errors={errors}
          name="fullName"
          render={({ message }) => <Text>{message}</Text>}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange } }) => (
            <TextInput
              placeholder="Email"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <Text>{message}</Text>}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange } }) => (
            <TextInput
              placeholder="Password"
              value={value}
              onChangeText={onChange}
              secureTextEntry={true}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <Text>{message}</Text>}
        />
        <TouchableOpacity
          className="bg-black p-5 w-64"
          onPress={handleSubmit(onSubmit)}
        >
          <Text className="text-white">Create an Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
