"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Homeowner",
    avatar: "PS",
    content: "After months of searching, I found my dream home through RealEstate. The platform was so easy to use, and the filters helped me narrow down exactly what I was looking for. The transaction process was smooth and transparent.",
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Property Investor",
    avatar: "RP",
    content: "As an investor, I've used many real estate platforms, but this one stands out. The detailed property information and market insights helped me make informed decisions. I've purchased three properties through RealEstate so far.",
  },
  {
    id: 3,
    name: "Aisha Khan",
    role: "First-time Buyer",
    avatar: "AK",
    content: "Being a first-time homebuyer was intimidating, but RealEstate made it easier. The resources and guides on the platform helped me understand the process, and I found a perfect apartment in Bangalore within my budget.",
  },
  {
    id: 4,
    name: "Vijay Reddy",
    role: "Property Seller",
    avatar: "VR",
    content: "Listing my property on RealEstate got me more visibility than I expected. Within weeks, I had multiple offers, and the team helped me negotiate the best deal. The selling process was streamlined and efficient.",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const displayCount = 3;
  const maxIndex = testimonials.length - displayCount;

  const handlePrevious = () => {
    setStartIndex(current => Math.max(0, current - 1));
  };

  const handleNext = () => {
    setStartIndex(current => Math.min(maxIndex, current + 1));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">What Our Clients Say</h2>
            <p className="text-muted-foreground mt-2">
              Read about the experiences of people who found their perfect property
            </p>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={startIndex === 0}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={startIndex >= maxIndex}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(startIndex, startIndex + displayCount).map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}