"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export const Logo = ({ className, width = 500, height = 500, ...props }: LogoProps) => {
  return (
    <>
      <Image
        src="/logo-black.svg"
        alt="Mayur Doifode Logo"
        width={width}
        height={height}
        className={cn("block dark:hidden", className)}
        loading="eager"
        decoding="async"
        {...props}
      />
      <Image
        src="/logo-white.svg"
        alt="Mayur Doifode Logo"
        width={width}
        height={height}
        className={cn("hidden dark:block", className)}
        loading="eager"
        decoding="async"
        {...props}
      />
    </>
  )
}
