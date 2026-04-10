const featuredAddOns = [
  {
    icon: "home_work",
    title: "Drop-In Visit",
    description:
      "Personalized in-home care include feeding, fresh water, medication administration, and supervised potty breaks.",
    price: "$40",
    priceSuffix: "per visit",
    extra: "+$50 per additional animal",
  },
  {
    icon: "content_cut",
    title: "Grooming Touch-Up",
    description:
      "Quick brush-outs, paw cleaning, and hygienic wipes to keep your pack member feeling refreshed after their active walk.",
    price: "Coming Soon",
    priceSuffix: "",
    extra: "",
  },
  {
    icon: "night_shelter",
    title: "House Sitting",
    description:
      "A handler stays in your home overnight and during the day, maintaining your dog\u2019s routine while still including them in our pack walks.",
    price: "$150",
    priceSuffix: "/day",
    extra: "+$50 per additional dog",
  },
  {
    icon: "home_iot_device",
    title: "Boarding",
    description:
      "Your dog stays with one of our assigned handlers at their home and joins our daily pack walks for structure, exercise, and socialization.",
    price: "$100",
    priceSuffix: "/night",
    extra: "+$50 per additional dog",
  },
];

const fees = [
  {
    icon: "schedule",
    title: "Late Add Fee",
    subtitle: "Added within 24h",
    price: "$15",
    priceSuffix: "",
  },
  {
    icon: "event_busy",
    title: "Late Cancellation Fee",
    subtitle: "Less than 24h notice",
    price: "$25",
    priceSuffix: "",
  },
  {
    icon: "restaurant",
    title: "Feeding",
    subtitle: "Individual meal prep",
    price: "$5",
    priceSuffix: "/per meal",
  },
  {
    icon: "medication",
    title: "Medication",
    subtitle: "Oral or topical admin",
    price: "$5",
    priceSuffix: "/per instance",
  },
  {
    icon: "cleaning_services",
    title: "Touch-Up Clean",
    subtitle: "Post-walk rinse & dry",
    price: "$10",
    priceSuffix: "",
  },
  {
    icon: "mop",
    title: "Deep Cleaning Fee",
    subtitle: "Excessive mud/cleanup",
    price: "$25",
    priceSuffix: "",
  },
];

export default function AddOnsSection() {
  return (
    <section id="add-ons" className="scroll-mt-16 px-6 md:px-16 lg:px-24 py-24 bg-[#f0ede7]">
      <div className="max-w-7xl mx-auto">
        <p className="text-xl font-bold uppercase tracking-widest text-[#C5A059] mb-4 text-center">
          Add-On Services
        </p>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#1B3022] mb-6 text-center">
          Extras &amp; Additional Charges
        </h2>
        <p className="text-xl text-[#1B3022] leading-relaxed max-w-3xl mx-auto text-center mb-16">
          From specialized home visits to hygiene touch-ups, we ensure your pet
          receives the highest standard of tailored care.
        </p>

        {/* Featured Services - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {featuredAddOns.map((item) => (
            <div
              key={item.title}
              className="bg-[#F9F6F0] border border-[#e0ddd7] rounded-2xl p-8 flex flex-col items-center text-center relative"
            >
              {item.price === "Coming Soon" && (
                <span className="absolute top-4 right-4 bg-[#1B3022] text-[#F9F6F0] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  TBA
                </span>
              )}
              <span className="material-symbols-outlined text-5xl text-[#C5A059] mb-4">
                {item.icon}
              </span>
              <h3 className="font-headline text-2xl font-bold text-[#1B3022] mb-3">
                {item.title}
              </h3>
              <p className="text-base text-[#1B3022] leading-relaxed flex-1 mb-4">
                {item.description}
              </p>
              {item.price === "Coming Soon" ? (
                <p className="font-headline text-xl font-bold text-[#C5A059]">
                  Coming Soon
                </p>
              ) : (
                <p className="font-headline text-xl font-bold text-[#C5A059]">
                  {item.price}<span className="text-base font-body text-[#1B3022]">{item.priceSuffix}</span>
                </p>
              )}
              {item.extra && (
                <p className="text-base text-[#C5A059] mt-1">{item.extra}</p>
              )}
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="border-t border-[#e0ddd7] mb-12" />

        {/* Additional Fees - Compact 3x2 Grid */}
        <p className="text-xl font-bold uppercase tracking-widest text-[#C5A059] mb-8 text-center">
          Additional Fees &amp; Services
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {fees.map((item) => (
            <div
              key={item.title}
              className="bg-[#F9F6F0] border border-[#e0ddd7] rounded-xl px-6 py-5 flex items-center justify-between gap-4"
            >
              <div className="flex-1">
                <h4 className="font-headline text-base font-bold text-[#1B3022]">
                  {item.title}
                </h4>
                <p className="text-sm text-[#1B3022] mt-0.5">
                  {item.subtitle}
                </p>
                <p className="font-headline text-xl font-bold text-[#C5A059] mt-2">
                  {item.price}
                  {item.priceSuffix && <span className="text-sm font-body text-[#1B3022] ml-1">{item.priceSuffix}</span>}
                </p>
              </div>
              <span className="material-symbols-outlined text-4xl text-[#C5A059] shrink-0">
                {item.icon}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
