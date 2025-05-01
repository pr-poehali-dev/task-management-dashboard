
import { Progress } from "@/components/ui/progress"

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
    <div className="rounded-lg border bg-white p-6">
      <div className="space-y-1">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      
      <div className="mt-4">
        <Progress value={percentage} className="h-2 bg-gray-100" indicatorClassName="bg-blue-900" />
        <div className="text-right mt-1 text-sm font-medium">{percentage}%</div>
      </div>
      
      <div className="mt-8 grid grid-cols-3 text-center">
        <div>
          <p className="text-sm text-gray-500">Всего</p>
          <p className="text-lg font-bold mt-1">{total}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Завершено</p>
          <p className="text-lg font-bold mt-1">{completed}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Осталось</p>
          <p className="text-lg font-bold mt-1">{remaining}</p>
        </div>
      </div>
    </div>
  )
}
