# Docs Application

This document provides an overview of the `docs` application within the pdt-starter monorepo.

## Purpose

The `docs` application serves as the documentation portal for the entire monorepo. It provides guides and explanations for setting up and understanding various parts of the project.

## Features

- **Getting Started Guide**: Provides instructions for setting up the development environment.
- **Convex Setup Guide**: Details the steps for configuring Convex.
- **Clerk Setup Guide**: Explains how to set up Clerk for authentication.
- **Responsive Layout**: Adapts to different screen sizes, including a responsive sidebar.
- **Theme Toggling**: Allows users to switch between light and dark themes.

## Structure

- `apps/docs/app/page.tsx`: The main landing page for the documentation, currently displaying the "Getting Started" guide.
- `apps/docs/app/02-convex-setup.tsx`: The page detailing Convex setup.
- `apps/docs/app/03-clerk-setup.tsx`: The page detailing Clerk setup.
- `apps/docs/app/layout.tsx`: Defines the overall layout of the documentation site, including the header and sidebar.
- `apps/docs/components/header.tsx`: The header component with theme toggling.
- `apps/docs/components/sidebar.tsx`: The sidebar component with navigation links.
- `apps/docs/components/providers.tsx`: Provides context for theme management.

## Getting Started

To run the docs application:

1.  Navigate to the `apps/docs` directory.
2.  Run `pnpm dev` to start the development server.
3.  Access the documentation portal in your browser (typically `http://localhost:3302`).
