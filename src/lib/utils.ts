
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type TaskStatus = "завершена" | "в процессе" | "новая"
export type TaskPriority = "высокий" | "средний" | "низкий"

export interface Task {
  id: string
  title: string
  description: string
  status: TaskStatus
  priority: TaskPriority
  deadline: string
}

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Разработать дизайн главной страницы',
    description: 'Создать макет и прототип главной страницы для нового проекта',
    status: 'в процессе',
    priority: 'высокий',
    deadline: '05.05.2025',
  },
  {
    id: '2',
    title: 'Настроить базу данных',
    description: 'Установить и настроить MongoDB для нового проекта',
    status: 'новая',
    priority: 'средний',
    deadline: '10.05.2025',
  },
  {
    id: '3',
    title: 'Написать документацию API',
    description: 'Подготовить техническую документацию по всем эндпоинтам API',
    status: 'завершена',
    priority: 'низкий',
    deadline: '15.05.2025',
  },
]

export const getDaysLeft = (deadline: string) => {
  const [day, month, year] = deadline.split('.');
  const deadlineDate = new Date(`${year}-${month}-${day}`);
  const today = new Date();
  
  const diffTime = deadlineDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
}

export const getStatusColor = (status: TaskStatus) => {
  switch (status) {
    case 'завершена': return 'bg-green-500';
    case 'в процессе': return 'bg-orange-500';
    case 'новая': return 'bg-blue-500';
    default: return 'bg-gray-500';
  }
}

export const getPriorityColor = (priority: TaskPriority) => {
  switch (priority) {
    case 'высокий': return 'bg-red-100 text-red-800';
    case 'средний': return 'bg-yellow-100 text-yellow-800';
    case 'низкий': return 'bg-blue-100 text-blue-800';
    default: return 'bg-gray-100 text-gray-800';
  }
}

export const getPriorityTextColor = (priority: TaskPriority) => {
  switch (priority) {
    case 'высокий': return 'text-red-800';
    case 'средний': return 'text-yellow-800';
    case 'низкий': return 'text-blue-800';
    default: return 'text-gray-800';
  }
}

export const getStatusBadgeColor = (status: TaskStatus) => {
  switch (status) {
    case 'завершена': return 'bg-green-100 text-green-800';
    case 'в процессе': return 'bg-purple-100 text-purple-800';
    case 'новая': return 'bg-indigo-100 text-indigo-800';
    default: return 'bg-gray-100 text-gray-800';
  }
}
