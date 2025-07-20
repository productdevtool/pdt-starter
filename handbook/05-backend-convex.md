# Convex Overview

This document provides an overview of how Convex is used within the pdt-starter monorepo as the backend for data storage and real-time updates.

## Purpose

Convex serves as the real-time backend database and serverless function platform. It simplifies data management and enables real-time features across the applications without the need for traditional API endpoints or complex state management.

## Key Features & Concepts

- **Real-time Database**: Data stored in Convex is automatically synchronized in real-time to connected clients.
- **Serverless Functions (Mutations & Queries)**: Backend logic is implemented as JavaScript/TypeScript functions that run on Convex's infrastructure.
  - **Queries**: Read-only functions that can subscribe to data changes, providing real-time updates to clients.
  - **Mutations**: Functions that modify data in the database.
- **Schema**: Defined in `convex/schema.ts`, it enforces data structure and types.
- **Authentication Integration**: Convex integrates with authentication providers like Clerk to secure data and functions.
- **HTTP Actions**: For handling webhooks or external API calls.

## Structure

- `convex/schema.ts`: Defines the database schema and relationships.
- `convex/auth.config.ts`: Configuration for authentication providers (e.g., Clerk).
- `convex/http.ts`: Defines HTTP endpoints for webhooks or custom API routes.
- `convex/users.ts`: Example Convex functions related to user management (e.g., creating, fetching users).
- `convex/messages.ts`: Example Convex functions related to messages.
- `convex/_generated/`: Automatically generated files by the Convex CLI, providing type-safe access to your Convex functions and data model.

## Integration with Frontend

Frontend applications (e.g., `admin`, `product`) interact with Convex using the `@convex-dev/react` library. Key components for integration include:

- `ConvexClientProvider.tsx`: A React context provider that initializes the Convex client and makes it available throughout the application.
- `useQuery` and `useMutation` hooks: Used in React components to fetch data (with real-time updates) and execute backend mutations, respectively.

## Getting Started with Convex

1.  **Install the Convex CLI**: If you haven't already, install the Convex CLI globally:
    ```bash
    npm install -g convex
    ```
2.  **Login to Convex**: Authenticate your CLI with your Convex account:
    ```bash
    npx convex login
    ```
3.  **Deploy your functions**: Deploy your local Convex functions to your Convex project:
    ```bash
    npx convex deploy
    ```
    This command will also provide you with the `CONVEX_DEPLOYMENT` URL, which you need to add to your project's `.env` file.

For more detailed information, refer to the official [Convex Documentation](https://docs.convex.dev/).
