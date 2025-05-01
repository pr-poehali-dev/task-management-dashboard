
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Страница не найдена</p>
      <Button asChild>
        <Link to="/">Вернуться на главную</Link>
      </Button>
    </div>
  )
}
