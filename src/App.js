import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "../tailwind.json";
import Header from "./Components/Header";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaView>
        <View>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
      <Header />
    </TailwindProvider>
  );
}
