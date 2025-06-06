import Link from 'next/link';
import { Building, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-secondary/50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">RealEstate</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Finding your dream property has never been easier. Browse thousands of listings across India.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/buy" className="text-muted-foreground hover:text-primary transition-colors">
                  Buy
                </Link>
              </li>
              <li>
                <Link href="/rent" className="text-muted-foreground hover:text-primary transition-colors">
                  Rent
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-muted-foreground hover:text-primary transition-colors">
                  Sell
                </Link>
              </li>
              <li>
                <Link href="/map" className="text-muted-foreground hover:text-primary transition-colors">
                  Map View
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4">Cities</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/city/hyderabad" className="text-muted-foreground hover:text-primary transition-colors">
                  Hyderabad
                </Link>
              </li>
              <li>
                <Link href="/city/kochi" className="text-muted-foreground hover:text-primary transition-colors">
                  Kochi
                </Link>
              </li>
              <li>
                <Link href="/city/chennai" className="text-muted-foreground hover:text-primary transition-colors">
                  Chennai
                </Link>
              </li>
              <li>
                <Link href="/city/bangalore" className="text-muted-foreground hover:text-primary transition-colors">
                  Bangalore
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">123 Real Estate Avenue, Bengaluru, India 560001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">+91 99999 88888</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">info@realestate.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} RealEstate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}