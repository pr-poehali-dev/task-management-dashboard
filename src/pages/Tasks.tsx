
import { useState } from "react"
import { Header } from "@/components/layout/header"
import { TaskCard } from "@/components/tasks/task-card"
import { Input } from "@/components/ui/input"
import { tasks } from "@/lib/utils"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

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
          <div className="w-full md:w-1/2 lg:w-3/5">
            <div className="relative">
              <Icon 
                name="Search" 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                size={18}
              />
              <Input
                placeholder="Поиск задач..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-2 border-gray-200 rounded-md w-full"
              />
            </div>
          </div>
          <div className="flex gap-4 w-full md:w-1/2 lg:w-2/5">
            <div className="relative w-full">
              <Button variant="outline" className="text-sm w-full justify-between border-gray-200 bg-white">
                <span>Все статусы</span>
                <Icon name="ChevronDown" size={16} />
              </Button>
            </div>
            <div className="relative w-full">
              <Button variant="outline" className="text-sm w-full justify-between border-gray-200 bg-white">
                <span>Все приоритеты</span>
                <Icon name="ChevronDown" size={16} />
              </Button>
            </div>
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
