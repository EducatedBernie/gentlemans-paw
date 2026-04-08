const addOns = [
  {
    icon: "schedule",
    title: "Late Add Fee",
    price: "$15",
    priceSuffix: "",
    description: "Same-day or last-minute walk addition fee.",
  },
  {
    icon: "event_busy",
    title: "Late Cancellation Fee",
    price: "$25",
    priceSuffix: "",
    description: "Cancellations with less than 24-hour notice.",
  },
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
    priceSuffix: "per instance",
    description: "We\u2019ll administer your dog\u2019s medication. Charged per instance.",
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
    title: "Deep Cleaning Fee",
    price: "$25",
    priceSuffix: "",
    description: "A deep cleaning fee will apply if your pet vomits, urinates, defecates, or rolls in messes, which require your pet and/or the premises to be cleaned.",
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
          One or more charges may be added to your bill, as appropriate.
          Notification with pictures from The Gentleman&apos;s Paw will be sent
          before actual billing occurs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <p className="text-base text-[#1B3022] leading-relaxed flex-1 mb-4">
                {item.description}
              </p>
              <p className="font-headline text-3xl font-bold text-[#C5A059]">
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
