import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { CheckCircle, Settings, TrendingUp, Users } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Revolutionize Your Workflow
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Our SaaS solution helps you streamline your processes, boost productivity, and achieve your goals faster.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/pricing">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Why Choose Our Solution?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the key advantages that make our SaaS platform stand out.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Increased Efficiency</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Automate repetitive tasks and optimize your workflows for maximum productivity.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Cost Savings</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Reduce operational costs and reallocate resources to more critical areas.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Scalability</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our platform grows with your business, adapting to your evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Powerful Features to Boost Your Business
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore the comprehensive features designed to enhance your productivity and growth.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <Settings className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Customizable Dashboards</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Tailor your dashboard to display the metrics and information most relevant to you.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 text-center">
              <TrendingUp className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Advanced Analytics</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Gain deep insights into your data with powerful and intuitive analytics tools.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 text-center">
              <Users className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Team Collaboration</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Facilitate seamless teamwork with integrated collaboration features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Join thousands of satisfied customers who are already experiencing the benefits of our SaaS solution.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/signup">Start Your Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
