# PDT-Starter: A Modern SaaS Application Foundation

PDT-Starter is a robust, scalable, and AI-friendly monorepo designed to provide a comprehensive foundation for building modern SaaS applications. It leverages the latest tooling from shadcn/ui and integrates key third-party services to accelerate development.

## Architecture Overview

This project is built with a powerful stack:

*   **Turborepo**: Orchestrates build, development, and linting processes across all applications and shared packages.
*   **Next.js**: Each application (`admin`, `docs`, `product`, `website`) is an independent Next.js project utilizing the App Router.
*   **Convex**: Serves as the core backend, providing a real-time database and serverless functions.
*   **Clerk**: Handles all aspects of user authentication and management.
*   **Inngest**: Manages reliable, multi-step, and event-driven workflows.
*   **Tailwind CSS & shadcn/ui**: Provide a modern design system with unopinionated, AI-friendly components.

## Getting Started

To set up and run the PDT-Starter project locally, follow these steps:

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/productdevtool/pdt-starter.git
    cd pdt-starter
    ```

2.  **Install dependencies**:

    This project uses `pnpm` as its package manager. Ensure you have it installed.

    ```bash
    pnpm install
    ```

3.  **Environment Variables**:

    Create a `.env` file in the root of the repository based on `.env.example` and populate it with your API keys for the integrated services (Convex, Clerk, Stripe, Inngest, Resend).

    ```bash
    cp .env.example .env.local
    # Open .env and add your keys
    ```

4.  **Run the development server**:

    ```bash
    pnpm dev
    ```

    This will start all Next.js applications (admin, docs, product, website) in development mode.

## Project Structure

*   `apps/`: Contains all Next.js applications (admin, docs, product, website).
*   `packages/ui/`: A shared component library built with shadcn/ui.
*   `convex/`: Backend functions and database schema for Convex.
*   `handbook/`: Documentation and guides for the project.

## Adding Components

To add new shadcn/ui components, navigate to the root of the specific application (e.g., `apps/website`) and use the shadcn/ui CLI:

```bash
npx shadcn@latest add button
```

This will place the component source code in `packages/ui/src/components`, making it available across all applications.

## Contributing

We welcome contributions! Please refer to the `handbook/` for more detailed documentation and guidelines.
