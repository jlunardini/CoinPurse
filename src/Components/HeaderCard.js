import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { useTailwind } from "tailwind-rn";

const HeaderCard = ({ title, amount }) => {
  const tailwind = useTailwind();

  return (
    <View style={styles.headerCard}>
      <Text
        style={tailwind("text-gray-700 font-semibold text-2xl text-left mb-2")}
      >
        {title}
      </Text>
      <Text style={tailwind("text-gray-600 font-medium text-3xl text-left")}>
        {amount}
      </Text>
    </View>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  headerCard: {
    padding: 18,
    paddingLeft: 0,
    // shadowColor: "#000",
    // backgroundColor: "#FFF",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.15,
    // shadowRadius: 3.84,
    // elevation: 5,
    marginBottom: 16,
    borderRadius: 8,
  },
});
