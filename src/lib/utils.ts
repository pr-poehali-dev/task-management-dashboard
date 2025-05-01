
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

export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-');
  return `${day}.${month}.${year}`;
}

export function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'высокий':
      return 'bg-red-100 text-red-800';
    case 'средний':
      return 'bg-yellow-100 text-yellow-800';
    case 'низкий':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export function getStatusBadgeColor(status: string): string {
  switch (status) {
    case 'завершена':
      return 'bg-green-100 text-green-800';
    case 'в процессе':
      return 'bg-purple-100 text-purple-800';
    case 'новая':
      return 'bg-indigo-100 text-indigo-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export function getDaysLeft(deadline: string): number {
  const [year, month, day] = deadline.split('-').map(Number);
  const deadlineDate = new Date(year, month - 1, day);
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const diffTime = deadlineDate.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
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
