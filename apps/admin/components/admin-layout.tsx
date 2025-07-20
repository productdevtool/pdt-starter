"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Authenticated, useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user: clerkUser, isLoaded: isClerkLoaded } = useUser();
  const router = useRouter();

  const convexUser = useQuery(
    api.users.getUser,
    clerkUser?.id ? { clerkId: clerkUser.id } : "skip",
  );

  const isAdmin = convexUser?.isAdmin;

  useEffect(() => {
    if (isClerkLoaded && clerkUser && convexUser && !isAdmin) {
      router.push("/"); // Redirect to home or an unauthorized page
    }
  }, [isClerkLoaded, clerkUser, convexUser, isAdmin, router]);

  if (!isClerkLoaded || !clerkUser || !convexUser) {
    return null; // Or a loading spinner
  }

  if (!isAdmin) {
    return <div>You do not have permission to view this page.</div>; // Or a more user-friendly message
  }

  return <Authenticated>{children}</Authenticated>;
}
