import MainLayout from "../components/layout/MainLayout.jsx";
import PageContainer from "../components/layout/PageContainer.jsx";

import Hero from "../components/landing/hero/Hero.jsx";
import Stats from "../components/landing/stats/Stats.jsx";
import Features from "../components/landing/features/Features.jsx";
import CTASection from "../components/landing/cta/CTASection.jsx";

export default function LandingPage() {
  return (
    <MainLayout>

      <PageContainer>

        <Hero />

        <Stats />

        <Features />

        <CTASection />

      </PageContainer>

    </MainLayout>
  );
}
