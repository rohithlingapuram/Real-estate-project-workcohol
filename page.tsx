"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Building2,
  Bed,
  Bath,
  MapPin,
  Calendar,
  Heart,
  Share,
  Phone,
  Mail,
  Car,
  Wifi,
  ShieldCheck,
  Trees,
  LandPlot,
  Clock,
  ArrowLeft,
} from "lucide-react";

// This would come from your API in a real app
const property = {
  id: 1,
  title: "Modern Apartment with City View",
  location: "Jubilee Hills, Hyderabad",
  price: "₹1.2 Cr",
  type: "Apartment",
  bedrooms: 3,
  bathrooms: 2,
  area: "1800 sq.ft",
  images: [
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
    "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg",
    "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
  ],
  label: "Featured",
  description: "A beautiful and spacious 3BHK apartment with modern amenities and a stunning view of the city. Located in the heart of Jubilee Hills, this property offers a perfect blend of luxury and convenience. The apartment features a spacious living area, a modern kitchen, and three comfortable bedrooms. The master bedroom has an en-suite bathroom. The apartment also comes with two reserved parking spots.",
  listedDate: "3 weeks ago",
  features: [
    "Modular Kitchen",
    "24/7 Security",
    "Power Backup",
    "Covered Parking",
    "Swimming Pool",
    "Gymnasium",
    "Children's Play Area",
    "Clubhouse",
    "Visitor Parking",
    "Gated Community"
  ],
  agent: {
    name: "Priya Sharma",
    phone: "+91 98765 43210",
    email: "priya@realestate.com",
    image: null,
  }
};

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const [mainImage, setMainImage] = useState(property.images[0]);
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="mb-6">
        <Link href="/buy">
          <Button variant="ghost" size="sm" className="mb-2">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to listings
          </Button>
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{property.title}</h1>
            <p className="text-muted-foreground flex items-center mt-1">
              <MapPin className="mr-1 h-4 w-4" />
              {property.location}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            <Button variant="outline" size="icon">
              <Share className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Property Images */}
          <div className="space-y-2">
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
              <img
                src={mainImage}
                alt={property.title}
                className="object-cover w-full h-full"
              />
              {property.label && (
                <Badge className="absolute top-3 left-3">{property.label}</Badge>
              )}
            </AspectRatio>
            <div className="grid grid-cols-4 gap-2">
              {property.images.map((image, i) => (
                <div
                  key={i}
                  className={`cursor-pointer rounded-md overflow-hidden transition-all ${
                    image === mainImage ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setMainImage(image)}
                >
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={image}
                      alt={`View ${i + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              ))}
            </div>
          </div>

          {/* Property Details Tabs */}
          <Tabs defaultValue="details">
            <TabsList className="grid grid-cols-3 mb-2">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-muted rounded-lg">
                <div className="text-center p-3">
                  <p className="text-sm text-muted-foreground">Type</p>
                  <p className="font-medium">{property.type}</p>
                </div>
                <div className="text-center p-3">
                  <p className="text-sm text-muted-foreground">Area</p>
                  <p className="font-medium">{property.area}</p>
                </div>
                <div className="text-center p-3">
                  <p className="text-sm text-muted-foreground">Bedrooms</p>
                  <p className="font-medium">{property.bedrooms} BHK</p>
                </div>
                <div className="text-center p-3">
                  <p className="text-sm text-muted-foreground">Bathrooms</p>
                  <p className="font-medium">{property.bathrooms}</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{property.description}</p>
              </div>

              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                <span>Listed {property.listedDate}</span>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="space-y-4">
              <h3 className="text-lg font-semibold mb-2">Property Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold mb-2">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Car className="h-5 w-5 text-primary" />
                    <span>Parking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wifi className="h-5 w-5 text-primary" />
                    <span>Internet</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span>Security</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Trees className="h-5 w-5 text-primary" />
                    <span>Garden</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <LandPlot className="h-5 w-5 text-primary" />
                    <span>Spacious</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>24/7 Water</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="location" className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-center p-4 text-muted-foreground">
                  Map showing property location in {property.location} would be displayed here
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Nearby</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>Schools: Delhi Public School (1.2 km)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>Hospitals: Apollo Hospitals (2.5 km)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>Shopping: Inorbit Mall (3.1 km)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>Metro Station: Jubilee Hills Check Post (1.8 km)</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          {/* Price Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{property.price}</CardTitle>
              <CardDescription>
                {property.area} | {property.bedrooms} BHK {property.type}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Schedule A Visit</Button>
              <Button variant="outline" className="w-full">Request More Info</Button>
              <Separator />
              <div className="text-sm text-muted-foreground text-center">
                <p>EMI starts at ₹78,000/month</p>
                <Link href="#" className="text-primary hover:underline">
                  Calculate EMI
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Agent Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold">Listed by</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-3 mb-4">
                <Avatar>
                  <AvatarFallback>PS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{property.agent.name}</p>
                  <p className="text-sm text-muted-foreground">Real Estate Agent</p>
                </div>
              </div>
              <div className="space-y-3">
                <Button variant="outline" className="w-full flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  {property.agent.phone}
                </Button>
                <Button variant="outline" className="w-full flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Agent
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Similar Properties Teaser */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Similar Properties</h3>
            <div className="space-y-4">
              {[1, 2].map((item) => (
                <Link href={`/property/${item + 10}`} key={item}>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex">
                      <div className="w-1/3">
                        <AspectRatio ratio={1} className="h-full">
                          <img
                            src={`https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg`}
                            alt="Similar property"
                            className="object-cover w-full h-full"
                          />
                        </AspectRatio>
                      </div>
                      <div className="w-2/3 p-3">
                        <h4 className="font-medium line-clamp-2 text-sm">
                          Modern {property.bedrooms}BHK {property.type} in {property.location.split(',')[0]}
                        </h4>
                        <p className="text-sm text-primary font-semibold mt-1">₹{item === 1 ? "1.1" : "1.3"} Cr</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}