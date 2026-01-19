"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock, FileText, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showRetypePassword, setShowRetypePassword] = useState(false)
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  return (
    <div className="bg-[#121212] flex items-center justify-center p-8 lg:p-16 lg:h-screen lg:overflow-y-auto">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 lg:mt-100">
          <h2 className="text-4xl font-bold text-white">Welcome!</h2>
          <p className="text-[#FFFFFF] leading-relaxed">
            Upgrade to zero-friction compliance. Easy records, simple audits
          </p>
        </div> 

        <div className="space-y-6">
          <div className="flex rounded-full bg-white p-1">
            <Link
              href="/signin"
              className="flex-1 rounded-full text-[#121212] font-semibold py-3 text-center transition hover:bg-[#f6f6f6]"
            >
              Signin
            </Link>
            <button className="flex-1 rounded-full bg-[#DBF900] text-black font-semibold py-3 transition">
              Signup
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setSelectedRole("research")}
              className={cn(
                "p-6 rounded-3xl border-2 transition-all text-left",
                selectedRole === "research" ? "bg-white border-white" : "bg-white border-[#344054]",
              )}
            >
              <div className="flex items-start justify-between mb-3">
                <FileText
                  className={cn("h-6 w-6", selectedRole === "research" ? "text-[#121212]" : "text-[#888888]")}
                />
                <div
                  className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center",
                    selectedRole === "research" ? "border-[#a7e55c] bg-[#a7e55c]" : "border-[#888888]",
                  )}
                >
                  {selectedRole === "research" && (
                    <svg className="w-4 h-4 text-[#121212]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <p
                className={cn("text-sm font-medium", selectedRole === "research" ? "text-[#121212]" : "text-[#888888]")}
              >
                Research
                <br />
                Analysts
              </p>
            </button>

            <button
              onClick={() => setSelectedRole("investment")}
              className={cn(
                "p-6 rounded-3xl border-2 transition-all text-left",
                selectedRole === "investment" ? "bg-white border-white" : "bg-white border-[#344054]",
              )}
            >
              <div className="flex items-start justify-between mb-3">
                <User className={cn("h-6 w-6", selectedRole === "investment" ? "text-[#121212]" : "text-[#888888]")} />
                <div
                  className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center",
                    selectedRole === "investment" ? "border-[#a7e55c] bg-[#a7e55c]" : "border-[#888888]",
                  )}
                >
                  {selectedRole === "investment" && (
                    <svg className="w-4 h-4 text-[#121212]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <p
                className={cn(
                  "text-sm font-medium",
                  selectedRole === "investment" ? "text-[#121212]" : "text-[#888888]",
                )}
              >
                Investment
                <br />
                Advisor
              </p>
            </button>
          </div>

          <div className="space-y-4">
            <div className="relative mt-8">
              <div className="h-20 rounded-full bg-white pl-18 border border-[#E0E0E0] px-16 flex flex-col justify-center">

                <label className="text-sm text-[#888888] leading-none">SEBI Registration Number</label>


                <input
                  type="email"
                  className="text-base text-[#121212] placeholder:text-[#cccccc] outline-none"
                  placeholder="INA0000xxxxx or INH0000xxxxx"
                />
              </div>


              <div className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center h-full">
                <Mail className="h-6 w-6 text-[#616161]" />
                <div className="h-10 border-r border-[#A8A8A8] ml-3"></div>
              </div>
            </div>
            <div className="relative mt-8">
              <div className="h-20 rounded-full bg-white pl-18 border border-[#E0E0E0] px-16 flex flex-col justify-center">

                <label className="text-sm text-[#888888] leading-none">Email</label>


                <input
                  type="email"
                  className="text-base text-[#121212] placeholder:text-[#cccccc] outline-none"
                  placeholder="x.xxx@domainname.com"
                />
              </div>


              <div className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center h-full">
                <Mail className="h-6 w-6 text-[#616161]" />
                <div className="h-10 border-r border-[#A8A8A8] ml-3"></div>
              </div>
            </div>
            <div className="relative mt-8">
              <div className="h-20 rounded-full bg-white pl-18 border border-[#E0E0E0] px-16 flex flex-col justify-center">

                <label className="text-sm text-[#888888] leading-none">Mobile Number</label>


                <input
                  type="email"
                  className="text-base text-[#121212] placeholder:text-[#cccccc] outline-none"
                  placeholder="91761 12345"
                />
              </div>


              <div className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center h-full">
                <Mail className="h-6 w-6 text-[#616161]" />
                <div className="h-10 border-r border-[#A8A8A8] ml-3"></div>
              </div>
            </div>
            <div className="relative mt-8">
              <div className="h-20 rounded-full bg-white pl-18 border border-[#E0E0E0] px-16 flex flex-col justify-center">

                <label className="text-sm text-[#888888] leading-none">Mobile Number</label>


                <input
                  type="email"
                  className="text-base text-[#121212] placeholder:text-[#cccccc] outline-none"
                  placeholder="91761 12345"
                />
              </div>


              <div className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center h-full">
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                <div className="h-10 border-r border-[#A8A8A8] ml-3"></div>
              </div>
            </div>


            <div className="relative mt-8">

              <div className="h-20 rounded-full bg-white border border-[#E0E0E0] px-20 flex flex-col justify-center">

                <label className="text-sm text-[#888888] leading-none">Password</label>

                <input
                  type={showRetypePassword ? "text" : "password"}
                  className="text-base text-[#121212] placeholder:text-[#cccccc] outline-none"
                  placeholder="Enter Password"
                />
              </div>

              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center h-full">
                <Lock className="h-6 w-6 text-[#616161]" />
                <div className="h-10 border-r border-[#A8A8A8] ml-3"></div>
              </div>

              <button
                type="button"
                onClick={() => setShowRetypePassword(!showRetypePassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888888] hover:text-[#121212]"
              >
                {showRetypePassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>

            </div>

            <div className="relative mt-8">

              <div className="h-20 rounded-full bg-white border border-[#E0E0E0] px-20 flex flex-col justify-center">

                <label className="text-sm text-[#888888] leading-none">Retype Password</label>

                <input
                  type={showRetypePassword ? "text" : "password"}
                  className="text-base text-[#121212] placeholder:text-[#cccccc] outline-none"
                  placeholder="Retype Password"
                />
              </div>

              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center h-full">
                <Lock className="h-6 w-6 text-[#616161]" />
                <div className="h-10 border-r border-[#A8A8A8] ml-3"></div>
              </div>

              <button
                type="button"
                onClick={() => setShowRetypePassword(!showRetypePassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888888] hover:text-[#121212]"
              >
                {showRetypePassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>

            </div>


            <div className="flex items-center gap-2 mt-8">
              <Checkbox
                id="terms"
                className="border-white data-[state=checked]:bg-[#a7e55c] data-[state=checked]:border-[#a7e55c]"
              />
              <label htmlFor="terms" className="text-sm text-white cursor-pointer">
                Agree all <span className="text-[#4454DD] underline-none">T&C</span>
              </label>
            </div>
          </div>
          
        </div>
            <Button className="w-full h-14 rounded-full bg-[#DBF900] text-black font-semibold text-lg hover:bg-[#95d04a]">
              Continue
            </Button>
      </div>
    </div>
  )
}
