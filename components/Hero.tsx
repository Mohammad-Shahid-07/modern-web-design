import React from "react";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex max-xl:flex-wrap !overflow-x-hidden justify-center items-center ">
      <div className=" xl:ml-16 max-xl:px-5 ">
        <Badge>
          AI generation <ArrowRight className="w-4 h-5" />
        </Badge>
        <h1 className="h1 text-white my-10">Generate apps with ease</h1>
        <p className="text-[#E8E8E8] text-xl max-xl:text-center">
          Lorem ipsum dolor sit amet lorem
        </p>
        <Button className="bg-btn px-4 py-6 rounded-full mt-5 max-xl:mx-auto flex  ">
          Start your free trial <ArrowRight className="w-4 h-5 ml-2" />{" "}
        </Button>
      </div>
      <div className="xl:translate-x-4 max-xl:px-10 mt-16 max-sm:px-2">
        <Image
          src={"/assets/hero-image.jpg"}
          alt="Hero Image"
          width={1000}
          height={500}
          loading="lazy"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
