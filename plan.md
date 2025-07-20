# **PDT-Starter: Implementation Plan**

This document outlines the complete plan for building the pdt-starter repository. It includes an architectural overview, a design guide, instructions for setting up third-party services, and a detailed, sequential build plan that leverages the latest shadcn/ui monorepo tooling.

## **1\. Architecture Guide**

The pdt-starter is a Turborepo monorepo designed to provide a robust, scalable, and AI-friendly foundation for building modern SaaS applications.

* **Turborepo (The Conductor)**: At the highest level, Turborepo manages the entire project, orchestrating build, development, and linting processes across all applications and shared packages.
* **Next.js (The Frontend Framework)**: Each application in apps/ is an independent Next.js project, utilizing the App Router for a modern, file-based routing system.
* **Convex (The Backend & Database)**: Convex serves as the core backend, providing a real-time database and serverless functions with automatic frontend updates.
* **Clerk (The Gatekeeper)**: Clerk handles all aspects of user authentication and management, integrating directly with both Next.js and Convex.
* **Inngest (The Workflow Engine)**: Inngest manages reliable, multi-step, and event-driven workflows, such as user onboarding sequences.
* **Tailwind CSS & shadcn/ui (The Design System)**: Tailwind provides utility classes for styling. shadcn/ui offers a set of unopinionated components whose source code is copied directly into the project, providing maximum context for AI-driven development.

## **2\. Design Guide**

This guide establishes the visual identity for pdt-starter to ensure a modern, minimal, and cohesive user experience across the website, product, and docs applications.

### **2.1. Philosophy**

The design is clean, professional, and content-focused. It prioritizes clarity and ease of use, avoiding unnecessary decoration. Key principles are:

* **Generous Whitespace**: Creates a sense of calm and helps users focus on the content.
* **Strong Typography**: A clear visual hierarchy makes information easy to scan and digest.
* **Limited Color Palette**: A refined palette builds brand recognition and ensures a tasteful, uncluttered interface.
* **Subtle Interactivity**: Animations and transitions are minimal and purposeful, providing feedback without being distracting.

### **2.2. Color Palette**

The palette is derived from the brand identity's "muted blue" and is designed to work seamlessly in both light and dark modes.

* **Primary (Brand & CTAs)**: pdt-blue: \#4A69E2
* **Neutrals**: A range from gray-900 to white.
* **Functional Colors**: For destructive and warning states.

### **2.3. Typography**

* **Font Family**: **Inter**.
* **Typographic Scale**: A consistent scale from H1 (48px) to Small/Caption (14px).

### **2.4. Layout & Spacing**

* **Base Unit**: 4px. All spacing is a multiple of this unit.
* **Content Width**: max-width of 1280px.
* **Layout**: Flexbox and Grid.

### **2.5. Component Styling (shadcn/ui)**

All components feature rounded corners (rounded-md or rounded-lg). Specific styles are defined for Buttons, Cards, Inputs, Tables, and Navigation to ensure a consistent look and feel.

## **3\. Third-Party Service Setup**

Before beginning development, create accounts for the following services and retrieve the necessary API keys. Create a file named .env in the root of the repository to store them.

* **Convex**: NEXT\_PUBLIC\_CONVEX\_URL
* **Clerk**: NEXT\_PUBLIC\_CLERK\_PUBLISHABLE\_KEY, CLERK\_SECRET\_KEY
* **Stripe**: STRIPE\_SECRET\_KEY, NEXT\_PUBLIC\_STRIPE\_PUBLISHABLE\_KEY, STRIPE\_WEBHOOK\_SECRET
* **Inngest**: INNGEST\_EVENT\_KEY, INNGEST\_SIGNING\_KEY
* **Resend**: RESEND\_API\_KEY

## **4\. Sequential Build Plan (Revised)**

This revised plan leverages the shadcn/ui CLI for a streamlined monorepo setup.

### **Phase 1: Project Scaffolding**

1. **Initialize Monorepo with shadcn/ui**
   * **Spec**: In an empty directory, run npx shadcn@canary init. When prompted, select the Next.js (Monorepo) option. This will create a Turborepo project with an apps/web application and a packages/ui shared component library, fully configured.
2. **Adapt the Scaffolded Structure**
   * **Spec**:
     * Rename the apps/web directory to apps/website.
     * Update package.json names and any relevant paths in configuration files (e.g., turbo.json) to reflect the change from web to website.
     * Copy the apps/website directory three times to create apps/product, apps/admin, and apps/docs.
     * For each new app (product, admin, docs), update its package.json to have the correct name (e.g., "name": "@workspace/product").
     * Update the root turbo.json to include the new apps in its pipeline definitions.

### **Phase 2: Backend & Service Integration**

3. **Initialize Convex**
   * **Spec**: Run npx convex dev in the root. This will create the convex/ directory and link it to your Convex project.
4. **Define Convex Schema & Seed Data**
   * **Spec**: Create convex/schema.ts with tables for users, organizations, subscriptions, events, and groceries. Create convex/seed.ts to populate the groceries table with sample data.
5. **Configure Convex Auth & Email**
   * **Spec**: Create convex/auth.config.ts to use Clerk. Create an HTTP action in convex/http.ts to handle the user.created webhook from Clerk for sending a welcome email via Resend.

### **Phase 3: Component Installation**

6. **Install shadcn/ui Components**
   * **Spec**: cd into the apps/website directory. Run npx shadcn-ui@latest add \[component-name\] for each of the following components: Button, Card, DropdownMenu, Input, Label, Select, Avatar, Toast, Table, Dialog, Accordion, Badge, NavigationMenu. The CLI will automatically place the component source code in packages/ui and make them available to all apps.

### **Phase 4: Building the Applications**

7. **website: Create Layout & Pages**
   * **Spec**: In apps/website, build the root layout, home page, and placeholder pages for pricing, about, and blog. Use the newly added shared components.
8. **product: Configure Clerk & Build Pages**
   * **Spec**: In apps/product, wrap the root layout in ClerkProvider. Build the sign-in and sign-up pages. Build the secure dashboard layout and the pages for the main dashboard, settings, and the groceries list/detail views.
9. **docs: Create Introduction Page**
   * **Spec**: In apps/docs, clear the boilerplate and create the introduction page with setup instructions.
10. **admin: Create Dashboard & Users Pages**
    * **Spec**: In apps/admin, build the dashboard and users pages, using the shared Table component for the user list.

### **Phase 5: Initialize Handbook**

11. **Create Handbook Documentation**
    * **Spec**: In the handbook/ directory, create the following Markdown files:
      * 00-introduction.md: An overview of pdt-starter and its purpose.
      * 01-app-website.md: Documentation for the website application.
      * 02-app-product.md: Documentation for the product application.
      * 03-app-admin.md: Documentation for the admin application.
      * 04-app-docs.md: Documentation for the docs application.
      * 05-backend-convex.md: An overview of the Convex setup and schema.

### **Phase 7: Finalization**

12. **Create Root README.md**
    * **Spec**: Write a comprehensive README.md in the root directory with an overview and setup instructions.
13. **Create .env.example**
    * **Spec**: Create a .env.example file in the root, listing all required environment variables, including RESEND\_API\_KEY.
