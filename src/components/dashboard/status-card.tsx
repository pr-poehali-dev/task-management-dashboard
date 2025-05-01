
import Icon from "@/components/ui/icon"
import { cn } from "@/lib/utils"

interface StatusCardProps {
  title: string
  count: number
  description: string
  icon: React.ReactNode
  className?: string
}

export function StatusCard({ title, count, description, icon, className }: StatusCardProps) {
  return (
    <div className={cn("rounded-lg border bg-card text-card-foreground p-6", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{title}</h3>
        {icon}
      </div>
      <div className="mt-3">
        <p className="text-4xl font-bold">{count}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
