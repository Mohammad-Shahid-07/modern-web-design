import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { UserPlus2 } from "lucide-react";

const About = () => {
  return (
    <>
      <div className="mt-16 mb-8 sm:px-5  " id="about">
        <h2 className="sm:text-6xl xs:text-4xl   text-3xl text-gredient font-medium text-center ">
          Revolutionalize your <br /> workflow
        </h2>
        <p className="text-white text-xl leading-10 text-center mt-5 lg:w-3/4 mx-auto ">
          Generate highly personalized icebreakers and complete sequences based
          on your prospects&apos; information.
        </p>
      </div>
      <div className="flex flex-wrap  my-5 gap-16  mx-auto items-center justify-center">
        <div className="isolate ">
          <div className="border  border-gray-700 -z-30 w-[95%] relative bg-primary-background  border-b-0 mx-auto h-7 rounded-t-xl">
            <Image
              src="/assets/linkedin.svg"
              alt="Picture of the author"
              width={40}
              height={20}
              className="ml-auto mt-2 mr-3"
            />
          </div>
          <div className="border  border-gray-700 -z-30 w-[98%] relative  bg-primary-background   border-b-0 mx-auto h-7 rounded-t-xl  ">
            <Image
              src="/assets/linkedin.svg"
              alt="Picture of the author"
              width={40}
              height={20}
              className="ml-auto mt-2 mr-3"
            />
          </div>

          <div className="border border-gray-700 sm:min-w-[500px]  bg-primary-background p-5 pt-3 pb-0 w-full rounded-xl">
            <div>
              <div className="flex w-full">
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src="/assets/profile.jpg"
                    alt="Picture of the author"
                    width={40}
                    height={20}
                    className="rounded-full h-16 w-16 ml-3"
                  />
                  <div>
                    <p className="font-semibold text-lg text-white">
                      George repliner
                    </p>
                    <p className="text-white/30"> 500+connections</p>
                    <Button className="bg-btn px-4 rounded-full">
                      <UserPlus2 className="w-4 h-4" /> Connect
                    </Button>
                  </div>
                </div>

                <Image
                  src="/assets/linkedin.svg"
                  alt="Picture of the author"
                  width={40}
                  height={20}
                  className="ml-auto mb-auto -mr-2"
                />
              </div>

              <div className="border bg-white/5 border-gray-700 rounded-xl p-3 mt-5   border-b-0">
                <p className="text-white font-semibold text-lg">About</p>
                <p className="text-white/50 text-lg">
                  Let’s generate ou an AI app{" "}
                  <span className="underline cursor-pointer">see more...</span>
                </p>
              </div>
              <div className="border bg-white/5 border-gray-700 rounded-xl p-3 mt-5  pb-0  border-b-0">
                <div className="flex gap-5 -mb-4">
                  <Image
                    src={"/assets/sec-logo.svg"}
                    width={40}
                    height={20}
                    alt="Picture of the author"
                    // className="ml-auto mt-2 mr-3"
                  />
                  <div>
                    <p className="text-white font-semibold text-lg">Aisickle</p>
                    <p className="text-white/50 text-lg">Head of development</p>
                  </div>
                </div>
                <Image
                  src="/assets/line.svg"
                  alt="Picture of the author"
                  width={100}
                  height={50}
                  className="h-10 w-10 "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white/5 border border-gray-700 rounded-xl  p-7 max-w-[500px]  max-sm:max-w-[400px]">
          <h3 className="text-3xl font-semibold text-white ">
            Generate AI apps without any extra effort
          </h3>
          <p className="text-lg text-[#E5E5E5]">
            Our world-class market making services are proven to help local and
            emerging exchanges win traders and gain market-leading positions of
            up to 90% market dominance.
            <br />
            <br />
            Lorem ipsum dolor sit amet with the one and only ai apps that you
            like lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
            ipsum dolor sit amet lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
