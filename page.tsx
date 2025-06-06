import PropertyFilters from "@/components/properties/property-filters";
import PropertyGrid from "@/components/properties/property-grid";
import PropertyMap from "@/components/properties/property-map";

// This would come from your API in a real app
const properties = [
  {
    id: 1,
    title: "Modern Apartment with City View",
    location: "Jubilee Hills, Hyderabad",
    price: "₹1.2 Cr",
    bedrooms: 3,
    bathrooms: 2,
    area: "1800 sq.ft",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    coordinates: { lat: 17.4265, lng: 78.4288 },
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
    coordinates: { lat: 12.9698, lng: 77.7500 },
    label: "Premium"
  },
  {
    id: 3,
    title: "Penthouse with Terrace Garden",
    location: "Banjara Hills, Hyderabad",
    price: "₹2.8 Cr",
    bedrooms: 3,
    bathrooms: 3,
    area: "2800 sq.ft",
    image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
    coordinates: { lat: 17.4156, lng: 78.4347 },
    label: "New"
  },
  {
    id: 4,
    title: "Contemporary 3BHK Apartment",
    location: "Indiranagar, Bangalore",
    price: "₹1.8 Cr",
    bedrooms: 3,
    bathrooms: 3,
    area: "1950 sq.ft",
    image: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg",
    coordinates: { lat: 12.9784, lng: 77.6408 },
    label: ""
  },
  {
    id: 5,
    title: "Garden View Bungalow",
    location: "Aluva, Kochi",
    price: "₹1.5 Cr",
    bedrooms: 4,
    bathrooms: 3,
    area: "2200 sq.ft",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    coordinates: { lat: 10.1004, lng: 76.3570 },
    label: ""
  },
  {
    id: 6,
    title: "Beachfront Villa",
    location: "ECR, Chennai",
    price: "₹4.2 Cr",
    bedrooms: 5,
    bathrooms: 5.5,
    area: "5000 sq.ft",
    image: "https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg",
    coordinates: { lat: 12.9150, lng: 80.2496 },
    label: "Luxury"
  },
];

export default function BuyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Properties for Sale</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 xl:w-1/4">
          <PropertyFilters />
        </div>
        
        <div className="lg:w-2/3 xl:w-3/4 space-y-8">
          <PropertyMap properties={properties} />
          <PropertyGrid properties={properties} />
        </div>
      </div>
    </div>
  );
}