import { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { ExamplesNav } from "@/components/examples-nav"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  
} from "@/components/page-header"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { Separator } from "@/registry/new-york/ui/separator"

export const metadata: Metadata = {
  title: "Examples",
  description: "Check out some examples app built using the components.",
}

interface ExamplesLayoutProps {
  children: React.ReactNode
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <>
      <div className="container relative">
      <PageHeader className="page-header pb-4">
          <Link
            href="/docs/changelog"
            className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          >
            🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
            <span className="sm:hidden">Explore the latest features.</span>
            <span className="hidden sm:inline">
              Explore the latest features.
            </span>
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Link>
          <PageHeaderHeading className="hidden md:block">
            Welcome to Galaxy 
          </PageHeaderHeading>
          <PageHeaderHeading className="md:hidden">Welcome to Galaxy</PageHeaderHeading>
          <PageHeaderDescription>
            Dashboard, E-commerce, Blog and more.
          </PageHeaderDescription>
          <section className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
            <Link
              href="/docs"
              className={cn(buttonVariants(), "rounded-[6px]")}
            >
              Get Started
            </Link>
            <Link
              href="/components"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-[6px]"
              )}
            >
              Become a Partner &rarr;

            </Link>
          </section>
        </PageHeader>
          <ExamplesNav />
        <section>
          <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
            {children}
          </div>
        </section>
      </div>
    </>
  )
}
