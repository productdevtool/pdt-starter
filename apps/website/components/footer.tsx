export function Footer() {
  return (
    <footer className="py-12 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row max-w-[1200px] mx-auto">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
          © {new Date().getFullYear()} SaaS Company. All rights reserved.
        </p>
      </div>
    </footer>
  )
}