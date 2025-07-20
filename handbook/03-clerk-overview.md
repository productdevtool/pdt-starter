# Clerk Overview

This document provides an overview of how Clerk is used within the pdt-starter monorepo for authentication and user management.

## Purpose

Clerk provides a comprehensive suite of user management features, including authentication, user profiles, and authorization, simplifying the process of securing applications and managing user data.

## Key Features & Concepts

- **Authentication**: Handles user sign-up, sign-in, and session management.
- **User Management**: Provides tools for managing user profiles, email addresses, and other user-related data.
- **Authorization**: Integrates with roles and permissions to control access to different parts of the application.
- **Webhooks**: Allows for custom logic to be triggered on user events (e.g., user created, user updated).
- **Components**: Provides pre-built React components for common authentication flows (e.g., `SignIn`, `SignUp`, `UserProfile`).

## Structure

- `apps/admin/middleware.ts`: Handles authentication middleware for the admin application.
- `apps/product/middleware.ts`: Handles authentication middleware for the product application.
- `convex/clerk.ts`: Integrates Clerk with Convex for secure backend functions.
- `apps/*/components/ConvexClientProvider.tsx`: (For apps using Convex) Initializes the Convex client with Clerk authentication.

## Integration with Frontend

Frontend applications (e.g., `admin`, `product`) integrate with Clerk using the `@clerk/nextjs` library. Key components for integration include:

- `ClerkProvider`: A React context provider that makes Clerk available throughout the application.
- `useUser`, `useAuth`, `useClerk` hooks: Used in React components to access user information, authentication status, and Clerk instance, respectively.
- `SignIn`, `SignUp`, `UserProfile` components: Pre-built UI components for authentication and user profile management.

## Getting Started with Clerk

1.  **Create a Clerk account**: Sign up at [clerk.com](https://clerk.com/).
2.  **Create an application**: Follow the steps to create a new application in your Clerk dashboard.
3.  **Get API Keys**: Obtain your `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` from your Clerk application settings. Add these to your project's `.env` file.

For more detailed information, refer to the official [Clerk Documentation](https://clerk.com/docs).
