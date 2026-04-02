"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "pack-walks", label: "Pack Walks & Pricing" },
  { id: "requirements", label: "Requirements" },
  { id: "dog-training", label: "Dog Training" },
  { id: "boarding", label: "In Home Boarding" },
  { id: "faq", label: "FAQ" },
  { id: "team", label: "Our Team" },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Side Nav */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-80 lg:w-96 bg-[#F9F6F0] border-r border-[#e0ddd7] z-50 flex-col justify-between py-10 px-8">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-4 mb-14"
        >
          <Image
            src="/images/logo-gold-black.png"
            alt="The Gentleman's Paw"
            width={44}
            height={44}
            className="object-contain"
          />
          <span className="text-base font-headline text-[#1B3022] tracking-tight leading-tight font-semibold">
            The Gentleman&apos;s
            <br />
            Paw
          </span>
        </a>

        {/* CTA */}
        <a
          href="mailto:concierge@gentlemanspaw.com"
          className="block bg-[#C5A059] text-white px-5 py-3.5 text-sm font-bold tracking-widest uppercase text-center hover:bg-[#d4b06a] transition-colors rounded mb-8"
        >
          Join the Pack
        </a>

        {/* Nav Links */}
        <ul className="flex flex-col gap-1.5 flex-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className={`w-full text-left px-5 py-3 rounded-lg text-base font-body transition-all duration-200 ${
                  activeSection === section.id
                    ? "text-[#C5A059] font-bold bg-[#C5A059]/10 border-l-[3px] border-[#C5A059]"
                    : "text-[#1B3022]/70 hover:text-[#1B3022] hover:bg-[#f0ede7] font-medium"
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#F9F6F0]/90 glass-nav border-b border-[#e0ddd7]">
        <div className="flex items-center justify-between px-6 py-4">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3"
          >
            <Image
              src="/images/logo-gold-black.png"
              alt="The Gentleman's Paw"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-base font-headline text-[#1B3022] tracking-tight font-semibold">
              The Gentleman&apos;s Paw
            </span>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[#1B3022]"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileOpen && (
          <div className="bg-[#F9F6F0] border-t border-[#e0ddd7] px-6 py-6 space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-headline text-lg ${
                  activeSection === section.id
                    ? "text-[#C5A059] font-bold bg-[#C5A059]/10"
                    : "text-[#1B3022] font-medium"
                }`}
              >
                {section.label}
              </button>
            ))}
            <a
              href="mailto:concierge@gentlemanspaw.com"
              className="block bg-[#C5A059] text-white px-6 py-3 text-sm font-bold tracking-widest uppercase text-center mt-4 rounded"
            >
              Join the Pack
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
