"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Building2, Bed, Bath, Heart, ArrowUpDown, Grid, List } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number | null;
  bathrooms: number;
  area: string;
  image: string;
  coordinates: { lat: number; lng: number };
  label?: string;
}

interface PropertyGridProps {
  properties: Property[];
}

export default function PropertyGrid({ properties }: PropertyGridProps) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  // Sorting logic would be implemented here in a real app
  const sortedProperties = [...properties];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-muted-foreground">
          {properties.length} properties found
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Sort:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex border rounded-md">
            <Button
              variant={view === "grid" ? "default" : "ghost"}
              size="icon"
              className="rounded-none rounded-l-md"
              onClick={() => setView("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={view === "list" ? "default" : "ghost"}
              size="icon"
              className="rounded-none rounded-r-md"
              onClick={() => setView("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className={
        view === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
          : "space-y-6"
      }>
        {sortedProperties.map((property) => (
          <Card key={property.id} className={`overflow-hidden transition-all hover:shadow-md ${
            view === "list" ? "flex flex-col md:flex-row" : ""
          }`}>
            <div className={`${view === "list" ? "md:w-1/3" : ""} relative`}>
              <AspectRatio ratio={16 / 9}>
                <img
                  src={property.image}
                  alt={property.title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              {property.label && (
                <Badge className="absolute top-3 left-3">{property.label}</Badge>
              )}
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
            <div className={`flex flex-col ${view === "list" ? "md:w-2/3" : ""}`}>
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
                    {property.bedrooms !== null && (
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
                {view === "list" && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    A beautiful property with all modern amenities and a stunning view. Located in a prime area with easy access to major highways and public transportation.
                  </p>
                )}
              </CardContent>
              <CardFooter className="p-4 pt-0 mt-auto">
                <Link href={`/property/${property.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}