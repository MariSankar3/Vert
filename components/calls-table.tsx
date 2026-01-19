"use client"

import { useState } from "react"
import { Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const clients = [
  {
    call: "Buy",
    name: "Sensex 82500 CE",
    version: "1",
    entryprice: 92.00,
    targetprice: "120.00",
    stoploss: "78.00",
    riskratio: "1:2.2",
    timedate: "06-Oct-2025, 09:25 AM",
    validity: "Intraday",
    shared: "100",
    status: "Hit",
  },
  {
    call: "Sell",
    name: "Sensex 82500 CE",
    version: "1",
    entryprice: 92.00,
    targetprice: "120.00",
    stoploss: "78.00",
    riskratio: "1:2.2",
    timedate: "06-Oct-2025, 09:25 AM",
    validity: "Intraday",
    shared: "100",
    status: "Hit",
  },
  {
    call: "Buy",
    name: "Sensex 82500 CE",
    version: "2",
    entryprice: 92.00,
    targetprice: "120.00",
    stoploss: "78.00",
    riskratio: "1:2.2",
    timedate: "06-Oct-2025, 09:25 AM",
    validity: "Intraday",
    shared: "100",
    status: "Failed",
  },
  {
    call: "Sell",
    name: "Sensex 82500 CE",
    version: "1",
    entryprice: 92.00,
    targetprice: "120.00",
    stoploss: "78.00",
    riskratio: "1:2.2",
    timedate: "06-Oct-2025, 09:25 AM",
    validity: "Intraday",
    shared: "100",
    status: "Hit",
  },
  {
    call: "Buy",
    name: "Sensex 82500 CE",
    version: "1",
    entryprice: 92.00,
    targetprice: "120.00",
    stoploss: "78.00",
    riskratio: "1:2.2",
    timedate: "06-Oct-2025, 09:25 AM",
    validity: "Intraday",
    shared: "100",
    status: "Failed",
  },

]

const statusColors: Record<string, string> = {
  Active: "bg-[#ecfdf3] text-[#067647] border-[#abefc6]",
  Review: "bg-[#eff8ff] text-[#175cd3] border-[#b2ddff]",
  "KYC Pending": "bg-[#fef6ee] text-[#b93815] border-[#f9dbaf]",
  "Risk Profile": "bg-[#fdf2fa] text-[#c11574] border-[#fcceee]",
  Inactive: "bg-[#fef3f2] text-[#b42318] border-[#fecdca]",
}

export function CallsTable() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="bg-white space-y-6 mt-4 rounded-2xl border-1">
     

      <div className="flex items-center gap-3 mt-2 mb-2 pl-3">
        <button
          onClick={() => setActiveTab("all")}
          className={cn(
            "px-6 py-2 rounded-full font-medium transition",
            activeTab === "all" ? "bg-[#a7e55c] text-[#121212]" : "bg-[#e2e2e2] text-[#667085]",
          )}
        >
          Live Calls <span className="ml-2 rounded-2xl bg-[#586e3d85] p-1">24</span>
        </button>
        <button
          onClick={() => setActiveTab("active")}
          className={cn(
            "px-6 py-2 rounded-full font-medium border-1 transition border border-[#ccc]",
            activeTab === "active" ? "bg-[#a7e55c] text-[#121212]" : "bg-[#e2e2e2] text-[#667085]",
          )}
        >
          Active <span className="ml-2 rounded-2xl bg-[#D6D6D6] p-1">24</span>
        </button>
        <button
          onClick={() => setActiveTab("inactive")}
          className={cn(
            "px-6 py-2 rounded-full font-medium border-1 transition border border-[#ccc]",
            activeTab === "inactive" ? "bg-[#a7e55c] text-[#121212]" : "bg-[#e2e2e2] text-[#667085]",
          )}
        >
          In-Active <span className="ml-2 rounded-2xl bg-[#D6D6D6] p-1">24</span>
        </button>
        <button
          onClick={() => setActiveTab("inactive")}
          className={cn(
            "px-6 py-2 rounded-full font-medium border-1 transition border border-[#ccc]",
            activeTab === "inactive" ? "bg-[#a7e55c] text-[#121212]" : "bg-[#e2e2e2] text-[#667085]",
          )}
        >
          Failed <span className="ml-2 rounded-2xl bg-[#D6D6D6] p-1">24</span>
        </button>
      </div>

      <div className="border border-[#eaecf0] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                
              </tr>
              <tr className="border-b border-[#eaecf0]">
                
                <th className="text-left p-4 text-xs font-semibold text-[#667085] uppercase tracking-wider">
                  Call Type
                </th>
                <th className="text-left p-4 text-xs font-semibold text-[#667085] uppercase tracking-wider">Stock Name</th>
                <th className="text-left p-4 text-xs font-semibold text-[#667085] uppercase tracking-wider">Versions</th>
                <th className="text-left p-4 text-xs font-semibold text-[#667085] uppercase tracking-wider">
                  Entry Price
                </th>
                <th className="text-left p-4 text-xs font-semibold text-[#667085] uppercase tracking-wider">
                  Traget Price
                </th>
                <th className="text-left p-4 text-xs font-semibold text-[#667085] uppercase tracking-wider">
                  Stop Loss
                </th>
                <th className="text-left p-4 text-xs font-semibold text-[#667085] uppercase tracking-wider">
                  Risk Ratio
                </th>
                <th className="text-left p-4 text-xs font-semibold text-[#667085] uppercase tracking-wider">
                  Call Time / Date
                </th>
                <th className="text-left p-4 text-xs font-semibold text-[#667085] uppercase tracking-wider">
                  Validity
                </th>
                <th className="text-left p-4 text-xs font-semibold text-[#667085] uppercase tracking-wider">
                  Shared
                </th>
                <th className="text-left p-4 text-xs font-semibold text-[#667085] uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left p-4 text-xs font-semibold text-[#667085] uppercase tracking-wider">More</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr
                  // key={client.id}
                  className={cn(
                    "border-b border-[#eaecf0] hover:bg-[#f9fafb] transition",
                    index === clients.length - 1 && "border-0",
                  )}
                >

                  <td className="p-4 text-sm font-semibold text-[#34C759]">{client.call}</td>
                  <td className="p-4 text-sm font-medium text-[#101828]">{client.name}</td>
                  <td className="p-4 text-sm font-medium text-[#101828]">{client.version}</td>
                  <td className="p-4 text-sm">{client.entryprice}</td>
                  <td className="p-4 text-sm">{client.targetprice}</td>
                  <td className="p-4 text-sm">{client.stoploss}</td>
                  <td className="p-4 text-sm">{client.riskratio}</td>
                  <td className="p-4 text-sm">{client.timedate}</td>
                  <td className="p-4 text-sm">{client.validity}</td>
                  <td className="p-4 text-sm">{client.shared}</td>
                  <td className="p-4 text-sm font-semibold text-[#FF3B30]">{client.status}</td>
                  <td className="p-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-[#667085] hover:text-[#101828] hover:bg-[#f9fafb]"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
