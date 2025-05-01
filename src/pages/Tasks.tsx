
import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"
import { TaskCard } from "@/components/tasks/task-card"
import { tasks as allTasks, TaskStatus, TaskPriority } from "@/lib/utils"

export default function Tasks() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("Все статусы")
  const [priorityFilter, setPriorityFilter] = useState<string>("Все приоритеты")
  
  const filteredTasks = allTasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase()) || 
                          task.description.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "Все статусы" || task.status === statusFilter
    const matchesPriority = priorityFilter === "Все приоритеты" || task.priority === priorityFilter
    
    return matchesSearch && matchesStatus && matchesPriority
  })
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Мои задачи</h1>
            <p className="text-gray-500">Управляйте своими задачами, отслеживайте прогресс и достигайте целей</p>
          </div>
          <Button className="bg-blue-900 hover:bg-blue-800">
            <Icon name="Plus" size={18} className="mr-1" />
            Добавить задачу
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Input
              placeholder="Поиск задач..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
            <Icon 
              name="Search" 
              size={18} 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
            />
          </div>
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 min-w-[150px] justify-between"
              onClick={() => setStatusFilter("Все статусы")}
            >
              {statusFilter}
              <Icon name="ChevronDown" size={16} />
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 min-w-[150px] justify-between"
              onClick={() => setPriorityFilter("Все приоритеты")}
            >
              {priorityFilter}
              <Icon name="ChevronDown" size={16} />
            </Button>
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
