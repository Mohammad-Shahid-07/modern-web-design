import React from "react";
import PricingCard from "./PricingCard";
import { pricingCardInfo } from "@/constant";
const Pricing = () => {
  return (
    <div>
      <div className="mt-20 mb-8">
        <h2 className="text-6xl text-gredient font-medium text-center">
          Get everything to build your app
        </h2>
      </div>
      <div className="inline-flex flex-wrap gap-10 items-center  justify-center">
        {pricingCardInfo.map((card) => (
          <PricingCard
            key={card?.title}
            title={card?.title}
            description={card?.description}
            price={card?.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
