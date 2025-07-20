# UI Package Overview

This document provides an overview of the `@workspace/ui` package within the pdt-starter monorepo.

## Purpose

The `@workspace/ui` package is a shared UI library that encapsulates common UI components, styles, and utilities used across different applications in the monorepo. Its purpose is to promote consistency, reusability, and maintainability of the user interface.

## Key Technologies

- **React**: The core library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapidly styling components.
- **Shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS.

## Structure

- `packages/ui/src/components/`: Contains shared React components (e.g., Button, Card, Input).
- `packages/ui/src/hooks/`: Contains shared React hooks.
- `packages/ui/src/lib/`: Contains shared utility functions.
- `packages/ui/src/styles/globals.css`: Global CSS styles, including Tailwind CSS configuration and custom variables.
- `packages/ui/components.json`: Configuration file for Shadcn/ui components.

## Usage in Applications

Applications within the monorepo (e.g., `admin`, `product`, `website`, `docs`) can import and utilize components and utilities from the `@workspace/ui` package. This ensures a consistent look and feel across all applications and reduces code duplication.

### Example Usage (in a Next.js application)

```typescript
// apps/your-app/app/page.tsx
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
```

## Adding New Components

When adding new UI components, they should ideally be developed within the `@workspace/ui` package to ensure they are reusable and follow the established design system. Shadcn/ui provides a convenient way to add new components:

```bash
npx shadcn-ui@latest add <component-name> --cwd packages/ui
```

This command will add the component's code to `packages/ui/src/components/` and update the `components.json` file.
