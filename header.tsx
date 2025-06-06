"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Menu, X, Home, Building, MapPin, Heart } from "lucide-react";
import MobileMenu from "./mobile-menu";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would be controlled by your auth system

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm dark:bg-background/95"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Building className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">RealEstate</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary">
              Home
            </Link>
            <Link href="/buy" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary">
              Buy
            </Link>
            <Link href="/rent" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary">
              Rent
            </Link>
            <Link href="/sell" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary">
              Sell
            </Link>
            <Link href="/map" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary">
              Map View
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search properties..."
                className="w-[200px] lg:w-[300px] pl-9"
              />
            </div>

            <ThemeToggle />

            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link href="/favorites">
                  <Button variant="ghost\" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/profile">
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="outline">Log in</Button>
                </Link>
                <Link href="/signup">
                  <Button>Sign up</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && <MobileMenu setIsOpen={setIsMobileMenuOpen} isLoggedIn={isLoggedIn} />}
    </header>
  );
}