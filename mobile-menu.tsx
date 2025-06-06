"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Home, Building2, Key, DollarSign, Map, Heart, User } from "lucide-react";

interface MobileMenuProps {
  setIsOpen: (isOpen: boolean) => void;
  isLoggedIn: boolean;
}

export default function MobileMenu({ setIsOpen, isLoggedIn }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 top-16 z-50 bg-background p-4 md:hidden">
      <div className="flex flex-col h-full">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search properties..." className="pl-9" />
        </div>

        <nav className="flex flex-col space-y-2">
          <Link 
            href="/" 
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary"
            onClick={() => setIsOpen(false)}
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link 
            href="/buy" 
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary"
            onClick={() => setIsOpen(false)}
          >
            <Building2 className="h-5 w-5" />
            <span>Buy</span>
          </Link>
          <Link 
            href="/rent" 
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary"
            onClick={() => setIsOpen(false)}
          >
            <Key className="h-5 w-5" />
            <span>Rent</span>
          </Link>
          <Link 
            href="/sell" 
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary"
            onClick={() => setIsOpen(false)}
          >
            <DollarSign className="h-5 w-5" />
            <span>Sell</span>
          </Link>
          <Link 
            href="/map" 
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary"
            onClick={() => setIsOpen(false)}
          >
            <Map className="h-5 w-5" />
            <span>Map View</span>
          </Link>
          
          {isLoggedIn && (
            <>
              <Link 
                href="/favorites" 
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary"
                onClick={() => setIsOpen(false)}
              >
                <Heart className="h-5 w-5" />
                <span>Favorites</span>
              </Link>
              <Link 
                href="/profile" 
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary"
                onClick={() => setIsOpen(false)}
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            </>
          )}
        </nav>

        {!isLoggedIn && (
          <div className="mt-auto flex flex-col space-y-2 pt-4">
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full">Log in</Button>
            </Link>
            <Link href="/signup" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Sign up</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}