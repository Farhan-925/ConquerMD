import Footer from "@/components/footer/Footer";
import Goal from "@/components/Goal";
import { ChoosePath } from "@/components/home/ChoosePath";
import FaqSection from "@/components/home/faq/FaqSection";
import { HeroSection } from "@/components/home/HeroSection";
import MedicalAdvisors from "@/components/home/medical-advisors/MedicalAdvisors";
import NewsletterCard from "@/components/home/news-letter/NewsletterCard";
import { PrecisionMetrics } from "@/components/home/PrecisionMetrics";
import ProductSection from "@/components/home/products/ProductSection";
import TrustedMembers from "@/components/home/trusted-members/TrustedMembers";
import HowItWorks from "@/components/HowItWorks";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import { mensCollection, womensCollection } from "@/config/collections";

export default function Home() {
  return (
    /* Moved overflow-x-hidden to the outer root container to strictly clip wide components like Goal */
    <div className="relative w-full min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      
      {/* Header Overlay */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        <AnnouncementBar />
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="w-full min-h-screen bg-background text-foreground">
        <HeroSection />
        <PrecisionMetrics />
        <ChoosePath />
        <Goal />
        <HowItWorks />
        <ProductSection collection={womensCollection} />
        <MedicalAdvisors />
        <ProductSection collection={mensCollection} />
        <TrustedMembers />
        <FaqSection />
        <NewsletterCard />
      </main>
      <div>
        <Footer />
      </div>
      
    </div>
  );
}