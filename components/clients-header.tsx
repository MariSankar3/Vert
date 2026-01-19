import Image from "next/image"
import Link from "next/link"
import { Search, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ClientsHeader() {
  return (
    <header className="bg-[#121212] border-b border-[#d0d5dd]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Image src="/verita_logo_white.png" alt="Ethereal Design Logo" width={48} height={48} />
            <nav className="flex items-center gap-2 h-[54px] border border-[#888888] rounded-full px-2">
              <Link
                href="/home"
                className="px-8 py-3 rounded-full bg-[#A7E55C] text-[#121212] font-semibold hover:bg-[#95d04a] transition"
              >
                Home
              </Link>
              <Link
                href="/chat"
                className="px-8 py-3 rounded-full text-[#FFFFFF] font-medium hover:bg-[#d6d6d6] hover:text-[#121212] transition"
              >
                Chat
              </Link>
              <Link
                href="/connections"
                className="px-8 py-3 rounded-full text-[#FFFFFF] font-medium hover:bg-[#d6d6d6] hover:text-[#121212] transition"
              >
                Connections
              </Link>
              <Link
                href="/settings"
                className="px-8 py-3 rounded-full text-[#FFFFFF] font-medium hover:bg-[#d6d6d6] hover:text-[#121212] transition"
              >
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
