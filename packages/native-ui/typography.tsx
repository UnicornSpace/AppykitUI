import { View, Text as TextRN } from "react-native";
import React from "react";
import { cva } from "class-variance-authority";

const Text = ({
  children,
  size = "default",
}: {
  children: string;
  size?: "heading" | "subheading" | "default" | "small" | "tiny";
}) => {
  return <TextRN className={textVariants({ size }) + ""}>{children}</TextRN>;
};

const textVariants = cva("text-black", {
  variants: {
    size: {
      heading: "text-3xl font-bold",
      subheading: "text-2xl font-semibold",
      default: "text-base",
      small: "text-sm",
      tiny: "text-xs",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export default Text;
