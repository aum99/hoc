"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { Separator } from "@/components/ui/Separator";

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const routes = [
    {
      href: "/about-us",
      label: "ABOUT US",
      active: pathname === "/about-us",
    },
    {
      href: "/gallery",
      label: "GALLERY",
      active: pathname === "/gallery",
    },
    {
      href: "/services",
      label: "SERVICES",
      active: pathname === "/services",
    },
    {
      href: "/connect",
      label: "LETS CONNECT",
      active: pathname === "/connect",
    },
  ];
  return (
    <div className="flex sm:block lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-sm text-bold mt-2">
              SOME TEXT NEEDED
            </SheetTitle>
          </SheetHeader>
          <Separator />
          <div className="grid py-2 mt-2 gap-7 pl-4 text-sm text-medium">
            {routes.map((route) => (
              <Link key={route.href} href={route.href}>
                {route.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
