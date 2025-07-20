import { ProductLayout } from "@/components/product-layout";

export default function SettingsPage() {
  return (
    <ProductLayout title="Settings">
      <div className="flex flex-col space-y-6 py-12">
        <h2 className="text-3xl font-bold">Account Settings</h2>
        <div className="grid gap-4">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Profile Information</h3>
            <p className="text-muted-foreground">Update your name, email, and other personal details.</p>
            {/* Placeholder for profile form */}
            <div className="mt-4">
              <p>Form fields will go here.</p>
            </div>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Password Management</h3>
            <p className="text-muted-foreground">Change your password or set up two-factor authentication.</p>
            {/* Placeholder for password form */}
            <div className="mt-4">
              <p>Form fields will go here.</p>
            </div>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Billing & Subscriptions</h3>
            <p className="text-muted-foreground">Manage your subscription plan and billing information.</p>
            {/* Placeholder for billing details */}
            <div className="mt-4">
              <p>Billing details will go here.</p>
            </div>
          </div>
        </div>
      </div>
    </ProductLayout>
  );
}