import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Label from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Ionicons from "@expo/vector-icons/Ionicons";
const B1Header = () => {
  return (
    <View className="flex flex-row items-center justify-between">
      <Button
        className="flex items-center rounded-full  gap-2 p-1 "
        variant="outline"
      >
        <Ionicons name="arrow-back" size={18} color="black" />
      </Button>
      <Label size="lg" className="font-semibold">Detail Product</Label>
      <Button
        className="flex items-center rounded-full  p-1 gap-2"
        variant="outline"

      >
        <Ionicons name="share-social" size={18} color="black" />
      </Button>
    </View>
  );
};

export default B1Header;

const styles = StyleSheet.create({});
