
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from 'recharts'
import { Task, getDaysLeft } from '@/lib/utils'

interface DeadlinesChartProps {
  tasks: Task[]
}

export function DeadlinesChart({ tasks }: DeadlinesChartProps) {
  // Отфильтровываем только незавершенные задачи
  const activeTasks = tasks.filter(task => task.status !== 'завершена');
  
  // Группируем задачи по срокам
  const todayTasks = activeTasks.filter(task => getDaysLeft(task.deadline) <= 1).length;
  const weekTasks = activeTasks.filter(task => getDaysLeft(task.deadline) > 1 && getDaysLeft(task.deadline) <= 7).length;
  const laterTasks = activeTasks.filter(task => getDaysLeft(task.deadline) > 7).length;

  const data = [
    {
      name: 'Сегодня-завтра',
      value: todayTasks,
      color: '#ef4444' // красный
    },
    {
      name: 'На этой неделе',
      value: weekTasks,
      color: '#eab308' // желтый
    },
    {
      name: 'Позже',
      value: laterTasks,
      color: '#3b82f6' // синий
    }
  ];

  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="space-y-1">
        <h3 className="text-lg font-medium">Горящие сроки</h3>
        <p className="text-sm text-gray-500">Распределение задач по срокам выполнения</p>
      </div>
      <div className="mt-4 h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 120,
              bottom: 5,
            }}
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={120} />
            <Tooltip
              formatter={(value) => [`${value} задач`, '']}
              labelFormatter={(label) => `Срок: ${label}`}
            />
            <Bar dataKey="value" minPointSize={2} radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <span className="text-sm">Сегодня-завтра</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="text-sm">На этой неделе</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-500" />
          <span className="text-sm">Позже</span>
        </div>
      </div>
    </div>
  );
}
