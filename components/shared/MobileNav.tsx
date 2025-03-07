'use client'
import { Sheet, SheetHeader, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { navLink } from "@/constants/constants"
import { SignedIn, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"  

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="header">
      <Link href={'/home'} className="flex items-center gap-2 md:py-2">
        <h2 className="text-lg font-semibold">Gratitude</h2> 
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="text-black h-5 w-5" /> 
              </Button>
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64 bg-white"> 
              <SheetHeader className="py-4 border-b"> 
                <SheetTitle className="text-lg font-semibold">
                  <Link href={'/home'}> Gratitude</Link>
                </SheetTitle>
              </SheetHeader>
              <div className="py-4">
                <div className="space-y-2"> 
                  {navLink.map((link) => {
                    const isActive = link.route === pathname;
                    
                    return (
                      <Link
                        key={link.route}
                        href={link.route}
                        className={`flex items-center gap-2 w-full p-2 rounded-md transition-colors  ${isActive
                          ? 'bg-gray-100 text-black font-semibold'  
                          : 'hover:bg-gray-50 text-gray-700' 
                        }`}
                      >
                        <span className="px-4">{link.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 w-full flex items-center justify-center"> 
                <UserButton afterSignOutUrl="/" showName>
                </UserButton>
              </div>
            </SheetContent>
          </Sheet>
        </SignedIn>
      </nav>
    </div>
  )
}

export default MobileNav