'use client'

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2.5 font-semibold transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-accent-500 text-white rounded-xl hover:bg-accent-600 hover:shadow-[0_8px_30px_rgba(74,144,217,0.3)] active:scale-[0.98]',
        secondary:
          'bg-white/5 text-white border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20',
        ghost:
          'text-white/70 hover:text-white hover:bg-white/5 rounded-lg',
        whatsapp:
          'bg-[#25d366] text-white rounded-xl hover:bg-[#20bd5a] hover:shadow-[0_8px_30px_rgba(37,211,102,0.3)]',
      },
      size: {
        sm: 'px-4 py-2.5 text-sm',
        md: 'px-7 py-3.5 text-[0.95rem]',
        lg: 'px-9 py-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode
    asMotion?: boolean
  }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asMotion = true, children, ...props }, ref) => {
    if (asMotion) {
      return (
        <motion.button
          ref={ref}
          className={cn(buttonVariants({ variant, size, className }))}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          {...(props as HTMLMotionProps<'button'>)}
        >
          {children}
        </motion.button>
      )
    }

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
