"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building } from "lucide-react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect would happen here in a real app
    }, 1500);
  };

  return (
    <div className="container flex items-center justify-center min-h-[80vh] py-16 px-4 md:px-6">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">RealEstate</span>
          </Link>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
            <CardDescription className="text-center">
              Log in to access your account and manage your properties
            </CardDescription>
          </CardHeader>
          
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone</TabsTrigger>
            </TabsList>
            
            <TabsContent value="email">
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="name@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link 
                        href="/forgot-password" 
                        className="text-sm text-primary hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm">Remember me</Label>
                  </div>
                </CardContent>
                
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Log in"}
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-primary hover:underline">
                      Sign up
                    </Link>
                  </p>
                </CardFooter>
              </form>
            </TabsContent>
            
            <TabsContent value="phone">
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 9999999999" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="otp">OTP</Label>
                    <div className="flex space-x-2">
                      <Input id="otp" type="text" placeholder="Enter OTP" />
                      <Button variant="outline" type="button">
                        Send OTP
                      </Button>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Verifying..." : "Verify & Log in"}
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-primary hover:underline">
                      Sign up
                    </Link>
                  </p>
                </CardFooter>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}