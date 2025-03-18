import React from "react";
import Link from "next/link";

import MainNav from "@/components/layouts/MainNav";
import Container from "@/components/layouts/Container";
import MobileNav from "@/components/layouts/MobileNav";
import { Button } from "@/components/ui/Button";

function Navbar() {
  return (
    <div className="border-b">
      <Container>
        <div className="flex items-center justify-between px-4 sm:px-6 h-16">
          <Link href="/" className="text-sm font-bold">
            HOUSE OF CGI
          </Link>
          <MainNav />
          <Button className="hidden lg:block cursor-pointer">
            LETS CONNECT
          </Button>
          <MobileNav />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
