export default function Page() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-col gap-4 max-w-2xl w-full mx-auto">
        <h1 className="text-3xl font-bold mb-4">Convex Setup</h1>

        <p className="text-lg">
          This guide will walk you through the process of setting up Convex for your project.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Prerequisites</h2>
        <p>Before you begin, ensure you have the following installed:</p>
        <ul className="list-disc list-inside ml-4">
          <li><a href="https://www.convex.dev/" className="text-blue-500 hover:underline">Convex CLI</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Installation</h2>
        <p>1. <strong>Login to Convex:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md w-full overflow-x-auto"><code className="text-gray-800 dark:text-gray-200">npx convex login</code></pre>

        <p>2. <strong>Deploy your Convex functions:</strong></p>
        <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md w-full overflow-x-auto"><code className="text-gray-800 dark:text-gray-200">npx convex deploy</code></pre>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Environment Variables</h2>
        <p>
          After deploying, you will get a deployment URL. Add this to your <code>.env</code> file:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md w-full overflow-x-auto"><code className="text-gray-800 dark:text-gray-200"># .env

CONVEX_DEPLOYMENT=your_deployment_url</code></pre>
      </div>
    </div>
  )
}
