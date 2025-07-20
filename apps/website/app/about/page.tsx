import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { Lightbulb, Target, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* About Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About Our Company
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We are a passionate team dedicated to building innovative solutions that empower businesses.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <Target className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-gray-500 dark:text-gray-400">
                To provide cutting-edge SaaS solutions that simplify complex workflows and drive business growth.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 text-center">
              <Lightbulb className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-gray-500 dark:text-gray-400">
                To be the leading provider of innovative and user-friendly software, transforming the way businesses operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Meet Our Team
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We are a diverse group of talented individuals passionate about technology and innovation.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {/* Placeholder for team members */}
              <div className="flex flex-col items-center space-y-2">
                <Users className="h-16 w-16 text-gray-400" />
                <h4 className="font-bold">Team Member 1</h4>
                <p className="text-sm text-gray-500">Role</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Users className="h-16 w-16 text-gray-400" />
                <h4 className="font-bold">Team Member 2</h4>
                <p className="text-sm text-gray-500">Role</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Users className="h-16 w-16 text-gray-400" />
                <h4 className="font-bold">Team Member 3</h4>
                <p className="text-sm text-gray-500">Role</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}