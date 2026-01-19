"use client"
import Image from "next/image"
import Link from "next/link"
import { Search, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

type ClientsHeaderProps = {
  activeTab: "home" | "chat" | "connections" | "settings"
}

export function ClientsHeader({ activeTab }: ClientsHeaderProps) {
  const getClass = (tab: string) =>
    `px-8 py-3 rounded-full font-medium transition ${
      activeTab === tab
        ? "bg-[#A7E55C] text-[#121212] font-semibold"
        : "text-white hover:bg-[#d6d6d6] hover:text-[#121212]"
    }`

  return (
    <header className="bg-[#121212] border-b border-[#d0d5dd]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Image src="/verita_logo_white.png" alt="Ethereal Design Logo" width={48} height={48} />
            <nav className="flex items-center gap-2 h-[54px] border border-[#888888] rounded-full px-2">
              <Link href="/dashboard" className={getClass("home")}>
                Home
              </Link>

              <Link href="/chat" className={getClass("chat")}>
                Chat
              </Link>

              <Link href="/connections" className={getClass("connections")}>
                Connections
              </Link>

              <Link href="/settings" className={getClass("settings")}>
                Settings
              </Link>
              <div className="h-10 w-10 rounded-full bg-[#88888866] border border-[#888888] flex items-center justify-center">
                <Image src="/notification-box.png" alt="icon" width={16} height={16} />
              </div>
              <div className="h-10 w-10 rounded-full bg-[#88888866] border border-[#888888] flex items-center justify-center">
                <Image src="/search_icon.png" alt="icon" width={16} height={16} />
              </div>

            </nav>
          </div>

          <div className="flex items-center gap-5 border border-[#888888] rounded-full h-13 pl-1 pr-3">
            
            <Image src="/select_client1.png" alt="icon" height={40} width={40}  />
            <Image src="/downarrow_header.png" alt="icon" height={20} width={20}  />
            
          </div>
        </div>
      </div>
    </header>
  )
}
