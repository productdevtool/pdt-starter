# **PDT-Starter: Implementation Plan**

This document outlines the complete plan for building the pdt-starter repository. It includes an architectural overview, a design guide, instructions for setting up third-party services, and a detailed, sequential build plan.

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

* **Primary (Brand & CTAs)**
  * pdt-blue: \#4A69E2 (A modern, muted blue for primary buttons and key accents)
  * pdt-blue-dark: \#3A52B0 (For hover states on primary elements)
* **Neutrals (Text, Backgrounds, Borders)**
  * gray-900: \#111827 (Primary text in light mode)
  * gray-700: \#374151 (Secondary text)
  * gray-400: \#9CA3AF (Tertiary text, disabled states)
  * gray-200: \#E5E7EB (Borders)
  * gray-100: \#F3F4F6 (Subtle backgrounds, e.g., code blocks)
  * white: \#FFFFFF (Main background in light mode, primary text in dark mode)
* **Functional Colors**
  * destructive-red: \#EF4444 (For delete actions)
  * warning-yellow: \#FBBF24 (For warnings or alerts)

### **2.3. Typography**

* **Font Family**: **Inter**. It's a clean, highly legible sans-serif font perfect for UI design. It should be self-hosted or imported from Google Fonts.
* **Typographic Scale**: A consistent scale creates rhythm and hierarchy.
  * H1 / Display: 48px, Bold (700)
  * H2 / Heading: 36px, Bold (700)
  * H3 / Subheading: 24px, Semi-Bold (600)
  * H4 / Title: 20px, Semi-Bold (600)
  * Body / Paragraph: 16px, Regular (400)
  * Small / Caption: 14px, Regular (400)

### **2.4. Layout & Spacing**

* **Base Unit**: 4px. All spacing (margin, padding) should be a multiple of this unit.
* **Content Width**: Main content containers should have a max-width of 1280px to maintain readability on large screens.
* **Layout**: Use Flexbox and Grid for all layouts. The product app will feature a main content area next to a fixed sidebar. The website will use a single-column layout for content pages.

### **2.5. Component Styling (shadcn/ui)**

All components should be styled with rounded corners (rounded-md or rounded-lg).

* **Buttons**:
  * **Primary**: Solid pdt-blue background with white text. Subtle scale-up transition on hover.
  * **Secondary**: White background with a gray-200 border and gray-900 text.
  * **Ghost**: No background or border, just colored text.
* **Cards**:
  * **Light Mode**: White background with a subtle gray-200 border and a very light box-shadow (shadow-sm).
  * **Dark Mode**: Dark gray background (gray-800) with a gray-700 border.
* **Inputs & Forms**:
  * Simple gray-200 border.
  * On focus, the border color changes to pdt-blue.
  * Labels should use Small / Caption typography.
* **Tables**:
  * Clean and borderless between rows. A single gray-200 border should separate the header row from the body.
  * Header text should be Small / Caption and semi-bold.
* **Navigation**:
  * **Website**: A clean top navigation bar using NavigationMenu.
  * **Product**: A fixed vertical sidebar using gray-900 as the background, with navigation links styled as Ghost buttons that have a light background on the active state.

## **3\. Third-Party Service Setup**

Before beginning development, create accounts for the following services and retrieve the necessary API keys. Create a file named .env in the root of the repository to store them.

**A. Convex (Backend)**

1. Go to [convex.dev](https://www.convex.dev) and sign up.
2. Create a new project.
3. In your project dashboard, go to **Settings**.
4. Copy the **Deployment URL**. This is your NEXT_PUBLIC_CONVEX_URL.

**B. Clerk (Authentication)**

1. Go to [clerk.com](https://clerk.com) and sign up.
2. Create a new application. Select **Next.js** as the framework.
3. In your application dashboard, navigate to **API Keys**.
4. Copy the **Publishable key** (NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) and **Secret key** (CLERK_SECRET_KEY).
5. In the left navigation, go to **JWT Templates**. Create a new template based on the **Convex** preset.

**C. Stripe (Payments)**

1. Go to [stripe.com](https://stripe.com) and sign up.
2. In the dashboard, go to the **Developers** section.
3. Under **API keys**, find your **Publishable key** (NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) and **Secret key** (STRIPE_SECRET_KEY).
4. Create a **Webhook signing secret** (STRIPE_WEBHOOK_SECRET).

**D. Inngest (Workflows)**

1. Go to [inngest.com](https://www.inngest.com) and sign up.
2. Create a new project.
3. Find your **Signing Key** (INNGEST_SIGNING_KEY) and **Event Key** (INNGEST_EVENT_KEY).

**E. Resend (Transactional Email)**

1. Go to [resend.com](https://resend.com) and sign up.
2. In the dashboard, go to **API Keys** and create a new key. This is your RESEND_API_KEY.
3. You must also **verify a domain** to send emails from your address.

## **4\. Sequential Build Plan**

This section provides a series of ordered prompts to build the pdt-starter repository from the ground up.

### **Phase 1: Project Scaffolding & Core Configuration**

1. **Initialize Git & Turborepo**
   * **Spec**: Create the root pdt-starter directory. Initialize a Git repository. Use npx create-turbo@latest to scaffold a new monorepo.
2. **Create Directory Structure**
   * **Spec**: Inside the monorepo, create the apps/, packages/, convex/, and handbook/ directories as planned.
3. **Configure Root package.json**
   * **Spec**: Add scripts for dev and lint. Define workspaces for Turborepo.
4. **Configure Shared ESLint & TypeScript**
   * **Spec**: Create a shared ESLint configuration in packages/eslint-config and a shared TypeScript base.json in packages/tsconfig.

### **Phase 2: Backend Setup (Convex)**

5. **Initialize Convex**
   * **Spec**: Run npx convex dev in the root to link to your Convex project.
6. **Define Convex Schema**
   * **Spec**: Create convex/schema.ts. Define tables for users, organizations, subscriptions, events, and a new groceries table with fields for name (string) and quantity (number).
7. **Seed Convex Database**
   * **Spec**: Create a new file convex/seed.ts. Write a mutation that populates the groceries table with 5-6 sample items (e.g., Apples, Milk, Bread). Configure this to run only if the table is empty to prevent duplicate data.
8. **Configure Convex Auth**
   * **Spec**: Create convex/auth.config.ts. Configure it to use Clerk as the auth provider.

### **Phase 3: Shared UI Package**

9. **Setup packages/ui**
   * **Spec**: Initialize a package.json inside packages/ui and add core dependencies.
10. **Install shadcn/ui Components**
    * **Spec**: Using the shadcn-ui CLI, install the planned components (Button, Card, Table, etc.) into the packages/ui directory.

### **Phase 4: Application Setup**

11. **Initialize apps/website**
    * **Spec**: Use create-next-app to initialize the project in apps/website. Configure tailwind.config.js and tsconfig.json.
12. **Initialize apps/product**
    * **Spec**: Repeat the process for the apps/product directory.
13. **Initialize apps/admin**
    * **Spec**: Repeat the process for the apps/admin directory.
14. **Initialize apps/docs**
    * **Spec**: Repeat the process for the apps/docs directory.

### **Phase 5: Building the Applications (Pages & Components)**

15. **website: Create Layout & Pages**
    * **Spec**: Build the root layout, home page, and placeholder pages for pricing, about, and blog as planned.
16. **product: Configure Clerk & Auth Pages**
    * **Spec**: In apps/product, wrap the root layout in ClerkProvider and create the sign-in and sign-up pages using Clerk's components.
17. **product: Create Welcome Email Action**
    * **Spec**: In Convex, create an HTTP action (e.g., in convex/http.ts) that serves as a webhook for Clerk. This action should be triggered on the user.created event from Clerk. Inside the action, use the Resend SDK to send a welcome email to the new user. You will need to install the resend npm package.
18. **product: Create Dashboard Layout**
    * **Spec**: Build the secure layout for the authenticated part of the app, including sidebar navigation and a header with Clerk's \<UserButton /\>.
19. **product: Create Dashboard, Settings & Groceries Pages**
    * **Spec**:
      * Build the dashboard/page.tsx with Card components.
      * Build the settings/page.tsx with Input and Label.
      * Create a new directory groceries/.
      * In groceries/page.tsx, use the Table component to fetch and display the list of groceries from Convex.
      * In groceries/\[groceryId\]/page.tsx, create a detail view that shows the name and quantity of a selected grocery item.
20. **docs: Create Introduction Page**
    * **Spec**: In apps/docs, create the introduction page with setup instructions.
21. **admin: Create Dashboard & Users Pages**
    * **Spec**: In apps/admin, build the dashboard and users pages, using Table for the user list.

### **Phase 6: Initialize Handbook**

22. **Create Handbook Documentation**
    * **Spec**: In the handbook/ directory, create the following Markdown files:
      * 00-introduction.md: An overview of pdt-starter and its purpose.
      * 01-app-website.md: Documentation for the website application.
      * 02-app-product.md: Documentation for the product application.
      * 03-app-admin.md: Documentation for the admin application.
      * 04-app-docs.md: Documentation for the docs application.
      * 05-backend-convex.md: An overview of the Convex setup and schema.

### **Phase 7: Finalization**

23. **Create Root README.md**
    * **Spec**: Write a comprehensive README.md in the root directory with an overview and setup instructions.
24. **Create .env.example**
    * **Spec**: Create a .env.example file in the root, listing all required environment variables, including RESEND_API_KEY.
