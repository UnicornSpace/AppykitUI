import { View } from "react-native";
import React from "react";
import Text from "@/components/ui/text";
import Button from "@/components/ui/button";


const Testing = () => {
  return (
    <View>
      <View className="flex flex-col gap-1 mt-4">
        <Text size="heading">Buttons</Text>
        <Button>Click me</Button>
        <Button variant="secondary">Click me</Button>
        <Button variant="destructive">Click me</Button>
        <Button variant="outline">Click me</Button>
      </View>
      <View>
        <Text size="heading">Heading 1</Text>
        <Text size="subheading">Heading 1</Text>
        <Text>Heading 1</Text>
        <Text size="small">Heading 1</Text>
        <Text size="tiny">Heading 1</Text>
      </View>
    </View>
  );
};

export default Testing;
