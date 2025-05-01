
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from 'recharts'
import { Task, getDaysLeft } from '@/lib/utils'

interface DeadlinesChartProps {
  tasks: Task[]
}

export function DeadlinesChart({ tasks }: DeadlinesChartProps) {
  // Сортируем задачи по близости дедлайна (сначала ближайшие)
  const sortedTasks = [...tasks]
    .filter(task => task.status !== 'завершена')
    .sort((a, b) => {
      const daysLeftA = getDaysLeft(a.deadline);
      const daysLeftB = getDaysLeft(b.deadline);
      return daysLeftA - daysLeftB;
    })
    .slice(0, 5); // Берем 5 ближайших задач

  const data = sortedTasks.map(task => {
    const daysLeft = getDaysLeft(task.deadline);
    return {
      name: task.title,
      value: daysLeft,
      daysLeft,
      priority: task.priority
    };
  });

  const getBarColor = (priority: string) => {
    switch (priority) {
      case 'высокий': return '#ef4444';
      case 'средний': return '#eab308';
      case 'низкий': return '#3b82f6';
      default: return '#94a3b8';
    }
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground p-6">
      <div className="space-y-1">
        <h3 className="text-lg font-medium">Горящие сроки</h3>
        <p className="text-sm text-muted-foreground">Задачи с ближайшими дедлайнами</p>
      </div>
      <div className="mt-4 h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 100,
              bottom: 5,
            }}
          >
            <XAxis type="number" domain={[0, 30]} />
            <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={100} />
            <Tooltip
              formatter={(value) => [`${value} дней`, 'Дней до дедлайна']}
              labelFormatter={(label) => `Задача: ${label}`}
            />
            <Bar dataKey="value" minPointSize={2} radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.priority)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <span className="text-sm">Высокий</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="text-sm">Средний</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-500" />
          <span className="text-sm">Низкий</span>
        </div>
      </div>
    </div>
  );
}
