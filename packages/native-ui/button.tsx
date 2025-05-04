import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { cva } from "class-variance-authority";
// import { cn } from "@/lib";

const Button = ({
  children,
  variant = "default",
  className,
}: {
  children?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
}) => {
  return (
    <TouchableOpacity className={buttonVariants({ variant })}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const buttonVariants = cva("text-black rounded-md shadow", {
  variants: {
    variant: {
      default: "bg-slate-900 text-white",
      secondary: "bg-slate-400 text-black",
      destructive: "bg-red-500 text-white",
      outline: "border border-slate-900 text-slate-900",
    },
    size: {
      default: "px-4 py-2",
      sm: "px-3 py-1.5 text-xs",
      lg: "px-8 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
