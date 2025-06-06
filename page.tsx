"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Maximize2, Minimize2, Search, MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// This would come from your API in a real app
const properties = [
  {
    id: 1,
    title: "Modern Apartment with City View",
    location: "Jubilee Hills, Hyderabad",
    price: "₹1.2 Cr",
    type: "Apartment",
    coordinates: { lat: 17.4265, lng: 78.4288 },
  },
  {
    id: 2,
    title: "Luxurious Villa with Pool",
    location: "Whitefield, Bangalore",
    price: "₹3.5 Cr",
    type: "Villa",
    coordinates: { lat: 12.9698, lng: 77.7500 },
  },
  {
    id: 3,
    title: "Penthouse with Terrace Garden",
    location: "Banjara Hills, Hyderabad",
    price: "₹2.8 Cr",
    type: "Apartment",
    coordinates: { lat: 17.4156, lng: 78.4347 },
  },
  {
    id: 4,
    title: "Contemporary 3BHK Apartment",
    location: "Indiranagar, Bangalore",
    price: "₹1.8 Cr",
    type: "Apartment",
    coordinates: { lat: 12.9784, lng: 77.6408 },
  },
  {
    id: 5,
    title: "Garden View Bungalow",
    location: "Aluva, Kochi",
    price: "₹1.5 Cr",
    type: "House",
    coordinates: { lat: 10.1004, lng: 76.3570 },
  },
  {
    id: 6,
    title: "Beachfront Villa",
    location: "ECR, Chennai",
    price: "₹4.2 Cr",
    type: "Villa",
    coordinates: { lat: 12.9150, lng: 80.2496 },
  },
];

export default function MapPage() {
  const [expanded, setExpanded] = useState(false);
  const [selectedCity, setSelectedCity] = useState("all");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [showSaleProperties, setShowSaleProperties] = useState(true);
  const [showRentalProperties, setShowRentalProperties] = useState(true);

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Panel */}
        <div className="lg:w-1/4">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <Label>Search Location</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input className="pl-9" placeholder="Search by location..." />
                </div>
              </div>

              <div className="space-y-2">
                <Label>City</Label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Cities</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                    <SelectItem value="kochi">Kochi</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Property Type</Label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="plot">Plot</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Price Range</Label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Price</SelectItem>
                    <SelectItem value="0-50">Under ₹50L</SelectItem>
                    <SelectItem value="50-100">₹50L - ₹1Cr</SelectItem>
                    <SelectItem value="100-200">₹1Cr - ₹2Cr</SelectItem>
                    <SelectItem value="200+">Above ₹2Cr</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Property Status</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="sale" 
                      checked={showSaleProperties}
                      onCheckedChange={(checked) => setShowSaleProperties(checked as boolean)}
                    />
                    <Label htmlFor="sale">For Sale</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="rent" 
                      checked={showRentalProperties}
                      onCheckedChange={(checked) => setShowRentalProperties(checked as boolean)}
                    />
                    <Label htmlFor="rent">For Rent</Label>
                  </div>
                </div>
              </div>

              <Button className="w-full">
                Apply Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Map Container */}
        <div className="lg:w-3/4">
          <Card className={`overflow-hidden transition-all ${expanded ? 'h-[80vh]' : 'h-[600px]'}`}>
            <div className="relative w-full h-full bg-muted">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center p-4">
                  <p>Interactive map would display here showing all {properties.length} properties</p>
                  <div className="mt-4 space-y-2">
                    {properties.map(property => (
                      <div key={property.id} className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{property.title} - {property.location}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}