import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import { useTailwind } from "tailwind-rn";
import HeaderCard from "./HeaderCard";

const Header = () => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("pt-12 flex flex-col px-6")}>
      <View style={tailwind("w-full")}>
        <Text
          style={tailwind("text-gray-700 font-bold text-3xl text-left mb-8")}
        >
          Hey Johncarlos!
        </Text>
      </View>
      <View style={styles.headerContainer}>
        <HeaderCard title="Spending This Month" amount="$800" />
        <HeaderCard title="Savings & Assets" amount="$2000" />
        <HeaderCard title="Debt" amount="$24000" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {},
});
