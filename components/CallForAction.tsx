import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

const CallForAction = () => {
  return (
    <div className=" flex flex-col gap-7 mt-16">
      <h2 className="text-6xl text-white font-semibold text-center">
        Be part of the future of
        <br /> AI tools
      </h2>
      <Image
        src="/assets/line2.svg"
        alt="cta"
        width={300}
        height={400}
        className="mx-auto"
      />
      <p className="text-white/60 w-2/3 mx-auto  text-center">
        Unleash the power of AI within Brainwave. Upgrade your productivity with
        Brainwave, the open AI chat app.
      </p>
      <Button className="bg-btn px-4 py-2 rounded-full w-fit mx-auto mt-10">
        Start your free trial <ArrowRightIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default CallForAction;
