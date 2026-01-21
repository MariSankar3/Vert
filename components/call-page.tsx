"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Calendar, Download, Filter, Search, Users } from "lucide-react"
import Link from "next/link"

  type ActivePage = "dashboard" | "clients" | "settings" | "calls"
export function CallPage({
  name,
  active,
}: {
  name: string
  active: ActivePage
}) {

  const [showPassword, setShowPassword] = useState(false)
  const isActive = (page: ActivePage) =>
  active === page
    ? "bg-black"
    : "bg-white"

const iconInvert = (page: ActivePage) =>
  active === page ? "invert" : ""

const today = new Date()
const next8Days = new Date()

next8Days.setDate(today.getDate() - 8)

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-GB") // DD/MM/YYYY

  return (
    
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
      

        <Link href="/dashboard">
  <div className={`h-12 w-12 rounded-full bg-[#000] flex items-center justify-center ${isActive("dashboard")}`}>
    <Image
      src="/dashboard_icon4.png"
      alt="Dashboard Graph"
      width={24}
      height={24}
      className={` object-contain ${iconInvert("dashboard")}`}
    />
  </div>
</Link>


         <Link href="/clients">
      <div className={`h-12 w-12 rounded-full bg-[#000] flex items-center justify-center ${isActive("clients")}`}>

       <Users className={`h-6 w-6 text-black ${iconInvert("clients")}`} />

        </div>
        </Link>


        <Link href="/">
        <div className="h-12 w-12 rounded-full bg-[#fff] flex items-center justify-center">
          <Image
            src="/dashboard_icon3.png"
            alt="Dashboard Graph"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
        </Link>
        <Link href="/calls">
  <div className={`h-12 w-12 rounded-full flex items-center justify-center ${isActive("calls")}`}>
    <Image
      src="/dashboard_icon2.png"
      alt="Calls"
      width={24}
      height={24}
      className={`object-contain ${iconInvert("calls")}`}
    />
  </div>
</Link>

        <h1 className="text-2xl text-[#101828]">{name}</h1>
      </div>

      <div className="flex items-center gap-3 bg-[#000] h-[48px] rounded-full">
        <Button
          variant="outline"
          className="h-10 px-6 rounded-full ml-1 bg-[#121212] border-1 text-white font-medium"
        >
          <Calendar className="h-4 w-4 mr-2" />
        <span>
        {formatDate(next8Days)} - {formatDate(today)}
    </span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-11 w-11 rounded-full bg-[#121212] border-1 text-white"
        >
          <Filter className="h-5 w-5" />
        </Button>
        <Button
  variant="outline"
  size="icon"
  className="group h-11 w-11 rounded-full bg-[#121212] border-1 text-white hover:bg-white"
>
  <Image
    src="/dashboard_icon6.png"
    alt="Dashboard Graph"
    width={16}
    height={18}
    className="object-contain transition-all duration-200 group-hover:invert group-hover:scale-110"
  />
</Button>

        <Button
          variant="outline"
          size="icon"
          className="h-11 w-11 rounded-full bg-[#121212] border-1 text-white "
        >
          <Download className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-11 w-11 rounded-full bg-[#121212] border-1 text-white "
        >
          <Search className="h-5 w-5" />
        </Button>
        <Link href="/newcall">
          <Button className="h-10 px-6 mr-1 rounded-full bg-[#a7e55c] text-[#121212] font-semibold hover:bg-[#95d04a]">
            + New Call
          </Button>
        </Link>
      </div>
    </div>
  )
}
