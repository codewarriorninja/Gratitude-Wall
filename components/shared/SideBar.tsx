'use client'

import { navLink } from "@/constants/constants";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";



const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="bg-gray-800 text-gray-100 w-64 min-h-screen flex-shrink-0 md:block hidden"> 
      <div className="flex flex-col h-full">
        <Link href={'/home'} className="flex items-center h-16 px-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold tracking-wider">Gratitude</h2>
        </Link>

        <nav className="flex-1 overflow-y-auto">
          <SignedIn>
            <ul className="py-4">
              {navLink.slice(0, 3).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li key={link.route} className={`px-6 py-2`}>
                    <Link
                      href={link.route}
                      className={`flex items-center rounded-md  transition-colors duration-200 ease-in-out ${
                        isActive
                          ? "bg-gray-700/50  text-white font-semibold"
                          : "hover:bg-gray-700/20  text-gray-300"
                      } px-4 py-2`}
                    >
                      
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SignedIn>
        </nav>
        <SignedIn>
          <div className="border-t border-gray-700  px-4 py-6">
            <div className="flex items-center cursor-pointer bg-gray-700 p-2 rounded-full hover:bg-gray-700/50 transition-colors duration-200">
              <UserButton afterSignOutUrl='/' showName/>
            </div>
          </div>
        </SignedIn>
      </div>
    </aside>
  );
};

export default SideBar;