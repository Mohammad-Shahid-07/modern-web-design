import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/constant";

const Faqs = () => {
  return (
    <div
      className="flex p-10 max-lg:flex-wrap max-w-screen-xl justify-center maxlg:items-center gap-10"
      id="faq"
    >
      <h2 className="h1 text-gredient font-extrabold text-center">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="max-w-[500px] ">
        {faqData.map((faq) => (
          <AccordionItem
            key={faq.question}
            value={faq.question}
            className="mb-2 border rounded-xl w-full border-[#471CF5]"
          >
            <AccordionTrigger className=" bg-white/5  text-white/75 p-3 rounded-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className=" bg-white/5  text-white p-3 rounded-lg ">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faqs;
