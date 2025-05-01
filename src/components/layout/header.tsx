
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

export function Header() {
  const isTaskPage = window.location.pathname === '/tasks';
  
  return (
    <header className="border-b">
      <div className="container flex h-14 items-center">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="text-blue-500 hover:text-blue-600 text-sm">
            Дашборд
          </Link>
          <Link to="/tasks" className="text-blue-500 hover:text-blue-600 text-sm">
            Задачи
          </Link>
          <Link to="/settings" className="text-gray-500 hover:text-gray-600 text-sm">
            Настройки
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {isTaskPage && (
            <Button className="bg-black rounded-md text-white text-sm py-2 px-3 flex items-center gap-1">
              <Icon name="Plus" size={16} className="mr-1" />
              Добавить задачу
            </Button>
          )}
          <Button variant="outline" size="icon" className="ml-2 p-2 rounded-md border">
            <Icon name="RotateCcw" size={16} />
          </Button>
        </div>
      </div>
    </header>
  )
}
