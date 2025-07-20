import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";

export default function BlogPage() {
  const blogPosts = [
    {
      slug: "first-post",
      title: "Getting Started with Our SaaS Platform",
      snippet: "Learn the basics of setting up your account and making the most of our features.",
    },
    {
      slug: "new-features",
      title: "Exciting New Features Released!",
      snippet: "Discover the latest updates and how they can enhance your workflow.",
    },
    {
      slug: "best-practices",
      title: "Best Practices for Maximizing Productivity",
      snippet: "Tips and tricks to optimize your use of our platform and boost your efficiency.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-24 lg:py-32">
      {/* Blog Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our Latest Insights
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Stay up-to-date with the latest news, tips, and industry trends from our experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-6 md:py-12 lg:py-16">
        <div className="mx-auto grid max-w-2xl items-start gap-6 lg:grid-cols-1 lg:gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="bg-white dark:bg-gray-900">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.snippet}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                  Read More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}