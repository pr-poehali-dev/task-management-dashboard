
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { 
  Task, 
  getPriorityColor, 
  getStatusBadgeColor,
  formatDate
} from "@/lib/utils"

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="flex flex-wrap gap-2 mb-2">
        <span className={`text-xs font-medium rounded-full px-2.5 py-0.5 ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </span>
        <span className={`text-xs font-medium rounded-full px-2.5 py-0.5 ${getStatusBadgeColor(task.status)}`}>
          {task.status}
        </span>
      </div>
      
      <h3 className="text-lg font-medium mt-2">{task.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{task.description}</p>
      
      <div className="flex items-center mt-4 text-sm text-gray-500">
        <Icon name="Clock" size={14} className="mr-1" />
        <span>до {formatDate(task.deadline)}</span>
      </div>
      
      <div className="flex mt-4 space-x-2">
        <Button variant="outline" size="sm" className="text-sm flex items-center rounded px-3 py-1.5 border">
          <Icon name="Check" size={14} className="mr-1" />
          Изменить статус
        </Button>
        <Button variant="ghost" size="sm" className="rounded p-1.5 border">
          <Icon name="Pencil" size={14} />
        </Button>
        <Button variant="ghost" size="sm" className="rounded p-1.5 border">
          <Icon name="Trash" size={14} />
        </Button>
      </div>
    </div>
  )
}
