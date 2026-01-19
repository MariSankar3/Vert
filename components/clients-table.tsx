"use client"

import { useState } from "react"
import { Calendar, Filter, Download, Search, ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"


const clients = [
  {
    id: "CL0001247",
    name: "Ethereal Design",
    status: "Active",
    riskScore: 39,
    riskCategory: "Rathi",
    email: "daniel@untitledui.com",
    phone: "+91 65432 10987",
  },
  {
    id: "CL0001234",
    name: "Olivia Rhye",
    status: "Active",
    riskScore: 30,
    riskCategory: "Rathi",
    email: "olivia@untitledui.com",
    phone: "+91 86574 79856",
  },
  {
    id: "CL0001235",
    name: "Ethan Hunt",
    status: "Review",
    riskScore: 45,
    riskCategory: "AtiRathi",
    email: "ethan@untitledui.com",
    phone: "+91 96574 29845",
  },
  {
    id: "CL0001236",
    name: "Sophia Turner",
    status: "KYC Pending",
    riskScore: 28,
    riskCategory: "Rathi",
    email: "sophia@untitledui.com",
    phone: "+91 87564 19854",
  },
  {
    id: "CL0001237",
    name: "Liam Smith",
    status: "Risk Profile",
    riskScore: 35,
    riskCategory: "Rathi",
    email: "liam@untitledui.com",
    phone: "+91 76584 78901",
  },
  {
    id: "CL0001238",
    name: "Emma Johnson",
    status: "Active",
    riskScore: 32,
    riskCategory: "AtiRathi",
    email: "emma@untitledui.com",
    phone: "+91 65473 45678",
  },
  {
    id: "CL0001239",
    name: "Noah Brown",
    status: "Review",
    riskScore: 41,
    riskCategory: "AtiRathi",
    email: "noah@untitledui.com",
    phone: "+91 54321 67890",
  },
  {
    id: "CL0001240",
    name: "Ava Wilson",
    status: "KYC Pending",
    riskScore: 27,
    riskCategory: "Rathi",
    email: "ava@untitledui.com",
    phone: "+91 43210 12345",
  },
  {
    id: "CL0001241",
    name: "Mason Davis",
    status: "Inactive",
    riskScore: 38,
    riskCategory: "AtiRathi",
    email: "mason@untitledui.com",
    phone: "+91 32109 34567",
  },
  {
    id: "CL0001242",
    name: "Isabella Moore",
    status: "Risk Profile",
    riskScore: 29,
    riskCategory: "Rathi",
    email: "isabella@untitledui.com",
    phone: "+91 21098 76543",
  },
  {
    id: "CL0001243",
    name: "James Taylor",
    status: "Active",
    riskScore: 37,
    riskCategory: "Rathi",
    email: "james@untitledui.com",
    phone: "+91 10987 65432",
  },
  {
    id: "CL0001244",
    name: "Mia Anderson",
    status: "KYC Pending",
    riskScore: 33,
    riskCategory: "Rathi",
    email: "mia@untitledui.com",
    phone: "+91 98765 43210",
  },
  {
    id: "CL0001245",
    name: "Alexander Thomas",
    status: "Inactive",
    riskScore: 42,
    riskCategory: "Rathi",
    email: "alexander@untitledui.com",
    phone: "+91 87654 32109",
  },
]

const statusColors: Record<string, string> = {
  Active: "bg-[#ecfdf3] text-[#067647] border-[#abefc6]",
  Review: "bg-[#eff8ff] text-[#175cd3] border-[#b2ddff]",
  "KYC Pending": "bg-[#fef6ee] text-[#b93815] border-[#f9dbaf]",
  "Risk Profile": "bg-[#fdf2fa] text-[#c11574] border-[#fcceee]",
  Inactive: "bg-[#fef3f2] text-[#b42318] border-[#fecdca]",
}

export function ClientsTable() {
  const [activeTab, setActiveTab] = useState("all")
  const filteredClients = clients.filter((client) => {
  if (activeTab === "all") return true
  if (activeTab === "active") return client.status === "Active"
  if (activeTab === "inactive") return client.status === "Inactive"
  if (activeTab === "review") return client.status === "Review"
  if (activeTab === "kycpending") return client.status === "KYC Pending"
  if (activeTab === "riskprofile") return client.status === "Risk Profile"
  return true
})
const counts = {
  all: clients.length,
  active: clients.filter(c => c.status === "Active").length,
  inactive: clients.filter(c => c.status === "Inactive").length,
  review: clients.filter(c => c.status === "Review").length,
  kycpending: clients.filter(c => c.status === "KYC Pending").length,
  riskprofile: clients.filter(c => c.status === "Risk Profile").length,
}

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-[#000] flex items-center justify-center">
            <Image
              src="/dashboard_icon4.png"
              alt="Dashboard Graph"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <div className="h-12 w-12 rounded-full bg-[#fff] flex items-center justify-center">

            <Users className="h-6 w-6 text-black" />

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
          <div className="h-12 w-12 rounded-full bg-[#fff] flex items-center justify-center">
            <Image
              src="/dashboard_icon2.png"
              alt="Dashboard Graph"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl text-[#101828]">CLIENTS</h1>
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
          <Link href="/newclients">
            <Button className="h-10 px-6 mr-1 rounded-full bg-[#a7e55c] text-[#121212] font-semibold hover:bg-[#95d04a]">
              + New Client
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-white space-y-6 mt-4 rounded-2xl border-1">
        <div className="flex items-center gap-3 mt-2 mb-2 pl-3">
          <button
            onClick={() => setActiveTab("all")}
            className={cn(
              "px-6 py-2 rounded-full font-medium transition",
              activeTab === "all" ? "bg-[#a7e55c] text-[#121212]" : "bg-[#e2e2e2] text-[#101828]",
            )}
          >
            All Clients <span className="ml-2 rounded-2xl bg-[#D6D6D6] p-1"> {counts.all}</span>
          </button>
          <button
            onClick={() => setActiveTab("active")}
            className={cn(
              "px-6 py-2 rounded-full font-medium border-1 transition border border-[#ccc]",
              activeTab === "active" ? "bg-[#a7e55c] text-[#121212]" : "bg-[#e2e2e2] text-[#667085]",
            )}
          >
            Active <span className="ml-2 rounded-2xl bg-[#D6D6D6] p-1"> {counts.active}</span>
          </button>
          <button
            onClick={() => setActiveTab("inactive")}
            className={cn(
              "px-6 py-2 rounded-full font-medium border-1 transition border border-[#ccc]",
              activeTab === "inactive" ? "bg-[#a7e55c] text-[#121212]" : "bg-[#e2e2e2] text-[#667085]",
            )}
          >
            In-Active <span className="ml-2 rounded-2xl bg-[#D6D6D6] p-1"> {counts.inactive}</span>
          </button>
          <button
            onClick={() => setActiveTab("review")}
            className={cn(
              "px-6 py-2 rounded-full font-medium border-1 transition border border-[#ccc]",
              activeTab === "review" ? "bg-[#a7e55c] text-[#121212]" : "bg-[#e2e2e2] text-[#667085]",
            )}
          >
            Review <span className="ml-2 rounded-2xl bg-[#D6D6D6] p-1"> {counts.review}</span>
          </button>
          <button
            onClick={() => setActiveTab("kycpending")}
            className={cn(
              "px-6 py-2 rounded-full font-medium border-1 transition border border-[#ccc]",
              activeTab === "kycpending" ? "bg-[#a7e55c] text-[#121212]" : "bg-[#e2e2e2] text-[#667085]",
            )}
          >
            KYC Pending <span className="ml-2 rounded-2xl bg-[#D6D6D6] p-1"> {counts.kycpending}</span>
          </button>
          <button
            onClick={() => setActiveTab("riskprofile")}
            className={cn(
              "px-6 py-2 rounded-full font-medium border-1 transition border border-[#ccc]",
              activeTab === "riskprofile" ? "bg-[#a7e55c] text-[#121212]" : "bg-[#e2e2e2] text-[#667085]",
            )}
          >
            Risk Profile
             <span className="ml-2 rounded-2xl bg-[#D6D6D6] p-1"> {counts.riskprofile}</span>
          </button>
        </div>
        <div className="bg-white rounded-2xl border border-[#eaecf0] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#eaecf0]">
                  <th className="text-left p-4 w-12">
                    <Checkbox />
                  </th>
                  <th className="text-left p-4 text-xs font-semibold text-[#101828] uppercase tracking-wider">
                    Client ID
                  </th>
                  <th className="text-left p-4 text-xs font-semibold text-[#101828] uppercase tracking-wider">Name</th>
                  <th className="text-left p-4 text-xs font-semibold text-[#101828] uppercase tracking-wider">Status</th>
                  <th className="text-left p-4 text-xs font-semibold text-[#101828] uppercase tracking-wider">
                    Risk Score & Category
                  </th>
                  <th className="text-left p-4 text-xs font-semibold text-[#101828] uppercase tracking-wider">
                    Email Address
                  </th>
                  <th className="text-left p-4 text-xs font-semibold text-[#101828] uppercase tracking-wider">
                    Phone Number
                  </th>
                  <th className="text-left p-4 text-xs font-semibold text-[#101828] uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((client, index) => (
                  <tr
                    key={client.id}
                    className={cn(
                      "border-b border-[#eaecf0] hover:bg-[#f9fafb] transition",
                      index === clients.length - 1 && "border-0",
                    )}
                  >
                    <td className="p-4">
                      <Checkbox />
                    </td>
                    <td className="p-4 text-sm text-[#101828]">{client.id}</td>
                    <td className="p-4 text-sm text-[#101828]">{client.name}</td>
                    <td className="p-4">
                      <span
                        className={cn(
                          "inline-flex items-center px-3 py-1 rounded-md text-xs font-medium border",
                          statusColors[client.status],
                        )}
                      >
                        {client.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm border-1 rounded-md px-2 text-[#101828]">{client.riskScore}</span>
                        <span className="text-sm border-1 rounded-md px-2 text-[#101828]">{client.riskCategory}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-[#475467]">{client.email}</td>
                    <td className="p-4 text-sm text-[#475467]">{client.phone}</td>
                    <td className="p-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-[#101828] hover:text-[#101828] hover:bg-[#f9fafb]"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
