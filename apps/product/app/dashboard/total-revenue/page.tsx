import { ProductLayout } from "@/components/product-layout";

export default function TotalRevenuePage() {
  return (
    <ProductLayout title="Total Revenue">
      <div className="flex flex-col items-center justify-center py-12">
        <h2 className="text-3xl font-bold mb-4">Detailed Total Revenue</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">This page provides a comprehensive overview of your total revenue.</p>
        <div className="mt-8 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md w-full max-w-md text-center">
          <p className="text-5xl font-extrabold text-primary">$1,234,567.89</p>
          <p className="text-lg text-muted-foreground mt-2">Year-to-Date Revenue</p>
        </div>
        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">Further details and historical data will be displayed here.</p>
      </div>
    </ProductLayout>
  );
}