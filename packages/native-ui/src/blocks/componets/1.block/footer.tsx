import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@/components/ui/button";

import { Feather } from "@expo/vector-icons";
const B1Footer = () => {
  return (
    <View className="flex flex-row items-center justify-between bg-white inset-shadow-2xs ">
      <Button className="flex items-center  gap-2" variant="outline" size="sm">
        <Feather name="shopping-cart" size={18} color="orange" />
        <Text className="text-orange-500">Add to Cart</Text>
      </Button>
      <Button className="bg-orange-500" variant="primary" size="sm">
        Checkout
      </Button>
    </View>
  );
};

export default B1Footer;

const styles = StyleSheet.create({});
