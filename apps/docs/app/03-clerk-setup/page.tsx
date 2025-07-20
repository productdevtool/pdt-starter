export default function Page() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-col gap-4 max-w-2xl w-full mx-auto">
        <h1 className="text-3xl font-bold mb-4">Clerk Setup</h1>

        <p className="text-lg">
          This guide will walk you through the process of setting up Clerk for your project.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Prerequisites</h2>
        <p>Before you begin, ensure you have the following:</p>
        <ul className="list-disc list-inside ml-4">
          <li>A <a href="https://clerk.com/" className="text-blue-500 hover:underline">Clerk account</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Environment Variables</h2>
        <p>
          You will need to add the following environment variables to your <code>.env</code> file:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md w-full overflow-x-auto"><code className="text-gray-800 dark:text-gray-200"># .env

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=</code></pre>
        <p>You can get these values from your Clerk dashboard.</p>
      </div>
    </div>
  )
}
