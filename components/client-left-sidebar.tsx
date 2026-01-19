"use client"

import { useState } from "react"
import { Users, DownloadIcon, UserIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Card } from "./ui/card"
import Link from "next/link"


const tabs = [
  { key: "userprofile", label: "User Profile", count: 24, href: "/client-profile" },
  { key: "calls", label: "CALLS", count: 24, href: "/clientsprofile-table" },
  { key: "risk", label: "Risk Profile", count: 24, href: "/risk-profile" },
  { key: "billing", label: "Billing", count: 24, href: "/billing" },
  { key: "activity", label: "Activity", count: 24, href: "/activity" },
];



export function ClientLeftSideBar() {
  const [activeTab, setActiveTab] = useState("all")

  function Section({ title }: { title: string }) {
    return <h3 className="text-lg font-semibold border-b pb-2">{title}</h3>;
  }

  function SubTitle({ title }: { title: string }) {
    return (
      <div className="flex items-center gap-2 mb-1">
        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
          <UserIcon />
        </div>
        <p className="font-semibold text-gray-700">{title}</p>
      </div>
    );
  }

  function InfoBox({ label, value }: { label: string; value: string }) {
    return (
      <div className="p-4 rounded-2xl bg-blue-50 text-sm border border-[#C6E5FF]">
        <p className="text-gray-500 text-xs">{label}</p>
        <p className="font-medium text-gray-700">{value}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between bg-black text-white px-4 h-14 rounded-full mx-4 md:mx-8 lg:mx-0">
          <div className="flex items-center gap-4">
            <button className="text-2xl h-10 w-10 rounded-full font-bold text-black bg-white">
              ←
            </button>
            <h1 className="text-base md:text-lg">CLIENT PROFILE</h1>
          </div>

        </div>
        <div className="flex items-center gap-4">
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
        </div>

      </div>
      <div className="space-y-6 mb-0 flex items-center justify-between">
        <div className="flex items-center gap-3 mt-2 mb-2 pl-3">
          {tabs.map((tab) => (
            <Link
              key={tab.key}
              href={tab.href}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "px-6 py-2 rounded-full font-medium border transition border-[#ccc] inline-flex items-center",
                activeTab === tab.key
                  ? "bg-[#a7e55c] text-[#121212]"
                  : "bg-[#fff] text-[#667085]"
              )}
            >
              {tab.label} <span className="ml-2 rounded-2xl bg-[#D6D6D6] p-1">{tab.count}</span>
            </Link>
          ))}
        </div>
      </div>


    </div>
  )
}
