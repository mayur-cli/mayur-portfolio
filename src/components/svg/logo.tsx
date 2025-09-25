"use client"

import React from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export const Logo = ({ className, width = 500, height = 500, ...props }: LogoProps) => {
  const { resolvedTheme } = useTheme()
  
  // Use resolvedTheme to get the actual theme (handles 'system' preference)
  // Default to 'dark' during SSR to match your default theme
  const currentTheme = resolvedTheme || 'dark'
  
  // Choose logo based on current theme
  const logoSrc = currentTheme === 'dark' ? '/logo-white.svg' : '/logo-black.svg'
  
  return (
    <Image
      src={logoSrc}
      alt="Mayur Doifode Logo"
      width={width}
      height={height}
      className={className}
      priority
      {...props}
    />
  )
}
