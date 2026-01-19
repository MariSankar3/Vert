"use client"
import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export function SignInForm() {
  const [showtypePassword, setShowtypePassword] = useState(false)

  return (
    <div className="bg-[#121212] flex items-center justify-center p-8 lg:p-16">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-white">Welcome!</h2>
          <p className="text-[#FFFFFF] leading-relaxed">
            Upgrade to zero-friction compliance. Easy records, simple audits
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex rounded-full bg-white p-1">
            <button className="flex-1 rounded-full bg-[#DBF900] text-black font-semibold py-3 transition">
              Signin
            </button>
            <Link
              href="/signup"
              className="flex-1 rounded-full text-[#121212] font-semibold py-3 text-center hover:bg-[#f6f6f6] transition"
            >
              Signup
            </Link>
          </div>

          <div className="space-y-4">
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

              <div className="h-20 rounded-full bg-white border border-[#E0E0E0] px-20 flex flex-col justify-center">

                <label className="text-sm text-[#888888] leading-none">Password</label>

                <input
                  type={showtypePassword ? "text" : "password"}
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
                onClick={() => setShowtypePassword(!showtypePassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888888] hover:text-[#121212]"
              >
                {showtypePassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>

            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="terms"
                className="border-white data-[state=checked]:bg-[#a7e55c] data-[state=checked]:border-[#a7e55c]"
              />
              <label htmlFor="terms" className="text-sm text-white cursor-pointer">
                Agree all <span className="text-[#4454DD] underline">T&C</span>
              </label>
            </div>

            <Button className="w-full h-14 rounded-full bg-[#DBF900] text-black font-semibold text-lg hover:bg-[#95d04a]">
              Continue
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#FFFFFF]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-[#FFFFFF] bg-[#121212]">or Continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-14 rounded-lg bg-white hover:bg-[#f6f6f6] border-0">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </Button>
              <Button variant="outline" className="h-14 rounded-lg bg-white hover:bg-[#f6f6f6] border-0">
                <svg className="h-6 w-6" fill="#000000" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
