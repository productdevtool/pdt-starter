import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <div className="max-w-5xl mx-auto w-full">
              <Header />
              <div className="flex-1">
                <div className="flex-1 items-start md:grid md:grid-cols-[1fr_3fr] md:gap-6 lg:gap-10">
                  <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] shrink-0 overflow-y-auto md:block">
                    <Sidebar />
                  </aside>
                  <main className="relative py-6 lg:gap-10 lg:py-8">
                    {children}
                  </main>
                </div>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
