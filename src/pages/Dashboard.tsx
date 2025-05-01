
import Icon from "@/components/ui/icon"
import { Header } from "@/components/layout/header"
import { StatusCard } from "@/components/dashboard/status-card"
import { ProgressCard } from "@/components/dashboard/progress-card"
import { DeadlinesChart } from "@/components/dashboard/deadlines-chart"
import { tasks } from "@/lib/utils"

export default function Dashboard() {
  const completedTasks = tasks.filter(task => task.status === 'завершена').length
  const inProgressTasks = tasks.filter(task => task.status === 'в процессе').length  
  const newTasks = tasks.filter(task => task.status === 'новая').length
  const totalTasks = tasks.length
  const percentCompleted = Math.round((completedTasks / totalTasks) * 100)
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Дашборд</h1>
          <p className="text-gray-500">Обзор ваших задач и текущей активности</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <StatusCard
            title="Завершено"
            count={completedTasks}
            description="задач выполнено"
            icon={<Icon name="CheckCircle" className="text-green-500" />}
          />
          <StatusCard
            title="В процессе"
            count={inProgressTasks}
            description="задач выполняются"
            icon={<Icon name="Clock" className="text-orange-500" />}
          />
          <StatusCard
            title="Новые"
            count={newTasks}
            description="задач не начаты"
            icon={<Icon name="ListTodo" className="text-blue-500" />}
          />
        </div>
        
        <div className="grid gap-6 mt-6 md:grid-cols-2">
          <ProgressCard
            title="Общий прогресс выполнения"
            description="Процент выполненных задач от общего количества"
            percentage={percentCompleted}
            total={totalTasks}
            completed={completedTasks}
            remaining={totalTasks - completedTasks}
          />
          <DeadlinesChart tasks={tasks} />
        </div>
      </main>
    </div>
  )
}
