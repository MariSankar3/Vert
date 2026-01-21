"use client"

import { EyeIcon, Link} from "lucide-react"
import { useState } from "react"

export function NewClients() {
  const [] = useState("all")

  return (
    <div className="max-h-screen bg-[#f7f7f7]">
      <div className="flex items-center justify-between px-2 h-14 rounded-full">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
          <button className="text-2xl h-10 w-[40px] rounded-full font-bold border-3 border-[#000] text-black bg-white ml-4">&#8592;</button>
          </Link>
          <h1 className="text-lg">NEW CLIENTS</h1>
        </div>
        <button className="px-10 py-2 rounded-full font-semibold bg-lime-300 text-black cursor-not-allowed">
          Next
        </button>
      </div>

      <div className="w-full flex items-center justify-center bg-gray-50 p-4">
      <div className="rounded-xl max-w-6xl md:p-10 flex flex-col md:flex-row gap-8">

        <div className="flex-1 space-y-5">
          <InputBox label="Client First Name" value="Suganth" />
          <InputBox label="Client 2nd Name" value="Design" />
          <InputBox label="Email" value="myregistermail@mail.com" />
          <InputBox label="Mobile Number" value="+91 91761 12345" />
          <InputBox
            label="WA Mobile Number (optional)"
            value="+91 91761 12345"
          />
        </div>

        <div className="flex-1 rounded-xl border border-[#A8A8A8] p-6 space-y-4">
          <h2 className="font-semibold text-gray-800 text-lg">
            DOCUMENTS REQUIRE
          </h2>

          <p className="text-gray-500 text-sm">
            By selecting this, we will securely initiate the KYC process.
          </p>

          <div className="space-y-4 mt-4">
            <CheckItem label="KYC" defaultChecked />

            <CheckItem label="Risk profile" />

            <CheckItem label="eConsent for Advisory Agreement" />
            <CheckItem label="eConsent for Advisory Agreement" />
            <CheckItem label="eConsent for Advisory Agreement" />
            <CheckItem label="eConsent for Advisory Agreement" />
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

function InputBox({ label, value }: { label: string; value: string }) {
  return (
    <div  className="w-full mt-1 border rounded-2xl border-[#A8A8A8] px-8 py-3 bg-white-50 focus:outline-none">
      <label className="text-xs text-gray-500">{label}</label>
      <input
        type="text"
        value={value}
         className="w-full mt-1 rounded-md text-[#1D2939] font-semibold focus:outline-none focus:ring-0 text-sm"
      />
    </div>
  );
}

function CheckItem({
  label,
  defaultChecked = false,
}: {
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          className="w-5 h-5 accent-purple-600"
        />
        <span className="text-gray-700 text-sm">{label}</span>
      </div>

     <EyeIcon className="text-[#E16448]"/>
    </div>
  );
}
