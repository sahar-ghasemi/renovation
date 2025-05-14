import {
  EstimatorSection,
  FAQSection,
  Hero,
  CustomerReview,
  Services,
  ProjectGallery,
  KitchenFacelift,
} from "@/components/home";
import DiscountSection from "@/components/home/DiscountSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ProjectGallery />
      <EstimatorSection />
      <KitchenFacelift />
      <CustomerReview />
      <FAQSection />
      <DiscountSection />
    </>
  );
}
