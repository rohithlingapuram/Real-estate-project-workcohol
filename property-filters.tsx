"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, ArrowDownUp, RotateCcw } from "lucide-react";

export default function PropertyFilters() {
  const [priceRange, setPriceRange] = useState([20, 80]);
  const [expanded, setExpanded] = useState(true);

  return (
    <Card className="sticky top-24">
      <CardHeader className="flex flex-row items-center justify-between px-4 py-3">
        <CardTitle className="text-base font-medium">Filters</CardTitle>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowDownUp className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => {}}>
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <Accordion
          type="single"
          collapsible
          defaultValue="location"
          className="space-y-4"
        >
          <AccordionItem value="location" className="border-none">
            <AccordionTrigger className="py-2 text-base font-medium">Location</AccordionTrigger>
            <AccordionContent className="pb-2 pt-1">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <select className="w-full rounded-md border border-input bg-transparent px-3 py-2">
                    <option>All Cities</option>
                    <option>Hyderabad</option>
                    <option>Bangalore</option>
                    <option>Chennai</option>
                    <option>Kochi</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area">Area/Locality</Label>
                  <Input id="area" placeholder="Enter area or locality" />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price" className="border-none">
            <AccordionTrigger className="py-2 text-base font-medium">Price Range</AccordionTrigger>
            <AccordionContent className="pb-2 pt-1">
              <div className="space-y-6">
                <Slider
                  value={priceRange}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={setPriceRange}
                />
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="min-price">Min Price</Label>
                    <Input
                      id="min-price"
                      value={`₹${priceRange[0] * 10}L`}
                      className="mt-1"
                      readOnly
                    />
                  </div>
                  <div>
                    <Label htmlFor="max-price">Max Price</Label>
                    <Input
                      id="max-price"
                      value={`₹${priceRange[1] * 10}L`}
                      className="mt-1"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="property-type" className="border-none">
            <AccordionTrigger className="py-2 text-base font-medium">Property Type</AccordionTrigger>
            <AccordionContent className="pb-2 pt-1">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="type-apartment" />
                  <Label htmlFor="type-apartment">Apartment</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="type-villa" />
                  <Label htmlFor="type-villa">Villa</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="type-house" />
                  <Label htmlFor="type-house">Independent House</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="type-plot" />
                  <Label htmlFor="type-plot">Plot/Land</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="type-commercial" />
                  <Label htmlFor="type-commercial">Commercial</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="bedrooms" className="border-none">
            <AccordionTrigger className="py-2 text-base font-medium">Bedrooms</AccordionTrigger>
            <AccordionContent className="pb-2 pt-1">
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, "5+"].map((num) => (
                  <Button
                    key={num}
                    variant="outline"
                    className="h-10 rounded-md px-3"
                  >
                    {num} {typeof num === "number" && num === 1 ? "BHK" : "BHK"}
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="bathrooms" className="border-none">
            <AccordionTrigger className="py-2 text-base font-medium">Bathrooms</AccordionTrigger>
            <AccordionContent className="pb-2 pt-1">
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, "4+"].map((num) => (
                  <Button
                    key={num}
                    variant="outline"
                    className="h-10 rounded-md px-3"
                  >
                    {num}
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="amenities" className="border-none">
            <AccordionTrigger className="py-2 text-base font-medium">Amenities</AccordionTrigger>
            <AccordionContent className="pb-2 pt-1">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="amenity-parking" />
                  <Label htmlFor="amenity-parking">Parking</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="amenity-pool" />
                  <Label htmlFor="amenity-pool">Swimming Pool</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="amenity-gym" />
                  <Label htmlFor="amenity-gym">Gym</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="amenity-security" />
                  <Label htmlFor="amenity-security">Security</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="amenity-elevator" />
                  <Label htmlFor="amenity-elevator">Elevator</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="amenity-garden" />
                  <Label htmlFor="amenity-garden">Garden</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-6 space-y-3">
          <Button className="w-full">
            <Search className="mr-2 h-4 w-4" />
            Apply Filters
          </Button>
          <Button variant="outline" className="w-full" onClick={() => {}}>
            Reset Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}