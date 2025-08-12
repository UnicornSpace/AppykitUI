export const  buttonCode = `
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Pressable } from 'react-native';
import { TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex  gap-1 flex-row  items-center justify-center rounded-lg',
  
  {
    variants: {
      variant: {
        default: 'bg-primary active:opacity-90  hover:bg-primary/90',
        destructive: 'bg-destructive  active:opacity-90',
        outline: 'border border-input bg-background active:bg-accent',
        secondary: 'bg-secondary  active:opacity-80',

      },
      size: {
        default: 'h-12 px-4 py-2 ',
        //? has-[>svg]:bg-green-500  - find out how to to use this in nativewind, but it works on tailwind v4
        sm: 'h-9 rounded-md px-3 ',
        lg: 'h-12  rounded-md px-8  ',
        icon: 'size-10 ',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const buttonTextVariants = cva(
  'text-sm font-medium text-center text-foreground whitespace-nowrap',
  {
    variants: {
      variant: {
        default: 'text-primary-foreground',
        destructive: 'text-destructive-foreground',
        outline: '',
        secondary: 'text-secondary-foreground',
      },
      size: {
        default: 'text-[14px] ',
        sm: '',
        lg: 'text-lg',
        icon: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = React.ComponentProps<typeof Pressable> & VariantProps<typeof buttonVariants>;

function Button({ ref, className, variant, size, ...props }: ButtonProps) {
  return (
    <TextClassContext.Provider
      value={buttonTextVariants({ variant, size, className })}
    >
      <Pressable
        className={cn(
          props.disabled && 'opacity-50',
          buttonVariants({ variant, size, className })
        )}
        ref={ref}
        role='button'
        {...props}
      />
    </TextClassContext.Provider>
  );
}

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };


`