"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Companies = () => {
  const logosRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (logosRef.current) {
      let ul = logosRef.current;
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
    }
  }, []);
  return (
    <div className="w-1/2 mx-auto inline-flex  my-16   flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        x-ref="logos"
        ref={logosRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll"
      >
        <li className="h-24 w-24">
          <Image
            loading="lazy"
            src="/assets/comp-logo.svg"
            alt="Companies"
            width={100}
            height={200}
            className="aspect-[3/2] h-full w-full object-contain "
          />
        </li>

        <li className="h-28 w-28">
          <Image
            loading="lazy"
            src="/assets/comp-logo2.svg"
            alt="Companies"
            width={100}
            height={200}
            className="aspect-[3/2] h-full w-full object-contain "
          />{" "}
        </li>
        <li className="h-28 w-28">
          <Image
            loading="lazy"
            src="/assets/comp-logo4.png"
            alt="Companies"
            width={100}
            height={200}
            className="aspect-[3/2] h-full w-full object-contain "
          />
        </li>
        <li className="h-28 w-28">
          <Image
            loading="lazy"
            src="/assets/comp-logo3.png"
            alt="Companies"
            width={100}
            height={200}
            className="aspect-[3/2] h-full w-full object-contain "
          />
        </li>
      </ul>
    </div>
  );
};

export default Companies;
