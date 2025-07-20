import { ProductLayout } from "@/components/product-layout";

export default function SubscriptionsPage() {
  return (
    <ProductLayout title="Subscriptions">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Subscription Overview</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Monitor your active subscriptions, new sign-ups, and churn rates.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex items-center justify-center h-64">
          <p className="text-muted-foreground">[Placeholder for Subscription Chart]</p>
        </div>
      </div>
    </ProductLayout>
  );
}