import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import clsx from 'clsx'


type BadgeProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";  
  // size?: "default" | "sm" | "lg";
}

const Badge = ({children,className,variant}:BadgeProps) => {
  return (
    <View className={clsx('bg-white flex flex-row items-center justify-center rounded-full   ', className)}>
      <Text className={className}>{children}</Text>
    </View>
  )
}

export default Badge

const styles = StyleSheet.create({})