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
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [formData, setFormData] = useState({
  sebi: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
})

const [errors, setErrors] = useState<Record<string, string>>({})
const handleChange = (key: string, value: string) => {
  setFormData(prev => ({ ...prev, [key]: value }))
  setErrors(prev => ({ ...prev, [key]: "" })) // clear error on typing
}
const validateForm = () => {
  const newErrors: Record<string, string> = {}

  if (!/^(INA|INH)\d{9}$/.test(formData.sebi)) {
    newErrors.sebi = "Invalid SEBI number (INA/INH + 9 digits)"
  }

  if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
    newErrors.email = "Enter a valid Gmail address"
  }

  if (!/^[6-9]\d{9}$/.test(formData.phone)) {
    newErrors.phone = "Enter valid 10-digit mobile number"
  }
  


  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(formData.password)) {
    newErrors.password =
      "Password must be 8+ chars, include uppercase, lowercase & number"
  }

  if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match"
  }

  if (!selectedRole) {
    newErrors.role = "Please select a role"
  }

  if (!agreeTerms) {
  newErrors.terms = "You must agree to the Terms & Conditions"
}


  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
  
}


  return (
    <div className="bg-[#121212] flex items-center rounded-[10px] justify-center p-8 lg:p-16 lg:h-screen lg:overflow-y-auto">
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
           {errors.role && (
  <p className="text-red-500 text-xs mb-2">
    {errors.role}
  </p>
)}

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => {
  setSelectedRole("research")
  setErrors(prev => ({ ...prev, role: "" }))
}}
              
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
                  type=""
                    value={formData.sebi}
  onChange={(e) => handleChange("sebi", e.target.value)}
                  className="text-base text-[#121212] placeholder:text-[#cccccc] outline-none"
                  placeholder="INA0000xxxxx or INH0000xxxxx"
                />
                {errors.sebi && (
  <p className="text-red-500 text-xs mt-1">{errors.sebi}</p>
)}

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
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  type="email"
                  className="text-base text-[#121212] placeholder:text-[#cccccc] outline-none"
                  placeholder="x.xxx@domainname.com"
                />
                {errors.email && (
  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
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
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="text-base text-[#121212] placeholder:text-[#cccccc] outline-none"
                  placeholder="91761 12345"
                />
                {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
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
                  type={showRetypePassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className="text-base text-[#121212] placeholder:text-[#cccccc] outline-none"
                  placeholder="Enter Password"
                />
                {errors.password && (
  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
)}
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
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange("confirmPassword", e.target.value)}
                  className="text-base text-[#121212] placeholder:text-[#cccccc] outline-none"
                  placeholder="Retype Password"
                />
                {errors.confirmPassword && (
  <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
)}
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
                checked={agreeTerms}
  onCheckedChange={(value) => {
    setAgreeTerms(Boolean(value))
    setErrors(prev => ({ ...prev, terms: "" }))
  }}
                className="border-white data-[state=checked]:bg-[#a7e55c] data-[state=checked]:border-[#a7e55c]"
              />

              <label htmlFor="terms" className="text-sm text-white cursor-pointer">
                Agree all <span className="text-[#4454DD] underline-none">T&C</span>
              </label>
              
            </div>
             {errors.terms && (
  <p className="text-red-500 text-xs mt-1">
    {errors.terms}
  </p>
)}
          </div>
          
        </div>
            <Button 
             onClick={() => {
    if (validateForm()) {
      console.log("Form valid:", formData)
      // API call here
    }
  }}
            className="w-full h-14 rounded-full bg-[#DBF900] text-black font-semibold text-lg hover:bg-[#95d04a]">
              Continue
            </Button>
      </div>
    </div>
  )
}
