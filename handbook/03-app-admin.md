# Admin Application

This document provides an overview of the `admin` application within the pdt-starter monorepo.

## Purpose

The `admin` application serves as the administrative portal for managing various aspects of the system, accessible only to users with `isAdmin` privileges.

## Features

- **User Authentication**: Leverages Clerk for secure user authentication and management.
- **Admin-only Access**: Utilizes Clerk's `privateMetadata.isAdmin` field to restrict access to administrative features.
- **Dashboard**: Provides a central dashboard for an overview of the system.
- **User Management**: Allows administrators to view and manage registered users.

## Structure

- `apps/admin/app/dashboard/page.tsx`: The main dashboard page for administrators.
- `apps/admin/app/users/page.tsx`: The page for viewing and managing users, utilizing the shared `Table` component.
- `apps/admin/components/admin-layout.tsx`: A layout component that enforces admin-only access and redirects unauthorized users.
- `apps/admin/components/auth-show-user.tsx`: A component to display user information and a sign-in button.

## Getting Started

To run the admin application:

1. Ensure you have set up your Clerk and Convex environment variables as described in the main `plan.md`.
2. Navigate to the `apps/admin` directory.
3. Run `npm run dev` or `pnpm dev` to start the development server.
4. Access the admin portal in your browser (typically `http://localhost:3000`).
5. Log in with a user account that has `isAdmin: true` in its private metadata to access the admin features.