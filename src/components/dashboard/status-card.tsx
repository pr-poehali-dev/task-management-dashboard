
import { ReactNode } from "react"

interface StatusCardProps {
  title: string
  count: number
  subtitle: string
  icon: ReactNode
}

export function StatusCard({ title, count, subtitle, icon }: StatusCardProps) {
  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-medium">{title}</h3>
        </div>
        <div>
          {icon}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-4xl font-bold">{count}</p>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      </div>
    </div>
  )
}
