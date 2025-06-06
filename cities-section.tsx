import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const cities = [
  {
    id: "hyderabad",
    name: "Hyderabad",
    properties: 1245,
    image: "https://images.pexels.com/photos/10070972/pexels-photo-10070972.jpeg",
  },
  {
    id: "bangalore",
    name: "Bangalore",
    properties: 1892,
    image: "https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg",
  },
  {
    id: "chennai",
    name: "Chennai",
    properties: 945,
    image: "https://images.pexels.com/photos/10070972/pexels-photo-10070972.jpeg",
  },
  {
    id: "kochi",
    name: "Kochi",
    properties: 637,
    image: "https://images.pexels.com/photos/1033729/pexels-photo-1033729.jpeg",
  },
];

export default function CitiesSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Explore Properties by City</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Discover available properties in India's most vibrant and growing cities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <Link key={city.id} href={`/city/${city.id}`}>
              <Card className="overflow-hidden h-full transition-all hover:-translate-y-1 hover:shadow-md">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={city.image} 
                    alt={city.name}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">{city.name}</h3>
                  <p className="text-white/80 text-sm">{city.properties} properties</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}