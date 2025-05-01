
import { ReactNode } from "react"

interface StatusCardProps {
  title: string
  count: number
  description: string
  icon: ReactNode
}

export function StatusCard({ title, count, description, icon }: StatusCardProps) {
  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-4xl font-bold mt-4">{count}</p>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        <div>
          {icon}
        </div>
      </div>
    </div>
  )
}
