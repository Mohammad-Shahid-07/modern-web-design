import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { pricingFeatures } from "@/constant";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface Props {
  title: string;
  description: string;
  price: string;
}
const PricingCard = ({ title, description, price }: Props) => {
  return (
    <Card
      className={cn(
        "bg-transparent border-white/10 rounded-xl h-fit",
        title === "Premium" && "h-full pb-10  pt-12",
      )}
    >
      <CardHeader>
        <CardTitle className="text-white text-3xl">{title}</CardTitle>
        <CardDescription className="text-white/35 w-10/12">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-bold text-white text-5xl my-7"> {price}</p>

        <Button
          variant={"outline"}
          className={cn(
            "w-full bg-transparent my-7 border-white/30 border-2 text-white",
            title === "Premium" && "bg-btn border-btn/20 border-3 mb-10 ",
          )}
        >
          {" "}
          Get Started
        </Button>
      </CardContent>
      <CardFooter>
        <ul>
          {pricingFeatures.map((feature) => (
            <li
              key={feature}
              className="flex border-b-2 border-white/15 py-3   gap-2 text-white"
            >
              <Image
                src={"/assets/check.svg"}
                alt="Picture of the author"
                width={20}
                height={20}
              />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
