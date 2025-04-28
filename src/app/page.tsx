import {
  CustomerReviews,
  EstimatorSection,
  FAQSection,
  Hero,
  Services,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <EstimatorSection />
      <CustomerReviews />
      <FAQSection />
    </>
  );
}
