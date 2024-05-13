import React from "react";

const Comparison = () => {
  return (
    <>
      <div className="mt-16 mb-8 w-1/2 ">
        <h2 className="text-6xl text-gredient font-medium text-center">
          Unlease the <br /> power of AI
        </h2>
        <p className="text-white text-xl leading-10 text-center mt-5">
          Automatically generate high-quality sequences uniquely crafted for
          your value proposition and your target prospects.
        </p>
      </div>
      <div className="border border-b-0 border-white/35 sm:min-w-[500px] max-sm:w-full lg:w-[800px] p-5 px-6 pt-3 pb-0   rounded-xl ">
        <h4 className="text-5xl text-gredient  font-semibold mt-5">
          Results from outreach
        </h4>
        <div className="flex flex-col gap-3 mt-7 ">
          <div className="flex gap-2 items-center">
            <div className="bg-[#FF3131]/30 px-6 py-3 w-fit border border-red-500 rounded-md  ">
              <span className="text-gredient font-bold">without AI</span>
            </div>
            <p className="text-gredient font-bold text-2xl">5% reply rate</p>
          </div>
          <div className="flex gap-2 items-center relative">
            <div className="bg-[#316BFF]/30   px-6 py-3 w-8/12 border border-[#316BFF] rounded-md  ">
              <span className="text-gredient font-bold">with AI</span>
            </div>
            <div className="hero-gradient h-60 w-60 block absolute" />
            <p className="text-gredient  font-bold text-2xl">15% reply rate</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comparison;
