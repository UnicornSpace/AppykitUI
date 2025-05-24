import { View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install expo/vector-icons
import Feather from "@expo/vector-icons/Feather";
import clsx from "clsx";

type  IconName = keyof typeof Feather.glyphMap;

type InputProps = {
  className?: string;
  placeholder?: string;
  icon?: IconName;
}
const Input = ({className,placeholder,icon}:InputProps) => {
  return (
    <View className={clsx("w-full h-14 bg-white rounded-full px-4 flex-row items-center gap-1",
      className
    )}>
      {/* Search Icon */}
      {/* <Ionicons name="search" size={19} color="#9CA3AF" className="mr-2" /> */}
      <Feather name={icon} size={20} color="#9CA3AF" />
      {/* Text Input */}
      <TextInput
      
        className="flex-1 h-full text-base"
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
      />
    </View>
  );
};

export default Input;
