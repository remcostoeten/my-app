'use client'

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/ utton"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, XIcon } from "lucide-react"       

export default function Header() {  
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        isScrolled ? "bg-black/50 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="flex items-center space-x-8">
        <Link className="text-white font-bold text-xl" href="/">
          Linear
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link className="text-gray-300 hover:text-white transition-colors" href="#">
            Features
          </Link>
          <Link className="text-gray-300 hover:text-white transition-colors" href="#">
            Method
          </Link>
          <Link className="text-gray-300 hover:text-white transition-colors" href="#">
            Customers
          </Link>
          <Link className="text-gray-300 hover:text-white transition-colors" href="#">
            Changelog
          </Link>
          <Link className="text-gray-300 hover:text-white transition-colors" href="#">
            Integrations
          </Link>
          <Link className="text-gray-300 hover:text-white transition-colors" href="#">
            Pricing
          </Link>
          <Link className="text-gray-300 hover:text-white transition-colors" href="#">
            Contact
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Button className="hidden md:inline-flex" variant="ghost">
          Sign in
        </Button>
        <Button className="hidden md:inline-flex bg-white text-black hover:bg-gray-200">
          Get started
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="icon" variant="ghost">
              <MenuIcon className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-black text-white">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link className="text-gray-300 hover:text-white transition-colors" href="#">
                Features
              </Link>
              <Link className="text-gray-300 hover:text-white transition-colors" href="#">
                Method
              </Link>
              <Link className="text-gray-300 hover:text-white transition-colors" href="#">
                Customers
              </Link>
              <Link className="text-gray-300 hover:text-white transition-colors" href="#">
                Changelog
              </Link>
              <Link className="text-gray-300 hover:text-white transition-colors" href="#">
                Integrations
              </Link>
              <Link className="text-gray-300 hover:text-white transition-colors" href="#">
                Pricing
              </Link>
              <Link className="text-gray-300 hover:text-white transition-colors" href="#">
                Contact
              </Link>
            </nav>
            <div className="mt-8 space-y-4">
              <Button className="w-full" variant="outline">
                Sign in
              </Button>
              <Button className="w-full bg-white text-black hover:bg-gray-200">Get started</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
