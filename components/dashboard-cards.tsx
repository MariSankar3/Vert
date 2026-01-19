import Image from "next/image"
import { Button } from "./ui/button"
import { Calendar, Download, Filter, Search, Users } from "lucide-react"
import Link from "next/link"

interface DashboardCardProps {
  title: string
  value: string
  label: string
  growth: string
  amount: string
}

export function DashboardCards({
}: DashboardCardProps) {
  return (


    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-[#fff] flex items-center justify-center">
            <Users className="h-6 w-6 text-black" />
          </div>
          <div className="h-12 w-12 rounded-full bg-[#fff] flex items-center justify-center">
            <Image
              src="/dashboard_icon2.png"
              alt="Dashboard Graph"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <div className="h-12 w-12 rounded-full bg-[#fff] flex items-center justify-center">
            <Image
              src="/dashboard_icon3.png"
              alt="Dashboard Graph"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <div className="h-12 w-12 rounded-full bg-[#121212] flex items-center justify-center">
            <Image
              src="/dashboard_icon4.png"
              alt="Dashboard Graph"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl text-[#101828]">DASHBOARD</h1>
        </div>

        <div className="flex items-center gap-3 bg-[#000] h-[48px] rounded-full">
          <Button
            variant="outline"
            className="h-10 px-6 rounded-full ml-1 bg-[#121212] border-1 text-white font-medium hover:bg-[#1d2939]"
          >
            <Calendar className="h-4 w-4 mr-2" />
            22/10/25 - 30/10/25
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-full bg-[#121212] border-1 text-white hover:bg-[#1d2939]"
          >
            <Filter className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-full bg-[#121212] border-1 text-white hover:bg-[#1d2939]"
          >
            <Image
              src="/dashboard_icon6.png"
              alt="Dashboard Graph"
              width={16}
              height={18}
              className="object-contain"
            />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-full bg-[#121212] border-1 text-white hover:bg-[#1d2939]"
          >
            <Download className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-full bg-[#121212] border-1 text-white hover:bg-[#1d2939]"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Link href="/clients">
            <Button className="h-10 px-6 mr-1 rounded-full bg-[#a7e55c] text-[#121212] font-semibold hover:bg-[#95d04a]">
              + Add Client
            </Button>
          </Link>
        </div>
      </div>
      <h1 className="font-medium text-2xl">DASHBOARD</h1>
      <div className="flex gap-8 items-center">
        <div className="flex items-center gap-2">
          <p className="text-3xl font-semibold">231</p>
          <p className="text-gray-500">All Clients</p>
          <span className="text-green-600 bg-green-100 text-xs px-2 py-1 rounded-full flex items-center">
            3 ↑
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-3xl font-semibold">11</p>
          <p className="text-gray-500">New Clients</p>
          <span className="text-green-600 bg-green-100 text-xs px-2 py-1 rounded-full flex items-center">
            3 ↑
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-3xl font-semibold">123</p>
          <p className="text-gray-500">Active Clients</p>
          <span className="text-green-600 bg-green-100 text-xs px-2 py-1 rounded-full flex items-center">
            3 ↑
          </span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100 w-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium">Revenue</h2>
            <button className="text-gray-400">⋮</button>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-3xl font-semibold mb-3">$2.4 M</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-green-600 text-sm font-medium">↑ 40%</span>
                <span className="text-gray-500 text-sm">this month</span>
              </div>
            </div>
            <Image
              src="/dashboard_graph.png"
              alt="Dashboard Graph"
              width={128}
              height={64}
              className="object-contain"
            />
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100 w-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium">Expenses</h2>
            <button className="text-gray-400">⋮</button>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-3xl font-semibold mb-3">$1.5 M</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-green-600 text-sm font-medium">↑ 25%</span>
                <span className="text-gray-500 text-sm">this month</span>
              </div>
            </div>
            <Image
              src="/dashboard_graph.png"
              alt="Dashboard Graph"
              width={128}
              height={64}
              className="object-contain"
            />
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100 w-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium">Profit</h2>
            <button className="text-gray-400">⋮</button>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-3xl font-semibold mb-3">$900 K</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-green-600 text-sm font-medium">↑ 15%</span>
                <span className="text-gray-500 text-sm">this month</span>
              </div>
            </div>
            <Image
              src="/dashboard_graph.png"
              alt="Dashboard Graph"
              width={128}
              height={64}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
