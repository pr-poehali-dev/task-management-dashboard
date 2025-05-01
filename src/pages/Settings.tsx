
import { Header } from "@/components/layout/header"

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Настройки</h1>
          <p className="text-gray-500">Управление настройками приложения</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h2 className="text-lg font-medium">Настройки будут доступны в ближайшее время</h2>
        </div>
      </main>
    </div>
  )
}
