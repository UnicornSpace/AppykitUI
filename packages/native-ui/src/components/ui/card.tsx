import { StyleSheet, Text, View } from "react-native";
import React from "react";
import clsx from "clsx";
const Card = ({children, className}:{children:React.ReactNode, className:string}) => {
  return (
    <View className={clsx("bg-white shadow-md rounded-lg p-4 flex flex-col", className)}>
      {children}
    </View>
  );
};

function CardHeader({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <View className={className}>{children}</View>;
}
function CardContent({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <View>{children}</View>;
}
function CardFooter({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
   <View>{children}</View>
  );
}
function CardTitle({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <Text className={clsx("text-black",className)}>{children}</Text>;
}
function CardDescription({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <Text className={clsx("text-black",className)}>{children}</Text>;;
}

export { Card , CardHeader, CardContent, CardFooter, CardTitle, CardDescription };
