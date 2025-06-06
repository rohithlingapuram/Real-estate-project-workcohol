import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">
            Whether you're looking to buy, sell, or rent, we have the tools and expertise to help you succeed.
            Join thousands of satisfied customers who've found their dream properties through our platform.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/buy">
              <Button size="lg" variant="secondary">
                Start Browsing
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                Create an Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}