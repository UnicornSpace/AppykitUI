import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Label from "@/components/ui/label";
import AntDesignIcon from "@expo/vector-icons/AntDesign";
import { Feather } from "@expo/vector-icons";
const B1Description = () => {
  return (
    <View className="flex flex-col gap-3">
      {/* Product Name */}
      <View className="flex flex-row items-start justify-start">
        <Label className="font-semibold text-[18px]" >Ipad Pro 6th Generation 11 Inch 2022</Label>
        <Feather
          name="heart"
          size={18}
          color="black"
          className="bg-white rounded-full p-2"
        />
      </View>

      {/* Product Price */}
      <View>
        <View>
          <Label  className="font-bold" size="lg">IDR 15.299.000</Label>
        </View>
        <Label  className="font-normal line-through text-gray-400" size="md">10-16-900.000</Label>
      </View>

      {/* Product Description */}
      <View className="flex-1 flex-col items-start gap-1 ">
        <Label className="font-semibold" size="md">Description Product</Label>
        <Label  className=" text-gray-600" size="sm">
          IPad Peth Genation offers high performance with an Apple 52 cnp Lenna
          Designed to be sim and light thi sports 50 netmo  
           <Label  className=" font-medium text-orange-400" size="sm" >....Read more</Label>
        </Label>
       
      </View>
    </View>
  );
};

export default B1Description;

const styles = StyleSheet.create({});
