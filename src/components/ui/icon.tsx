
import React from "react"
import { LucideProps, icons } from "lucide-react"

export interface IconProps extends LucideProps {
  name: keyof typeof icons
  fallback?: keyof typeof icons
}

const Icon = ({ name, fallback = "CircleAlert", ...props }: IconProps) => {
  const LucideIcon = icons[name] || icons[fallback]
  return <LucideIcon {...props} />
}

export default Icon
