"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "pack-walks", label: "Pack Walks" },
  { id: "pricing", label: "Pricing" },
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
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-56 lg:w-64 bg-[#F9F6F0] border-r border-[#e0ddd7] z-50 flex-col justify-between py-10 px-6">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 mb-12"
        >
          <Image
            src="/images/logo-gold-black.png"
            alt="The Gentleman's Paw"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="text-sm font-headline text-[#1B3022] tracking-tight leading-tight">
            The Gentleman&apos;s
            <br />
            Paw
          </span>
        </a>

        {/* Nav Links */}
        <ul className="flex flex-col gap-1 flex-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-body transition-all duration-200 ${
                  activeSection === section.id
                    ? "text-[#C5A059] font-semibold bg-[#C5A059]/8 border-l-[3px] border-[#C5A059]"
                    : "text-[#333333]/60 hover:text-[#333333] hover:bg-[#f0ede7]"
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:concierge@gentlemanspaw.com"
          className="block bg-[#C5A059] text-white px-4 py-3 text-xs font-bold tracking-widest uppercase text-center hover:bg-[#d4b06a] transition-colors"
        >
          Join the Pack
        </a>
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
            <span className="text-base font-headline text-[#1B3022] tracking-tight">
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
                className={`block w-full text-left px-4 py-3 rounded-lg font-headline text-base ${
                  activeSection === section.id
                    ? "text-[#C5A059] font-medium bg-[#C5A059]/8"
                    : "text-[#333333]"
                }`}
              >
                {section.label}
              </button>
            ))}
            <a
              href="mailto:concierge@gentlemanspaw.com"
              className="block bg-[#C5A059] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase text-center mt-4"
            >
              Join the Pack
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
