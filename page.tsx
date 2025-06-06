"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home, Upload, Building2, CheckCircle } from "lucide-react";

export default function SellPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Home className="h-4 w-4 mr-2" />
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/sell">Sell</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">List Your Property</h1>
          <p className="text-muted-foreground mt-2">
            Reach thousands of potential buyers by listing your property on our platform
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index + 1 <= currentStep 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="text-xs mt-2 text-muted-foreground">
                  {index === 0 && "Basic Info"}
                  {index === 1 && "Details"}
                  {index === 2 && "Photos"}
                  {index === 3 && "Review"}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 relative">
            <div className="absolute top-0 left-0 h-1 bg-muted w-full"></div>
            <div
              className="absolute top-0 left-0 h-1 bg-primary transition-all"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Basic Info */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Basic Property Information</CardTitle>
              <CardDescription>
                Let's start with some basic details about your property
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="property-type">Property Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">Independent House</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="plot">Plot/Land</SelectItem>
                      <SelectItem value="commercial">Commercial Property</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="listing-type">Listing Type</Label>
                  <Tabs defaultValue="sale" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="sale">For Sale</TabsTrigger>
                      <TabsTrigger value="rent">For Rent</TabsTrigger>
                    </TabsList>
                    <TabsContent value="sale" className="space-y-4 pt-4">
                      <div>
                        <Label htmlFor="price">Expected Price (₹)</Label>
                        <Input id="price" type="text" placeholder="e.g., 1,50,00,000" />
                      </div>
                    </TabsContent>
                    <TabsContent value="rent" className="space-y-4 pt-4">
                      <div>
                        <Label htmlFor="monthly-rent">Monthly Rent (₹)</Label>
                        <Input id="monthly-rent" type="text" placeholder="e.g., 25,000" />
                      </div>
                      <div>
                        <Label htmlFor="security-deposit">Security Deposit (₹)</Label>
                        <Input id="security-deposit" type="text" placeholder="e.g., 1,00,000" />
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hyderabad">Hyderabad</SelectItem>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                        <SelectItem value="chennai">Chennai</SelectItem>
                        <SelectItem value="kochi">Kochi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="locality">Locality/Area</Label>
                    <Input id="locality" type="text" placeholder="e.g., Jubilee Hills" />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button onClick={() => setCurrentStep(2)}>
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Property Details */}
        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
              <CardDescription>
                Provide more details about your property to attract potential buyers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, "6+"].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {typeof num === "number" && num === 1 ? "Bedroom" : "Bedrooms"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, "5+"].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {typeof num === "number" && num === 1 ? "Bathroom" : "Bathrooms"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="area">Built-up Area</Label>
                  <div className="flex space-x-2">
                    <Input id="area" type="text" placeholder="e.g., 1800" />
                    <Select defaultValue="sqft">
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sqft">sq.ft</SelectItem>
                        <SelectItem value="sqm">sq.m</SelectItem>
                        <SelectItem value="acre">acre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Property Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your property, including its unique features, condition, and why it's a great investment..."
                  rows={6}
                />
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-3">Amenities & Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Parking", "24/7 Security", "Swimming Pool", "Gym", 
                    "Garden/Terrace", "Power Backup", "Lift", "Clubhouse", 
                    "Gas Pipeline", "Water Storage", "Air Conditioning", "Internet"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox id={`feature-${feature}`} />
                      <Label htmlFor={`feature-${feature}`} className="text-sm">
                        {feature}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  Previous
                </Button>
                <Button onClick={() => setCurrentStep(3)}>
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Property Photos */}
        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Upload Photos</CardTitle>
              <CardDescription>
                Add high-quality photos to showcase your property
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <div className="flex flex-col items-center">
                  <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Drag and drop your photos here</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Or click to browse files from your computer
                  </p>
                  <Button>
                    Upload Photos
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Photo Tips:</h3>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Add at least 5 photos of your property</li>
                  <li>Include photos of all rooms, exterior, and any special features</li>
                  <li>Use good lighting to show your property at its best</li>
                  <li>Ensure photos are at least 1024x768 pixels for quality</li>
                </ul>
              </div>

              <div className="pt-4 flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(2)}>
                  Previous
                </Button>
                <Button onClick={() => setCurrentStep(4)}>
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Review */}
        {currentStep === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>Review Your Listing</CardTitle>
              <CardDescription>
                Review your property details before publishing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-muted rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Property Type</p>
                      <p className="font-medium">Apartment</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Listing Type</p>
                      <p className="font-medium">For Sale</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="font-medium">₹1.2 Cr</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Jubilee Hills, Hyderabad</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Bedrooms</p>
                      <p className="font-medium">3</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Bathrooms</p>
                      <p className="font-medium">2</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Area</p>
                      <p className="font-medium">1800 sq.ft</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold mb-1">Description</h3>
                  <p className="text-muted-foreground text-sm">
                    A beautiful and spacious 3BHK apartment with modern amenities and a stunning view of the city. 
                    Located in the heart of Jubilee Hills, this property offers a perfect blend of luxury and convenience.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold mb-1">Photos</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="rounded-md overflow-hidden">
                        <AspectRatio ratio={1}>
                          <div className="bg-muted w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                            Photo {i}
                          </div>
                        </AspectRatio>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  I confirm that the information provided is accurate and I have the right to list this property.
                </Label>
              </div>

              <div className="pt-4 flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(3)}>
                  Previous
                </Button>
                <Button className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Publish Listing
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}