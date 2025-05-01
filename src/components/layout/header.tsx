
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-14 items-center">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            Дашборд
          </Link>
          <Link to="/tasks" className="text-blue-500 hover:text-blue-600">
            Задачи
          </Link>
          <Link to="/settings" className="text-gray-500 hover:text-gray-600">
            Настройки
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link to="/">
              <Icon name="RotateCcw" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
