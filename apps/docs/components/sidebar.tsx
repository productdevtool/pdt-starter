"use client"

import Link from "next/link"

export function Sidebar() {
  return (
    <div className="relative h-full overflow-hidden py-6 lg:py-8">
      <div className="h-full overflow-y-auto">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">Documentation</h4>
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Getting Started
          </Link>
          <Link href="/02-convex-setup" className="text-muted-foreground hover:text-foreground">
            Convex Setup
          </Link>
          <Link href="/03-clerk-setup" className="text-muted-foreground hover:text-foreground">
            Clerk Setup
          </Link>
        </div>
      </div>
    </div>
  )
}
