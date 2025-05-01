
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface Task {
  id: string
  title: string
  description: string
  status: 'новая' | 'в процессе' | 'завершена'
  priority: 'низкий' | 'средний' | 'высокий'
  deadline: string
}

export function getPriorityColor(priority: string) {
  switch (priority) {
    case 'высокий':
      return 'bg-red-100 text-red-800'
    case 'средний':
      return 'bg-yellow-100 text-yellow-800'
    case 'низкий':
      return 'bg-blue-100 text-blue-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export function getStatusBadgeColor(status: string) {
  switch (status) {
    case 'завершена':
      return 'bg-green-100 text-green-800'
    case 'в процессе':
      return 'bg-purple-100 text-purple-800'
    case 'новая':
      return 'bg-blue-100 text-blue-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export function getDaysLeft(deadline: string): number {
  const deadlineDate = new Date(deadline)
  const today = new Date()
  
  // Сбрасываем время до 00:00:00
  today.setHours(0, 0, 0, 0)
  deadlineDate.setHours(0, 0, 0, 0)
  
  // Разница в миллисекундах
  const diffMs = deadlineDate.getTime() - today.getTime()
  
  // Разница в днях
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24))
}

// Тестовые данные для задач
export const tasks: Task[] = [
  {
    id: '1',
    title: 'Разработать дизайн главной страницы',
    description: 'Создать макет и прототип главной страницы для нового проекта',
    status: 'в процессе',
    priority: 'высокий',
    deadline: '2025-05-05'
  },
  {
    id: '2',
    title: 'Настроить базу данных',
    description: 'Установить и настроить MongoDB для нового проекта',
    status: 'новая',
    priority: 'средний',
    deadline: '2025-05-10'
  },
  {
    id: '3',
    title: 'Написать документацию API',
    description: 'Подготовить техническую документацию по всем эндпоинтам API',
    status: 'завершена',
    priority: 'низкий',
    deadline: '2025-05-15'
  }
]
