"use client";
import { navLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import useMediaQuery from "@/hooks/userMediaQuery";

const Navbar = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  console.log({ matches });

  const [isOpen, setIsOpen] = useState(false);
  const handleOpenClose = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (!matches) {
      setIsOpen(false);
    }
  }, [matches]);

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
              <Link href={`#${link.id}`} className="text-white font-medium ">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Button className="bg-btn rounded-3xl px-4 py-3  max-md:hidden">
          Get Started <ArrowRight className="w-4 h-5" />
        </Button>
      </div>
      {/* Mobile Nav */}
      <div>
        {isOpen ? (
          <X
            className="text-white cursor-pointer block md:hidden z-50 absolute right-4 top-5"
            onClick={handleOpenClose}
          />
        ) : (
          <Menu
            className="text-white cursor-pointer block md:hidden"
            onClick={handleOpenClose}
          />
        )}
        {isOpen && (
          <div
            className={cn(
              "bg-white/5 backdrop-blur-lg border-none w-screen absolute p-7  top-0 transition-all",
              isOpen ? "left-0 " : "left-10 ",
            )}
          >
            <Button className="bg-btn rounded-3xl px-4 py-3 mx-auto flex ">
              Get Started <ArrowRight className="w-4 h-5" />
            </Button>
            <ul className="flex gap-5 flex-col items-center justify-center ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-white font-medium border-b-2 border-btn/20 p-2 w-full text-center"
                >
                  <Link href={`#${link.id}`} onClick={handleOpenClose}>
                    {link.name}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
