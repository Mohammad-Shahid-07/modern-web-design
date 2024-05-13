import { navLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full mt-5 px-5 ">
      <div className="flex justify-between w-full mt-5 px-5 items-center">
        <div className="flex ">
          <Image
            src={"/assets/logo.svg"}
            alt="Vector"
            width={22}
            height={27}
            className="object-fill mr-1"
          />
          <span className="font-bold text-white text-xl">GenAI</span>
        </div>
        <ul className="flex gap-5 max-md:hidden">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={`#${link.id}`} className="text-white font-medium">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Button className="bg-btn rounded-3xl px-4 py-3  max-md:hidden">
          Get Started <ArrowRight className="w-4 h-5" />
        </Button>
      </div>

      <Sheet>
        <SheetTrigger>
          <Menu className="text-white cursor-pointer block md:hidden" />
        </SheetTrigger>
        <SheetContent className=" bg-white/5 backdrop-blur-lg border-none">
          <SheetHeader>
            <SheetTitle className="mx-auto">
              {" "}
              <Button className="bg-btn rounded-3xl px-4 py-3 mx-auto">
                Get Started <ArrowRight className="w-4 h-5" />
              </Button>
            </SheetTitle>
            <SheetDescription>
              <ul className="flex gap-5 flex-col items-center justify-center ">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={`#${link.id}`}
                      className="text-white font-medium border-b-2 border-btn/20 p-2 w-full text-center"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
