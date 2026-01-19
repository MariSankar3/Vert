import Image from "next/image"

export function HeroSection() {
  return (
    <div className="bg-[#d8d8d8] flex flex-col justify-between p-12 lg:p-11 max-h-screen">
      <div className="mb-8">            
        <Image src="/verita_logo_dark.png" alt="Ethereal Design Logo" width={48} height={48} />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#121212] leading-tight text-center">
          Never Fail an Audit Due to
        </h1>
        <h1 className="text-3xl lg:text-4xl font-bold text-[#121212] mb-6 leading-tight text-center">
          Missing Records
        </h1>
        <p className="text-md text-[#1d2939] max-w-2xl leading-relaxed text-center">
          Our software is designed specifically for SEBI-regulated firms. It automatically captures and files all
          interactions—calls, messages, and documents—linking them directly to the right client. Get your complete audit
          trail instantly. Stay compliant, stay protected.
        </p>
      </div>

      <div className="mt-12 relative">
        <Image src="/sign_in_1.png" alt="Product Screenshots" width={600} height={400} className="w-full h-auto" />
      </div>
    </div>
  )
}
