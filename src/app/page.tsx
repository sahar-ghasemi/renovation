import {
  EstimatorSection,
  FAQSection,
  Hero,
  CustomerReview,
  Services,
  ProjectGallery,
} from "@/components/home";
import DiscountSection from "@/components/home/DiscountSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ProjectGallery />
      <EstimatorSection />
      <CustomerReview />
      <FAQSection />
      <DiscountSection />
    </>
  );
}
