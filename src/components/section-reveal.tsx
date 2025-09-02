"use client"

import { motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type ElementTag = "section" | "div" | "article"

type SectionRevealProps = {
  className?: string
  children: ReactNode
  amount?: number
  delay?: number
  as?: ElementTag
} & MotionProps

function SectionRevealComponent({
  className,
  children,
  amount = 0.3,
  delay = 0,
  as = "section",
  ...rest
}: SectionRevealProps) {
  const MotionTag = as === "div" ? motion.div : as === "article" ? motion.article : motion.section

  return (
    <MotionTag
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

export { SectionRevealComponent as SectionReveal }
export default SectionRevealComponent
