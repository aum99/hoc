"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";

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
      href: "/services",
      label: "SERVICES",
      active: pathname === "/services",
    },
    {
      href: "/crew",
      label: "CREW",
      active: pathname === "/crew",
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
          <Menu size={34} />
        </SheetTrigger>
        <SheetContent>
          <div className="grid justify-items-center py-2 mt-30 gap-10 pl-4 text-2xl text-medium">
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
