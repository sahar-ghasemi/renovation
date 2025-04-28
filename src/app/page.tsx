import {
  CustomerReviews,
  EstimatorSection,
  FAQSection,
  Hero,
  Services,
} from "@/components/home";
import DiscountSection from "@/components/home/DiscountSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <EstimatorSection />
      <CustomerReviews />
      <FAQSection />
      <DiscountSection />
    </>
  );
}
