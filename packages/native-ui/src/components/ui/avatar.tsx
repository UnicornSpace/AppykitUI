import { Image, Text, View } from "react-native";
import React from "react";
import clsx from "clsx";
import Ionicons from "@expo/vector-icons/Ionicons";

type IconName = keyof typeof Ionicons.glyphMap;

type AvatarProps = {
  className?: string;
  type: "image" | "icon" | "text";
  content: {
    uri?: string;
    iconName?: IconName;
    text?: string;
    iconColor?: string | "black";
    iconSize?: number;
  };
};

const Avatar = ({ className, type, content }: AvatarProps) => {
  const baseClass = "w-10 h-10 rounded-full border items-center justify-center";

  return (
    <View className={clsx(baseClass, className)}>
      {type === "image" && content.uri ? (
        <Image
          source={{ uri: content.uri }}
          className="w-full h-full rounded-full"
        />
      ) : type === "icon" && content.iconName ? (
        <Ionicons
          name={content.iconName}
          size={content.iconSize}
          color={content.iconColor}
        />
      ) : type === "text" && content.text ? (
        <Text className="text-base font-bold text-center">{content.text}</Text>
      ) : (
        <Ionicons name="person-outline" size={24} color="gray" />
      )}
    </View>
  );
};

export default Avatar;
