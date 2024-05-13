import About from "@/components/About";
import CallForAction from "@/components/CallForAction";
import Companies from "@/components/Companies";
import Comparison from "@/components/Comparison";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-sm:p-5">
      <Hero />
      <Companies />
      <About />
      <About />
      <Comparison />
      <Pricing />
      <Faqs />
      <CallForAction />
      <Footer />
    </main>
  );
}
