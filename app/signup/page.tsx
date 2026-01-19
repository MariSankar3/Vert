import type { Metadata } from "next"
import { SignUpForm } from "@/components/signup-form"
import { HeroSection } from "@/components/hero-section"

export const metadata: Metadata = {
  title: "Sign Up - Ethereal Design",
  description: "Create your account",
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <HeroSection />
      <SignUpForm />
    </div>
  )
}
