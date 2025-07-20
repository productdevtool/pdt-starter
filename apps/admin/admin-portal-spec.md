# Admin Portal Specification

This document outlines the plan for building the `admin` application within the pdt-starter monorepo.

## 1. Project Setup & Scaffolding

- The `apps/admin` directory was created by copying the `apps/website` scaffold.
- The `package.json` within `apps/admin` has been updated to reflect its name: `@workspace/admin`.
- The root `turbo.json` has been updated to include `admin` in its pipeline definitions.

## 2. Authentication and User Management

- **Clerk Integration**: The `admin` app is integrated with Clerk for user authentication.
- **Convex Integration**: Clerk authentication is integrated with Convex via `ConvexProviderWithClerk`.
- **Admin Privileges**: User access to admin features is controlled by the `isAdmin` field in Clerk's `privateMetadata`.
- **Login/Logout**: A `SignInButton` is provided for unauthenticated users, and `UserButton` for authenticated users.

## 3. Core Pages

- **Dashboard Page**: Implement a dashboard page (`apps/admin/app/dashboard/page.tsx`) to serve as the main landing area for authenticated admin users.
- **Users Page**: Implement a users page (`apps/admin/app/users/page.tsx`) to display a list of users.
  - This page will utilize the shared `Table` component from `@workspace/ui` to present user data.

## 4. Shared Components

- The `admin` app will leverage shared UI components from `packages/ui` (e.g., `Table`).

## 5. Documentation

- A dedicated documentation file (`handbook/03-app-admin.md`) will be created to detail the admin application's structure and functionality.