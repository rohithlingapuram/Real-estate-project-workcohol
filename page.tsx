import PropertyFilters from "@/components/properties/property-filters";
import PropertyGrid from "@/components/properties/property-grid";
import PropertyMap from "@/components/properties/property-map";

// This would come from your API in a real app
const properties = [
  {
    id: 1,
    title: "Modern Apartment with Balcony",
    location: "Banjara Hills, Hyderabad",
    price: "₹45,000/mo",
    bedrooms: 2,
    bathrooms: 2,
    area: "1200 sq.ft",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    coordinates: { lat: 17.4156, lng: 78.4347 },
    label: "Featured"
  },
  {
    id: 2,
    title: "Furnished Office Space",
    location: "Whitefield, Bangalore",
    price: "₹85,000/mo",
    bedrooms: null,
    bathrooms: 2,
    area: "2500 sq.ft",
    image: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg",
    coordinates: { lat: 12.9698, lng: 77.7500 },
    label: "Commercial"
  },
  {
    id: 3,
    title: "Sea View Apartment",
    location: "ECR, Chennai",
    price: "₹55,000/mo",
    bedrooms: 3,
    bathrooms: 3,
    area: "1800 sq.ft",
    image: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg",
    coordinates: { lat: 12.9150, lng: 80.2496 },
    label: "Premium"
  },
  {
    id: 4,
    title: "Studio Apartment",
    location: "Indiranagar, Bangalore",
    price: "₹28,000/mo",
    bedrooms: 1,
    bathrooms: 1,
    area: "650 sq.ft",
    image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
    coordinates: { lat: 12.9784, lng: 77.6408 },
    label: ""
  },
  {
    id: 5,
    title: "Riverside Villa",
    location: "Aluva, Kochi",
    price: "₹95,000/mo",
    bedrooms: 4,
    bathrooms: 4,
    area: "3200 sq.ft",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    coordinates: { lat: 10.1004, lng: 76.3570 },
    label: "Luxury"
  }
];

export default function RentPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Properties for Rent</h1>
      
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