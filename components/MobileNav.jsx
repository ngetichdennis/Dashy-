
"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

function MobileNav() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  const closeSheet = () => setIsSheetOpen(false);
  const openSheet = () => setIsSheetOpen(true);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      {/* Trigger for opening the sheet */}
      <SheetTrigger
        className="p-2 focus:outline-none"
        onClick={openSheet}
        aria-label="Open Navigation Menu"
      >
        <FaBars className="text-2xl text-black" />
      </SheetTrigger>

      {/* Content inside the sheet */}
      <SheetContent className="flex flex-col items-center p-4">
        {/* Header with logo */}
        <div className="mt-16 mb-10 text-center">
          <Link href="/" onClick={closeSheet}>
          <div className="w-50 h-50 rounded-full overflow-hidden border border-black">
            <Image
              src="/assets/dashylogo.PNG"
              alt="Site Logo"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-6">
          {links.map((link, index) => {
            const isActive = link.href === pathname;
            return (
              <Link
                key={index}
                href={link.href}
                className={`text-xl capitalize transition-all ${
                  isActive
                    ? "text-black border-b-2 border-black"
                    : "text-gray-700 hover:text-red-700"
                }`}
                onClick={closeSheet}
                aria-label={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;


