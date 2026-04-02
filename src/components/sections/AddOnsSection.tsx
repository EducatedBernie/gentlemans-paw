// TODO:
// - Add pictures for each of the timeline items (HowItWorksSection)
// - Add pictures for each extended care service card (InHomeBoardingSection)

const addOns = [
  {
    icon: "restaurant",
    title: "Feeding",
    price: "$5",
    priceSuffix: "per meal",
    description: "We\u2019ll feed your dog during the visit. Charged per meal.",
  },
  {
    icon: "medication",
    title: "Medication",
    price: "$5",
    priceSuffix: "per administration",
    description: "We\u2019ll administer your dog\u2019s medication. Charged each time it\u2019s given.",
  },
  {
    icon: "cleaning_services",
    title: "Touch-Up Clean",
    price: "$10",
    priceSuffix: "",
    description: "Light cleanup if your dog has an accident in the house (pee).",
  },
  {
    icon: "mop",
    title: "Deep Clean / Car Cleanup",
    price: "$25",
    priceSuffix: "",
    description: "Bigger messes in the house or car\u2014vomit, mud tracking, or accidents during transport.",
  },
];

export default function AddOnsSection() {
  return (
    <section id="add-ons" className="scroll-mt-16 px-6 md:px-16 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-xl font-bold uppercase tracking-widest text-[#C5A059] mb-4 text-center">
          Add-On Services
        </p>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#1B3022] mb-6 text-center">
          Extra Care When You Need It
        </h2>
        <p className="text-xl text-[#1B3022] leading-relaxed max-w-2xl mx-auto text-center mb-16">
          Available as extras on any walk, boarding stay, or drop-in visit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOns.map((item) => (
            <div
              key={item.title}
              className="bg-[#F9F6F0] border border-[#e0ddd7] rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <span className="material-symbols-outlined text-6xl text-[#C5A059] mb-5">
                {item.icon}
              </span>
              <h3 className="font-headline text-xl font-bold text-[#1B3022] mb-2">
                {item.title}
              </h3>
              <p className="text-lg text-[#1B3022] leading-relaxed flex-1 mb-4">
                {item.description}
              </p>
              <p className="font-headline text-3xl font-bold text-[#1B3022]">
                {item.price}
                {item.priceSuffix && <span className="text-base font-body text-[#1B3022] ml-1">/{item.priceSuffix}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
