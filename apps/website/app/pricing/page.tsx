import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Pricing Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Simple, Transparent Pricing
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Choose the plan that best fits your needs and start revolutionizing your workflow today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {/* Basic Plan */}
            <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-950">
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Basic</h3>
                <p className="text-gray-500 dark:text-gray-400">For individuals and small teams.</p>
                <div className="text-4xl font-bold">$19</div>
                <div className="text-sm text-gray-500">per month</div>
                <ul className="grid gap-2 py-4">
                  <li>
                    <Check className="mr-2 inline-block h-4 w-4" />
                    5 Users
                  </li>
                  <li>
                    <Check className="mr-2 inline-block h-4 w-4" />
                    10GB Storage
                  </li>
                  <li>
                    <Check className="mr-2 inline-block h-4 w-4" />
                    Basic Support
                  </li>
                </ul>
              </div>
              <Button asChild className="mt-6 w-full">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="relative flex flex-col justify-between rounded-lg border-2 border-primary bg-white p-6 shadow-lg dark:bg-gray-950">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                Most Popular
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Pro</h3>
                <p className="text-gray-500 dark:text-gray-400">For growing businesses.</p>
                <div className="text-4xl font-bold">$49</div>
                <div className="text-sm text-gray-500">per month</div>
                <ul className="grid gap-2 py-4">
                  <li>
                    <Check className="mr-2 inline-block h-4 w-4" />
                    25 Users
                  </li>
                  <li>
                    <Check className="mr-2 inline-block h-4 w-4" />
                    100GB Storage
                  </li>
                  <li>
                    <Check className="mr-2 inline-block h-4 w-4" />
                    Priority Support
                  </li>
                  <li>
                    <Check className="mr-2 inline-block h-4 w-4" />
                    Advanced Analytics
                  </li>
                </ul>
              </div>
              <Button asChild className="mt-6 w-full">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-950">
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Enterprise</h3>
                <p className="text-gray-500 dark:text-gray-400">For large organizations.</p>
                <div className="text-4xl font-bold">$99</div>
                <div className="text-sm text-gray-500">per month</div>
                <ul className="grid gap-2 py-4">
                  <li>
                    <Check className="mr-2 inline-block h-4 w-4" />
                    Unlimited Users
                  </li>
                  <li>
                    <Check className="mr-2 inline-block h-4 w-4" />
                    Unlimited Storage
                  </li>
                  <li>
                    <Check className="mr-2 inline-block h-4 w-4" />
                    Dedicated Support
                  </li>
                  <li>
                    <Check className="mr-2 inline-block h-4 w-4" />
                    Custom Integrations
                  </li>
                </ul>
              </div>
              <Button asChild className="mt-6 w-full">
                <Link href="/signup">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}