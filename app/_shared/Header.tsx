"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
const Header = () => {
const {user}= useUser();


  const [open, setOpen] = useState(false);
const router= useRouter()
  return (
    <div className="sticky top-0 z-50 w-full bg-gray-200/50 backdrop-blur-lg flex items-center justify-between p-4">
      
      {/* Logo */}
      <div  onClick={()=>router.push('/')} className="flex gap-2 items-center">
        <Image src={"/logo.png"} alt="logo" width={40} height={40} />
        <h2 className="text-xl font-semibold">UXGEN</h2>
      </div>

      {/* Desktop Menu (unchanged) */}
      <ul className="hidden md:flex gap-10 items-center text-lg">
        <li  onClick={()=>router.push("/")} className="hover:text-primary cursor-pointer">Home</li>
        <li  onClick={()=>router.push("/pricing")} className="hover:text-primary cursor-pointer">Pricing</li>
        <li  onClick={()=>router.push("/about")} className="hover:text-primary cursor-pointer">About</li>
      </ul>

      {/* Desktop Button */}
      <div className="hidden md:block">
        {!user ?  <SignInButton mode="modal" >
<Button className="w-[90%]"   >Get Started</Button>
 </SignInButton>  : <UserButton/> }
        
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg flex flex-col items-center gap-6 py-6 md:hidden">
          <li onClick={()=>router.push("/")} className="list-none hover:text-primary cursor-pointer">Home</li>
          <li onClick={()=>router.push("/pricing")} className="list-none hover:text-primary cursor-pointer">Pricing</li>
          <li onClick={()=>router.push("/about")} className="list-none hover:text-primary cursor-pointer">About</li>
         
 {!user ?  <SignInButton mode="modal">
<Button className="w-[90%]"   >Get Started</Button>
 </SignInButton>   : <UserButton  /> }

        </div>
      )}
    </div>
  );
};

export default Header;