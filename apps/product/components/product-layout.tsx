"use client"

import { ReactNode } from "react"
import { ProductSidebar } from "./product-sidebar"
import { useAuth } from "@clerk/nextjs"

export function ProductLayout({ children, title }: { children: ReactNode, title?: string }) {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null; // Or a loading spinner
  }

  return (
    <div className="flex min-h-screen">
      {isSignedIn && <ProductSidebar />}
      <main className="flex-1 p-4 md:p-8 lg:p-12 max-w-[1200px] mx-auto">
        {title && <h1 className="text-2xl font-bold mb-4">{title}</h1>}
        {children}
      </main>
    </div>
  )
}