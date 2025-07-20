'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@workspace/ui/lib/utils"
import { UserButton } from "@clerk/nextjs"

export function AdminPageLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/dashboard" className="text-xl font-bold">
            {process.env.NEXT_PUBLIC_ADMIN_APP_TITLE || "Admin Portal"}
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="/dashboard"
              className={cn(
                "hover:text-gray-300",
                pathname === "/dashboard" && "font-bold"
              )}
            >
              Dashboard
            </Link>
            <Link
              href="/users"
              className={cn(
                "hover:text-gray-300",
                pathname === "/users" && "font-bold"
              )}
            >
              Users
            </Link>
            <Link
              href="/profile"
              className={cn(
                "hover:text-gray-300",
                pathname === "/profile" && "font-bold"
              )}
            >
              Profile
            </Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
    </div>
  )
}
