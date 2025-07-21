import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Login</Text>
        <Link href="/">Home</Link>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
