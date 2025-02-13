
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { DemoSection } from "@/components/sections/DemoSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TeamSection />
      <FeaturesSection />
      <ProcessSection />
      <DemoSection />
    </div>
  );
};

export default Index;
