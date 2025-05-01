
import { useState } from "react"
import { Header } from "@/components/layout/header"
import { TaskCard } from "@/components/tasks/task-card"
import { Input } from "@/components/ui/input"
import { tasks } from "@/lib/utils"
import Icon from "@/components/ui/icon"

export default function Tasks() {
  const [searchQuery, setSearchQuery] = useState("")
  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Мои задачи</h1>
          <p className="text-gray-500">Управляйте своими задачами, отслеживайте прогресс и достигайте целей</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="w-full md:w-2/3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icon name="Search" className="text-gray-400" size={20} />
              </div>
              <Input
                type="search"
                placeholder="Поиск задач..."
                className="pl-10 py-3 bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-4 w-full md:w-1/3">
            <select className="w-full bg-white border border-gray-200 rounded-md px-3 py-2 text-sm">
              <option>Все статусы</option>
              <option>Новая</option>
              <option>В процессе</option>
              <option>Завершена</option>
            </select>
            <select className="w-full bg-white border border-gray-200 rounded-md px-3 py-2 text-sm">
              <option>Все приоритеты</option>
              <option>Высокий</option>
              <option>Средний</option>
              <option>Низкий</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </main>
    </div>
  )
}
