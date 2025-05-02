import {
  EstimatorSection,
  FAQSection,
  Hero,
  CustomerReview,
  Services,
} from "@/components/home";
import DiscountSection from "@/components/home/DiscountSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <EstimatorSection />
      <CustomerReview />
      <FAQSection />
      <DiscountSection />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4"></div>
      </section>
    </>
  );
}
