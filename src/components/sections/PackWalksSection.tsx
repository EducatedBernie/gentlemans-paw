"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const galleryImages = [
  { src: "/images/gallery-5.png", alt: "Handler walking dogs through the neighborhood" },
  { src: "/images/gallery-1.png", alt: "Dogs sitting calmly on the grass after a walk" },
  { src: "/images/gallery-2.png", alt: "The pack sitting together expectantly" },
  { src: "/images/gallery-3.png", alt: "Hoang leading the pack on the road" },
  { src: "/images/gallery-4.png", alt: "Matthew walking dogs in the town square" },
  { src: "/images/gallery-7.png", alt: "Reid with a group of well-behaved sitting dogs" },
  { src: "/images/gallery-6.jpeg", alt: "Reid on the trail with the pack" },
  { src: "/images/gallery-8.png", alt: "Handler walking dog from behind on a trail" },
  { src: "/images/gallery-9.png", alt: "Hoang walking dogs under the redwood trees" },
  { src: "/images/gallery-10.jpeg", alt: "Reid and handler walking dogs together" },
];

export default function PackWalksSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="pack-walks" className="scroll-mt-16">
      {/* ── Offering ── */}
      <div className="px-6 md:px-16 lg:px-24 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-xl font-bold uppercase tracking-widest text-[#C5A059] mb-4">
              Our Signature Offering
            </p>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B3022] leading-tight">
              The Daily Pack Expedition
            </h2>
            <p className="mt-6 text-lg text-[#333333]/80 leading-relaxed max-w-xl">
              Every expedition is a carefully orchestrated blend of exercise,
              socialization, and real-world training. Your dog will explore
              varied terrain alongside a balanced pack, guided by an
              experienced handler who leads with calm authority.
            </p>

            {/* Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-3xl text-[#C5A059] mt-0.5">
                  schedule
                </span>
                <div>
                  <p className="font-headline text-xl font-semibold text-[#1B3022]">
                    1hr+ Activity
                  </p>
                  <p className="text-base text-[#333333]/70 mt-1">
                    Plus door-to-door transit
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-3xl text-[#C5A059] mt-0.5">
                  distance
                </span>
                <div>
                  <p className="font-headline text-xl font-semibold text-[#1B3022]">
                    1.5 - 2.5 Miles
                  </p>
                  <p className="text-base text-[#333333]/70 mt-1">
                    Varied terrain trails
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-3xl text-[#C5A059] mt-0.5">
                  groups
                </span>
                <div>
                  <p className="font-headline text-xl font-semibold text-[#1B3022]">
                    Elite Small Group
                  </p>
                  <p className="text-base text-[#333333]/70 mt-1">
                    Max 10 dogs per handler
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-3xl text-[#C5A059] mt-0.5">
                  photo_camera
                </span>
                <div>
                  <p className="font-headline text-xl font-semibold text-[#1B3022]">
                    Live Recaps
                  </p>
                  <p className="text-base text-[#333333]/70 mt-1">
                    Daily photos &amp; updates
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-10 text-lg text-[#333333]/80 leading-relaxed max-w-xl">
              Every walk includes a report card via our app, water, towel-down,
              and brush before returning home.
            </p>
          </div>

          {/* Right: Rotating Gallery */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              {galleryImages.map((img, i) => (
                <div
                  key={img.src}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#1B3022]/60 hover:bg-[#1B3022]/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#1B3022]/60 hover:bg-[#1B3022]/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current
                      ? "bg-[#C5A059] w-6"
                      : "bg-[#1B3022]/20 hover:bg-[#1B3022]/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Pricing Tiers ── */}
      <div id="pricing" className="scroll-mt-16 px-6 md:px-16 lg:px-24 pb-24 max-w-7xl mx-auto">
        <div className="border-t border-[#e0ddd7] pt-16">
          <div className="mb-12">
            <p className="text-xl font-bold uppercase tracking-widest text-[#C5A059] mb-2">
              Choose Your Walk Pack &amp; Save
            </p>
            <h3 className="font-headline text-3xl md:text-4xl font-bold text-[#1B3022] mb-4">
              Membership Pricing
            </h3>
            <p className="text-lg text-[#333333]/80">
              Single walk rate: <span className="font-headline font-bold text-[#1B3022]">$48</span> per walk. Save more with bundles below.
            </p>
          </div>

          {/* Bundle Comparison Card */}
          <div className="bg-[#F9F6F0] border border-[#e0ddd7] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e0ddd7]">
              {/* Standard Pack */}
              <div className="p-8 lg:p-10 flex flex-col">
                <p className="text-xl font-bold uppercase tracking-widest text-[#C5A059] mb-2">
                  Standard Pack
                </p>
                <h4 className="font-headline text-2xl md:text-3xl font-bold text-[#1B3022] mb-2">
                  &mdash; 10 Walks &mdash;
                </h4>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-headline text-5xl font-bold text-[#1B3022]">$450</span>
                  <span className="text-lg text-[#1B3022]/70">Total</span>
                </div>
                <p className="text-xl text-[#C5A059] font-bold mb-8">($45 Per Walk)</p>

                <ul className="space-y-3 flex-1">
                  <li className="flex items-start gap-2 text-lg text-[#1B3022]">
                    <span className="material-symbols-outlined text-[#C5A059] text-xl mt-0.5 shrink-0">check</span>
                    <span><strong>Priority</strong> Scheduling</span>
                  </li>
                  <li className="flex items-start gap-2 text-lg text-[#1B3022]">
                    <span className="material-symbols-outlined text-[#C5A059] text-xl mt-0.5 shrink-0">check</span>
                    <span>Walks valid for <strong>1 full year</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-lg text-[#1B3022]">
                    <span className="material-symbols-outlined text-[#C5A059] text-xl mt-0.5 shrink-0">check</span>
                    <span><strong>$480</strong> worth of credits</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-[#e0ddd7]">
                  <p className="text-base font-bold uppercase tracking-widest text-[#C5A059] mb-2">Additional Dog</p>
                  <p className="font-headline text-3xl font-bold text-[#1B3022]">$280 <span className="text-lg font-body text-[#1B3022]">($28/Walk)</span></p>
                  <p className="mt-2 text-base text-[#1B3022]/80 italic">Perfect for occasional walkers</p>
                </div>
              </div>

              {/* Regular Pack */}
              <div className="p-8 lg:p-10 flex flex-col">
                <p className="text-xl font-bold uppercase tracking-widest text-[#C5A059] mb-2">
                  Regular Pack
                </p>
                <h4 className="font-headline text-2xl md:text-3xl font-bold text-[#1B3022] mb-2">
                  &mdash; 20 Walks &mdash;
                </h4>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-headline text-5xl font-bold text-[#1B3022]">$800</span>
                  <span className="text-lg text-[#1B3022]/70">Total</span>
                </div>
                <p className="text-xl text-[#C5A059] font-bold mb-8">($40 Per Walk)</p>

                <ul className="space-y-3 flex-1">
                  <li className="flex items-start gap-2 text-lg text-[#1B3022]">
                    <span className="material-symbols-outlined text-[#C5A059] text-xl mt-0.5 shrink-0">check</span>
                    <span><strong>Priority</strong> Scheduling</span>
                  </li>
                  <li className="flex items-start gap-2 text-lg text-[#1B3022]">
                    <span className="material-symbols-outlined text-[#C5A059] text-xl mt-0.5 shrink-0">check</span>
                    <span>Walks valid for <strong>1 full year</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-lg text-[#1B3022]">
                    <span className="material-symbols-outlined text-[#C5A059] text-xl mt-0.5 shrink-0">check</span>
                    <span><strong>$960</strong> worth of credits</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-[#e0ddd7]">
                  <p className="text-base font-bold uppercase tracking-widest text-[#C5A059] mb-2">Additional Dog</p>
                  <p className="font-headline text-3xl font-bold text-[#1B3022]">$500 <span className="text-lg font-body text-[#1B3022]">($25/Walk)</span></p>
                  <p className="mt-2 text-base text-[#1B3022]/80 italic">Great value for consistent walkers</p>
                </div>
              </div>

              {/* VIP Elite Pack */}
              <div className="p-8 lg:p-10 flex flex-col relative">
                <span className="absolute top-4 right-4 bg-[#C5A059] text-white text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  VIP
                </span>
                <p className="text-xl font-bold uppercase tracking-widest text-[#C5A059] mb-2">
                  VIP Elite Pack
                </p>
                <h4 className="font-headline text-2xl md:text-3xl font-bold text-[#1B3022] mb-2">
                  &mdash; 50 Walks &mdash;
                </h4>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-headline text-5xl font-bold text-[#1B3022]">$1,800</span>
                  <span className="text-lg text-[#1B3022]/70">Total</span>
                </div>
                <p className="text-xl text-[#C5A059] font-bold mb-8">($36 Per Walk)</p>

                <ul className="space-y-3 flex-1">
                  <li className="flex items-start gap-2 text-lg text-[#1B3022]">
                    <span className="material-symbols-outlined text-[#C5A059] text-xl mt-0.5 shrink-0">check</span>
                    <span><strong>$2,400</strong> worth of credits</span>
                  </li>
                  <li className="flex items-start gap-2 text-lg text-[#1B3022]">
                    <span className="material-symbols-outlined text-[#C5A059] text-xl mt-0.5 shrink-0">check</span>
                    <span>Walks valid for <strong>1 full year</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-lg text-[#1B3022]">
                    <span className="material-symbols-outlined text-[#C5A059] text-xl mt-0.5 shrink-0">check</span>
                    <span>We waive <strong>late</strong> fees</span>
                  </li>
                  <li className="flex items-start gap-2 text-lg text-[#1B3022]">
                    <span className="material-symbols-outlined text-[#C5A059] text-xl mt-0.5 shrink-0">check</span>
                    <span>We waive <strong>add</strong> fees</span>
                  </li>
                  <li className="flex items-start gap-2 text-lg text-[#1B3022]">
                    <span className="material-symbols-outlined text-[#C5A059] text-xl mt-0.5 shrink-0">check</span>
                    <span>We waive <strong>medication</strong> fees</span>
                  </li>
                  <li className="flex items-start gap-2 text-lg text-[#1B3022]">
                    <span className="material-symbols-outlined text-[#C5A059] text-xl mt-0.5 shrink-0">check</span>
                    <span>We waive <strong>feeding</strong> fees</span>
                  </li>
                  <li className="flex items-start gap-2 text-lg text-[#1B3022]">
                    <span className="material-symbols-outlined text-[#C5A059] text-xl mt-0.5 shrink-0">check</span>
                    <span>We waive <strong>cancellation</strong> fees</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-[#e0ddd7]">
                  <p className="text-base font-bold uppercase tracking-widest text-[#C5A059] mb-2">Additional Dog</p>
                  <p className="font-headline text-3xl font-bold text-[#1B3022]">$1,125 <span className="text-lg font-body text-[#1B3022]">($22.50/Walk)</span></p>
                  <p className="mt-2 text-base text-[#1B3022]/80 italic">Ultimate VIP experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-base text-[#1B3022]/70">
            <p>All bundles require payment upfront at time of order.</p>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">Accepted:</span>
              <span className="font-headline text-[#1B3022]">Venmo</span>
              <span className="text-[#1B3022]/20">|</span>
              <span className="font-headline text-[#1B3022]">Zelle</span>
              <span className="text-[#1B3022]/20">|</span>
              <span className="font-headline text-[#1B3022]">PayPal</span>
              <span className="text-[#1B3022]/20">|</span>
              <span className="font-headline text-[#1B3022]">PetPocketBook</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
