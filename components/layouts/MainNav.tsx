"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = () => {
  const pathname = usePathname();
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
  ];

  return (
    <div className="items-center space-x-8 hidden lg:flex lg:space-x-10">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className="text-sm font-medium"
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
