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
    </>
  );
}
