"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Bed, Bath, ArrowRight, Heart } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// This would come from your API in a real app
const featuredProperties = [
  {
    id: 1,
    title: "Modern Apartment with City View",
    location: "Jubilee Hills, Hyderabad",
    price: "₹1.2 Cr",
    bedrooms: 3,
    bathrooms: 2,
    area: "1800 sq.ft",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    type: "buy",
    label: "Featured"
  },
  {
    id: 2,
    title: "Luxurious Villa with Pool",
    location: "Whitefield, Bangalore",
    price: "₹3.5 Cr",
    bedrooms: 4,
    bathrooms: 4.5,
    area: "4200 sq.ft",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    type: "buy",
    label: "Premium"
  },
  {
    id: 3,
    title: "Spacious Office Space",
    location: "MG Road, Kochi",
    price: "₹85,000/mo",
    bedrooms: null,
    bathrooms: 2,
    area: "2500 sq.ft",
    image: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg",
    type: "rent",
    label: "Commercial"
  },
  {
    id: 4,
    title: "Modern Beachfront Apartment",
    location: "ECR, Chennai",
    price: "₹45,000/mo",
    bedrooms: 2,
    bathrooms: 2,
    area: "1200 sq.ft",
    image: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg",
    type: "rent",
    label: "New"
  }
];

export default function FeaturedProperties() {
  const [activeTab, setActiveTab] = useState("buy");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Properties</h2>
            <p className="text-muted-foreground mt-2">
              Explore our handpicked selection of premium properties
            </p>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
            <TabsList>
              <TabsTrigger value="buy">For Sale</TabsTrigger>
              <TabsTrigger value="rent">For Rent</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProperties
            .filter(property => property.type === activeTab)
            .map((property) => (
              <Card key={property.id} className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={property.image}
                      alt={property.title}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <Badge className="absolute top-3 left-3">{property.label}</Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-background/50 backdrop-blur-sm hover:bg-background/70"
                    onClick={() => toggleFavorite(property.id)}
                  >
                    <Heart 
                      className={`h-5 w-5 ${favorites.includes(property.id) ? "fill-red-500 text-red-500" : "text-white"}`} 
                    />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="mb-2 text-xl font-semibold leading-none tracking-tight">{property.title}</div>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Building2 className="mr-1 h-3.5 w-3.5" />
                    {property.location}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="font-semibold text-lg">
                      {property.price}
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      {property.bedrooms && (
                        <div className="flex items-center">
                          <Bed className="mr-1 h-4 w-4" />
                          <span>{property.bedrooms}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Bath className="mr-1 h-4 w-4" />
                        <span>{property.bathrooms}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Link href={`/property/${property.id}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
        </div>

        <div className="mt-10 text-center">
          <Link href={activeTab === "buy" ? "/buy" : "/rent"}>
            <Button variant="outline" size="lg" className="group">
              View All {activeTab === "buy" ? "Properties for Sale" : "Rental Properties"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}