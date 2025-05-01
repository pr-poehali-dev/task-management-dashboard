
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { 
  Task, 
  getPriorityColor, 
  getStatusBadgeColor 
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
      
      <h3 className="text-lg font-medium">{task.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{task.description}</p>
      
      <div className="flex items-center mt-4 text-sm text-gray-500">
        <Icon name="Clock" size={16} />
        <span className="ml-1">до {task.deadline}</span>
      </div>
      
      <div className="flex mt-4 space-x-2">
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Icon name="Check" size={16} />
          Изменить статус
        </Button>
        <Button variant="ghost" size="icon">
          <Icon name="Pencil" size={16} />
        </Button>
        <Button variant="ghost" size="icon">
          <Icon name="Trash" size={16} />
        </Button>
      </div>
    </div>
  )
}
