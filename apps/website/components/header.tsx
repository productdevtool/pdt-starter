"use client"

import Link from "next/link"
import { Button } from "@workspace/ui/components/button"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 max-w-[1200px] mx-auto items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">SaaS Company</span>
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/about"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
            >
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button asChild size="sm" variant="ghost">
              <Link href="http://localhost:3303/signin">Sign In</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="http://localhost:3303/signup">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}