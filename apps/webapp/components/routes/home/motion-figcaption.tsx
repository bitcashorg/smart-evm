'use client'

import { motion } from "framer-motion";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";


const figcaptionVariants = cva(
  "absolute right-4 top-4 rounded-full px-4 py-1 text-sm text-left font-bold shadow-md transition-shadow hover:shadow-xl",
  {
    variants: {
      color: {
        default: "bg-[#262626]",
        comingSoon: "bg-[#ff51ed]",
        open: "bg-[#70be33]",
      },
      size: {
        sm: "text-xs",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      color: "default",
      size: "sm",
    },
  }
);


interface MotionFigcaptionProps
  extends VariantProps<typeof figcaptionVariants> {
  label: string;
  className?: string;
}

export function MotionFigcaption({
  label,
  color,
  size,
  className,
}: MotionFigcaptionProps) {
  return (
    <motion.figcaption
      whileHover={{ y: -2, scale: 1.02 }}
      className={cn(figcaptionVariants({ color, size }), className)}
    >
      {label}
    </motion.figcaption>
  );
}