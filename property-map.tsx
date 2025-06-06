"use client";

import { useRef, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2 } from "lucide-react";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  coordinates: { lat: number; lng: number };
}

interface PropertyMapProps {
  properties: Property[];
}

export default function PropertyMap({ properties }: PropertyMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  // In a real implementation, we would use a proper map library like Google Maps, Mapbox, or Leaflet
  // For this demo, we're just showing a placeholder
  
  useEffect(() => {
    // This would be where we initialize the map
    if (mapRef.current) {
      // Map initialization code would go here
      // For example: new google.maps.Map(mapRef.current, {...})
    }
  }, [properties]);

  return (
    <Card className={`overflow-hidden transition-all ${expanded ? 'h-[70vh]' : 'h-[300px]'}`}>
      <div className="relative w-full h-full bg-muted">
        <div 
          ref={mapRef}
          className="w-full h-full flex items-center justify-center text-muted-foreground"
        >
          <div className="text-center p-4">
            <p>Interactive map would display here with markers for all {properties.length} properties</p>
            <p className="text-sm mt-2">Using location data for Hyderabad, Bangalore, Chennai, and Kochi</p>
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
  );
}