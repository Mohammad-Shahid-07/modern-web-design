import { footerLinks, socialLinks } from "@/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 mt-16 py-5">
      <div className="flex justify-center items-center gap-5 border-b border-white/10 py-10">
        {socialLinks.map((link) => (
          <Image
            key={link.title}
            src={link.icon}
            alt={link.title}
            width={50}
            height={40}
            className="cursor-pointer"
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-5 flex-wrap ">
        {footerLinks.map((link) => (
          <Link
            href={link.href}
            key={link.title}
            className={cn(
              "text-white/55 font-light",
              link.title === "Home" && "font-semibold text-white",
            )}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <p className="text-[#676D79] text-center">
        © 2020 – 2022 1811 Labs. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
