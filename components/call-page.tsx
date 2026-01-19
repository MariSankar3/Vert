"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Calendar, Download, Filter, Search, Users } from "lucide-react"
import Link from "next/link"

export function CallPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
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
        <h1 className="text-2xl text-[#101828]">CALLS</h1>
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
        <Link href="/newcall">
          <Button className="h-10 px-6 mr-1 rounded-full bg-[#a7e55c] text-[#121212] font-semibold hover:bg-[#95d04a]">
            + New Call
          </Button>
        </Link>
      </div>
    </div>
  )
}
