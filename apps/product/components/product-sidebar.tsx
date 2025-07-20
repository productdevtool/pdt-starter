"use client"

import Link from "next/link"
import { UserButton } from "@clerk/nextjs"

export function ProductSidebar() {
  return (
    <aside className="w-64 border-r bg-background p-4 flex flex-col h-screen sticky top-0">
      <div className="flex items-center justify-between mb-6">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <span className="inline-block font-bold">Product App</span>
        </Link>
        <UserButton afterSignOutUrl="http://localhost:3304" />
      </div>
      <nav className="flex flex-col space-y-2 flex-1">
        <Link href="/dashboard" className="text-foreground hover:text-primary pl-4">
          Dashboard
        </Link>
        <div className="flex flex-col space-y-1 pl-8">
          <Link href="/dashboard/total-revenue" className="text-muted-foreground hover:text-primary">
            Total Revenue
          </Link>
          <Link href="/dashboard/subscriptions" className="text-muted-foreground hover:text-primary">
            Subscriptions
          </Link>
          <Link href="/dashboard/sales" className="text-muted-foreground hover:text-primary">
            Sales
          </Link>
          <Link href="/dashboard/active-now" className="text-muted-foreground hover:text-primary">
            Active Now
          </Link>
        </div>
        <Link href="/settings" className="text-foreground hover:text-primary pl-4">
          Settings
        </Link>
      </nav>
    </aside>
  )
}