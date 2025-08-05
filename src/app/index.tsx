import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text style={{ fontFamily: "Poppins-Bold", fontSize: 40 }}>
            Home Page
          </Text>
          <Text style={{ fontSize: 40, fontFamily: "Poppins-ExtraBold" }}>
            Hello world!
          </Text>
          <Text>Tailwind Text</Text>
          <Link href="/signup">Sign Up</Link>
          <Link href="/login">Login</Link>
          <Link href="/forget-password">Forget Password</Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
