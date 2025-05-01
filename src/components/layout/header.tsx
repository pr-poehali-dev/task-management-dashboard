
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Header() {
  return (
    <header className="border-b bg-white">
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
          {window.location.pathname === '/tasks' && (
            <Button 
              className="bg-black text-white rounded-md text-sm flex items-center gap-1.5"
              size="sm"
            >
              <Icon name="Plus" size={16} />
              Добавить задачу
            </Button>
          )}
          <Button variant="outline" size="icon" className="ml-2">
            <Icon name="RotateCcw" size={18} />
          </Button>
        </div>
      </div>
    </header>
  )
}
