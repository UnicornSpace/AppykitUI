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
    <TouchableOpacity className={buttonVariants({ variant }) + " " + "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive font-medium"}>
      <Text className={variant==="default"? "text-white": ""}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const buttonVariants = cva("text-black rounded-md shadow ", {
  variants: {
    variant: {
      default: "bg-slate-900 text-white",
      secondary: "bg-slate-400 text-black",
      destructive: "bg-red-500 text-white",
      outline: "border-[0.5px] border-slate-900/70 text-slate-900",
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

