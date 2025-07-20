# TurboRepo Overview

This document provides an overview of how TurboRepo is used within the pdt-starter monorepo to manage and optimize the development of multiple applications and packages.

## Purpose

TurboRepo is a high-performance build system for JavaScript and TypeScript monorepos. It helps to optimize the build process by caching build artifacts, parallelizing tasks, and providing a unified interface for running scripts across multiple projects.

## Key Features & Concepts

- **Turborepo Remote Caching**: Caches build outputs and shares them across team members and CI/CD environments, significantly speeding up builds.
- **Parallel Execution**: Runs tasks in parallel across different packages, leveraging multi-core processors.
- **Task Orchestration**: Defines and orchestrates tasks (e.g., `build`, `dev`, `lint`) across the monorepo, ensuring dependencies are built in the correct order.
- **Filtering**: Allows running tasks on specific packages or a subset of packages.

## Structure

- `turbo.json`: The main configuration file for TurboRepo, defining tasks, dependencies, and caching strategies.
- `package.json` (root): Contains the `turbo` script that orchestrates tasks across the monorepo.
- `package.json` (workspaces): Each application and package within the `apps/` and `packages/` directories has its own `package.json` with scripts that TurboRepo can orchestrate.

## Common Commands

- `pnpm turbo build`: Builds all projects in the monorepo.
- `pnpm turbo dev`: Starts development servers for all projects (or specified projects).
- `pnpm turbo lint`: Runs linting across all projects.
- `pnpm turbo run <task-name>`: Runs a specific task defined in `turbo.json` or `package.json` scripts across all relevant projects.

## Configuration (`turbo.json`)

The `turbo.json` file defines how TurboRepo should execute tasks. Key sections include:

- `pipeline`: Defines the dependencies between tasks and their caching behavior.
- `globalDependencies`: Specifies files that, when changed, invalidate the cache for all tasks.

### Example `turbo.json` snippet:

```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    },
    "lint": {
      "outputs": []
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

For more detailed information, refer to the official [TurboRepo Documentation](https://turbo.build/repo/docs).
