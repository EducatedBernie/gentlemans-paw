import Image from "next/image";
import SideNav from "@/components/SideNav";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PackWalksSection from "@/components/sections/PackWalksSection";
import PackWalkRequirementsSection from "@/components/sections/PackWalkRequirementsSection";
import DogTrainingSection from "@/components/sections/DogTrainingSection";
import InHomeBoardingSection from "@/components/sections/InHomeBoardingSection";
import FAQSection from "@/components/sections/FAQSection";
import TeamSection from "@/components/sections/TeamSection";

export default function Home() {
  return (
    <>
      <SideNav />

      <div className="md:ml-80 lg:ml-96">
        <main className="font-body bg-[#F9F6F0]">
          {/* ── Hero ── */}
          <section
            id="hero"
            className="relative h-[85vh] md:h-[90vh] flex items-end justify-center text-center pb-20 md:pb-24 pt-16 md:pt-0"
          >
            <Image
              src="/images/hero-walk.jpg"
              alt="The Gentleman's Paw pack walk"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            <div className="relative z-10 max-w-3xl px-6 flex flex-col items-center">
              <Image
                src="/images/logo-hero.png"
                alt="The Gentleman's Paw logo"
                width={400}
                height={400}
                className="object-contain mb-8 opacity-90"
              />
              <h1 className="font-headline text-4xl md:text-6xl font-bold text-white leading-tight">
                Leashing manners, one walk at a time.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/90 font-body">
                Premium structured dog walking in Santa Clara County.
              </p>
            </div>
          </section>

          <AboutSection />
          <HowItWorksSection />
          <PackWalksSection />
          <PackWalkRequirementsSection />
          <DogTrainingSection />
          <InHomeBoardingSection />
          <FAQSection />
          <TeamSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
