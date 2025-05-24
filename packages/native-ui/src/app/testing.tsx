import { View, Text } from "react-native";
import React from "react";
import { Button } from "@/components/ui/button";
import Ionicons from "@expo/vector-icons/Ionicons";
const testing = () => {
  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Button variant="primary" size="sm">
        Primary
      </Button>
      <Button className="" variant="secondary" size="sm">
        Secondary
      </Button>
      <Button className="" variant="destructive" size="sm">
        Destructive
      </Button>

      <Button className="" variant="outline" size="sm">
        Outline sm
      </Button>
      {/* <Button className="" variant="outline" size="lg">
        Outline lg
      </Button> */}
      <Button className="flex items-center  gap-2" variant="outline" size="sm">
        <Text className="text-black">Icon</Text>
        <Ionicons name="arrow-forward" size={18} color="black" />
        
      </Button>
    </View>
  );
};

export default testing;
