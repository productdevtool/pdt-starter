'use client'

import { SignInButton, useAuth, useUser } from "@clerk/nextjs"
import { useEffect } from "react"

export function AuthShowUser() {
  const { isSignedIn, userId } = useAuth()
  const { user, isLoaded } = useUser()

  useEffect(() => {
    if (isSignedIn && user) {
      console.log("User:", user.id, user.emailAddresses[0]?.emailAddress, user.privateMetadata.isAdmin)
    }
  }, [isSignedIn, user])

  if (!isSignedIn) {
    return (
      <div>
        <p>Not signed in.</p>
        <SignInButton />
      </div>
    )
  }

  if (!isLoaded || !user) {
    return null;
  }

  if (user.privateMetadata.isAdmin) {
    return (
      <div>
        <p>Welcome, Admin: {user.emailAddresses[0]?.emailAddress}</p>
      </div>
    )
  } else {
    return (
      <div>
        <p>You are signed in as: {user.emailAddresses[0]?.emailAddress}</p>
        <p>You do not have admin privileges.</p>
      </div>
    )
  }
}
