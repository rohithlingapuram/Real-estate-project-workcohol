"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Search } from "lucide-react";

export default function Hero() {
  const [searchType, setSearchType] = useState("buy");

  return (
    <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg')", 
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 mx-auto h-full px-4 md:px-6">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Find Your Dream Property
          </h1>
          <p className="mb-8 max-w-md text-lg text-white/90 md:max-w-lg">
            Discover thousands of properties across India's major cities. Buy, sell, or rent with confidence.
          </p>

          <div className="w-full max-w-3xl rounded-xl bg-white/95 backdrop-blur-sm p-4 shadow-lg dark:bg-background/95">
            <Tabs defaultValue="buy" className="w-full" onValueChange={setSearchType}>
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="buy">Buy</TabsTrigger>
                <TabsTrigger value="rent">Rent</TabsTrigger>
                <TabsTrigger value="sell">Sell</TabsTrigger>
              </TabsList>
              
              <TabsContent value="buy" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Location</label>
                    <select className="w-full rounded-md border border-input bg-transparent px-3 py-2">
                      <option>Hyderabad</option>
                      <option>Kochi</option>
                      <option>Chennai</option>
                      <option>Bangalore</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Property Type</label>
                    <select className="w-full rounded-md border border-input bg-transparent px-3 py-2">
                      <option>All Types</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                      <option>House</option>
                      <option>Commercial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Price Range</label>
                    <select className="w-full rounded-md border border-input bg-transparent px-3 py-2">
                      <option>Any Price</option>
                      <option>Under ₹50L</option>
                      <option>₹50L - ₹1Cr</option>
                      <option>₹1Cr - ₹2Cr</option>
                      <option>Above ₹2Cr</option>
                    </select>
                  </div>
                </div>
                <Button size="lg" className="w-full">
                  <Search className="mr-2 h-5 w-5" />
                  Search Properties
                </Button>
              </TabsContent>
              
              <TabsContent value="rent" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Location</label>
                    <select className="w-full rounded-md border border-input bg-transparent px-3 py-2">
                      <option>Hyderabad</option>
                      <option>Kochi</option>
                      <option>Chennai</option>
                      <option>Bangalore</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Property Type</label>
                    <select className="w-full rounded-md border border-input bg-transparent px-3 py-2">
                      <option>All Types</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                      <option>House</option>
                      <option>Commercial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Monthly Rent</label>
                    <select className="w-full rounded-md border border-input bg-transparent px-3 py-2">
                      <option>Any Price</option>
                      <option>Under ₹25K</option>
                      <option>₹25K - ₹50K</option>
                      <option>₹50K - ₹1L</option>
                      <option>Above ₹1L</option>
                    </select>
                  </div>
                </div>
                <Button size="lg" className="w-full">
                  <Search className="mr-2 h-5 w-5" />
                  Find Rentals
                </Button>
              </TabsContent>
              
              <TabsContent value="sell" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Property Type</label>
                    <select className="w-full rounded-md border border-input bg-transparent px-3 py-2">
                      <option>Apartment</option>
                      <option>Villa</option>
                      <option>House</option>
                      <option>Commercial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Location</label>
                    <select className="w-full rounded-md border border-input bg-transparent px-3 py-2">
                      <option>Hyderabad</option>
                      <option>Kochi</option>
                      <option>Chennai</option>
                      <option>Bangalore</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Property Age</label>
                    <select className="w-full rounded-md border border-input bg-transparent px-3 py-2">
                      <option>New Construction</option>
                      <option>Less than 5 years</option>
                      <option>5-10 years</option>
                      <option>More than 10 years</option>
                    </select>
                  </div>
                </div>
                <Button size="lg" className="w-full">
                  <Building2 className="mr-2 h-5 w-5" />
                  List Your Property
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}