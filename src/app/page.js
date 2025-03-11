"use client";

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import LinkPreview from "@/components/linkPreview"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

import {listAlatan} from "@/lib/listAlatan"

export default function Home() {

  const { setTheme } = useTheme()

  return (
    <div className="container mx-auto px-12 md:px-44">
      <div className="justify-center items-center">
        <div className="flex flex-col"> 
        
        {/* header title */}
          <div className="flex justify-between items-center py-4 w-full max-w-screen=lg mx-auto">
            
            <h1 className="text-4xl font-bold">Alat.</h1>
          
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
                        
          </div>

        {/* short intro */}
        <div className="flex justify-start pb-6">
          <span>Direktori peribadi himpunan alat berguna daripada pelbagai sumber seperti Twitter, internet, dan lain-lain.</span>
        </div>
        
        {/* content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
            {listAlatan.map((alat) => (
              <Card key={alat.id}>
                <CardContent>
                  <LinkPreview url={alat.url}/>
                </CardContent>
                
                <CardFooter>
                  <div className="flex items-center gap-1">               
                    <span className="text-sm dark:text-gray-400">tag:</span><Badge variant="secondary">{alat.tag}</Badge>
                  </div>
                </CardFooter>
              </Card>
            ))}
            
          </div>

        </div>

        <footer className="bottom-0 w-full text-center py-4"></footer>
        
      </div>
    </div>
    
  );
}
