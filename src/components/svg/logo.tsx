import { SVGProps } from "@/types/global"
import React from "react"
import Image from "next/image"

export const Logo = ({ className, ...props }: SVGProps) => {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={500}
      height={500}
      className={className}
      {...props}
    />
  )
}
