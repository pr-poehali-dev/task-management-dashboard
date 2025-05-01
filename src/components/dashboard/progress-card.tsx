
import { cn } from "@/lib/utils"

interface ProgressCardProps {
  title: string
  description: string
  percentage: number
  total: number
  completed: number
  remaining: number
}

export function ProgressCard({ 
  title, 
  description, 
  percentage, 
  total, 
  completed, 
  remaining 
}: ProgressCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground p-6">
      <div className="space-y-1">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
        <div 
          className="h-2 rounded-full bg-blue-950" 
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="mt-2 text-right text-sm text-muted-foreground">
        {percentage}%
      </div>
      <div className="mt-4 grid grid-cols-3 text-center">
        <div>
          <p className="text-sm font-medium">Всего</p>
          <p className="text-xl font-bold">{total}</p>
        </div>
        <div>
          <p className="text-sm font-medium">Завершено</p>
          <p className="text-xl font-bold">{completed}</p>
        </div>
        <div>
          <p className="text-sm font-medium">Осталось</p>
          <p className="text-xl font-bold">{remaining}</p>
        </div>
      </div>
    </div>
  )
}
