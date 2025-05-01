
import { Header } from "@/components/layout/header"

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Настройки</h1>
          <p className="text-gray-500">Управление настройками профиля и системы</p>
        </div>
        
        <div className="rounded-lg border bg-white p-6">
          <p className="text-gray-500">Страница настроек находится в разработке.</p>
        </div>
      </main>
    </div>
  )
}
