# Product Application

This document provides an overview of the `product` application within the pdt-starter monorepo.

## Purpose

The `product` application serves as the main customer-facing application where users can access and manage their product-related features and data. It is designed to showcase the core functionality of the SaaS platform.

## Features

- **User Authentication**: Leverages Clerk for secure user authentication and management.
- **Dashboard**: Provides a personalized dashboard for users to view key metrics and information related to their product usage.
- **Settings**: Allows users to manage their account settings, profile information, and potentially billing details.
- **Real-time Data**: Integrates with Convex to provide real-time updates for dashboard metrics and other dynamic content.

## Structure

- `apps/product/app/dashboard/page.tsx`: The main dashboard page for authenticated users, displaying various product-related metrics.
- `apps/product/app/settings/page.tsx`: The page for users to manage their account settings.
- `apps/product/components/product-layout.tsx`: A layout component that provides a consistent structure for product-related pages, including navigation.
- `apps/product/components/product-sidebar.tsx`: The sidebar navigation for the product application.
- `apps/product/components/ConvexClientProvider.tsx`: Initializes the Convex client for the product application.
- `apps/product/middleware.ts`: Handles authentication middleware for the product application using Clerk.

## Integration with Convex and Clerk

- **Convex**: The `product` application uses Convex for its backend data. Queries are used to fetch real-time data for the dashboard, and mutations are used for any data modifications (e.g., updating user settings).
- **Clerk**: Clerk handles all authentication and user management within the `product` application. Users sign in/up through Clerk, and their session information is used to secure access to product features and data.

## Getting Started

To run the product application:

1.  Ensure you have set up your Clerk and Convex environment variables as described in the main `plan.md` and the respective Convex and Clerk overview documents.
2.  Navigate to the `apps/product` directory.
3.  Run `pnpm dev` to start the development server.
4.  Access the product application in your browser (typically `http://localhost:3303`).
5.  Log in with a user account to access the dashboard and other features.
