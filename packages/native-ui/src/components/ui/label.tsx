import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { tv } from 'tailwind-variants'


export const LabelVariants = tv({
  base:"text-smfont-medium text-black",
  variants:{
    size:{
      sm:"text-sm",
      md:"text-md",
      lg:"text-lg"	
    }
  },
  defaultVariants:{
    size:"sm"
  }

})

interface LabelProps {
  children?: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const Label = ({children,className,size}:LabelProps) => {
  return (
    
      <Text className={LabelVariants({className,size})}>{children}</Text>
    
  )
}

export default Label

const styles = StyleSheet.create({})