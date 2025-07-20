export default function Page() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-col gap-4 max-w-2xl w-full mx-auto">
        <h1 className="text-3xl font-bold mb-4">Getting Started</h1>

        <p className="text-lg">
          This guide will walk you through the process of setting up the project for local development.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Prerequisites</h2>
        <p>Before you begin, ensure you have the following installed:</p>
        <ul className="list-disc list-inside ml-4">
          <li><a href="https://nodejs.org/" className="text-blue-500 hover:underline">Node.js</a> (version 20 or higher)</li>
          <li><a href="https://pnpm.io/" className="text-blue-500 hover:underline">pnpm</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Installation</h2>
        <p>1. <strong>Clone the repository:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md w-full overflow-x-auto"><code className="text-gray-800 dark:text-gray-200">git clone https://github.com/your-username/your-repository.git
cd your-repository</code></pre>

        <p>2. <strong>Install dependencies:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md w-full overflow-x-auto"><code className="text-gray-800 dark:text-gray-200">pnpm install</code></pre>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Environment Variables</h2>
        <p>
          This project uses <a href="https://www.convex.dev/" className="text-blue-500 hover:underline">Convex</a> for the backend and <a href="https://clerk.com/" className="text-blue-500 hover:underline">Clerk</a> for authentication.
          You will need to create a <code>.env</code> file in the root of the project and add the following environment variables:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md w-full overflow-x-auto"><code className="text-gray-800 dark:text-gray-200"># .env

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Convex
CONVEX_DEPLOYMENT=</code></pre>
        <p>You can get these values from your Clerk and Convex dashboards.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Running the Development Servers</h2>
        <p>
          To start the development servers for all the applications, run the following command from the root of the project:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md w-full overflow-x-auto"><code className="text-gray-800 dark:text-gray-200">pnpm dev</code></pre>
        <p>This will start the following applications:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Admin:</strong> <code>http://localhost:3301</code></li>
          <li><strong>Docs:</strong> <code>http://localhost:3302</code></li>
          <li><strong>Product:</strong> <code>http://localhost:3303</code></li>
          <li><strong>Website:</strong> <code>http://localhost:3304</code></li>
        </ul>
        <p>You can also run each application individually by navigating to its directory and running <code>pnpm dev</code>.</p>
      </div>
    </div>
  )
}
