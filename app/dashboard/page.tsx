import type { Metadata } from "next"
import { ClientsHeader } from "@/components/clients-header"
import { DashboardCards } from "@/components/dashboard-cards"

export const metadata: Metadata = {
  title: "Clients - Ethereal Design",
  description: "Manage your clients",
}

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      <ClientsHeader />
      <main className="container mx-auto px-6 py-8">
        <DashboardCards title={""} value={""} label={""} growth={""} amount={""} />
      </main>
    </div>
  )
}
