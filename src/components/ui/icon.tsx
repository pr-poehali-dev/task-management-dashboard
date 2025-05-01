
import * as React from "react"
import * as LucideIcons from "lucide-react"

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: keyof typeof LucideIcons
  size?: number
  color?: string
  strokeWidth?: number
  fallback?: keyof typeof LucideIcons
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ name, size = 24, color, strokeWidth = 2, fallback = "CircleAlert", ...props }, ref) => {
    const LucideIcon = LucideIcons[name] || LucideIcons[fallback]
    
    return (
      <div ref={ref} {...props}>
        <LucideIcon size={size} color={color} strokeWidth={strokeWidth} />
      </div>
    )
  }
)

Icon.displayName = "Icon"

export default Icon
