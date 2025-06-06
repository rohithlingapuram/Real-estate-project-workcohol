import { Building, Search, Key, Check, ShieldCheck, BadgePercent } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "Search Properties",
    description: "Browse thousands of properties across India's major cities with our advanced filters.",
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Tour Homes",
    description: "Schedule visits to your favorite properties through our platform.",
  },
  {
    icon: <Key className="h-10 w-10 text-primary" />,
    title: "Close the Deal",
    description: "Finalize your purchase or rental with our secure transaction system.",
  },
];

const features = [
  {
    icon: <Check className="h-6 w-6 text-primary" />,
    title: "Verified Listings",
    description: "All our properties are verified by our team for authenticity and accuracy.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: "Secure Transactions",
    description: "Our platform ensures your financial transactions are secure and protected.",
  },
  {
    icon: <BadgePercent className="h-6 w-6 text-primary" />,
    title: "Best Deals",
    description: "We regularly negotiate with property owners to get you the best possible rates.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Our simple process makes finding and acquiring your dream property easy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-card">
              <div className="mb-4 p-3 rounded-full bg-primary/10">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted rounded-xl p-8 mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold tracking-tight">Why Choose Us</h3>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              We're committed to providing the best real estate experience possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start p-4">
                <div className="mr-4 mt-1">{feature.icon}</div>
                <div>
                  <h4 className="text-lg font-medium mb-1">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}