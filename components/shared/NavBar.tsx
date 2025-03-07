"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Company Name (Left) */}
        <div className="flex-shrink-0">
          <span className="text-white font-bold text-lg">Gratitude</span>
        </div>

        {/* Sign Up Button (Right) */}
        <div>
           <SignedIn>
            <UserButton />
           </SignedIn>
           <SignedOut>
            <Link href={'/sign-in'}>
            <Button className="cursor-pointer">Sign Up</Button>
            </Link>
          </SignedOut> {/* Use your custom Button */}
        </div>
      </div>
    </nav>
  );
}