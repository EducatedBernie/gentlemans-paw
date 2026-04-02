const requirements = [
  {
    icon: "cake",
    title: "Age Requirement",
    items: [
      "Dogs must be at least 14 weeks old to join pack walks",
      "Puppies should wait 7\u201310 days after completing their full vaccination series",
      "During this early stage, avoid dog parks, pet stores, and areas with unknown dogs",
    ],
  },
  {
    icon: "vaccines",
    title: "Vaccination Requirements",
    items: [
      "Rabies vaccine (boosters typically every 1\u20133 years)",
      "Canine Influenza vaccine (typically given annually)",
      "Flea & tick boosters (typically given every 6 months)",
    ],
  },
  {
    icon: "medical_services",
    title: "Spay / Neuter Policy",
    items: [
      { text: "We do allow unfixed dogs to join pack walks", excluded: false },
      { text: "Female dogs in heat cannot participate due to hormonal changes that disrupt pack stability", excluded: true },
      { text: "During that time, we offer drop-in visits until your dog can rejoin", excluded: false },
    ],
  },
  {
    icon: "assignment",
    title: "Training Evaluation",
    items: [
      "All dogs must complete a ~60 minute meet-and-greet evaluation",
      "We assess temperament and pack position (front, middle, or back)",
      "Review basic obedience: sit, down, heel, stay, leave-it, drop-it",
      "Identify triggers, tools, and training needs",
    ],
  },
  {
    icon: "pets",
    title: "All Breeds & Sizes Welcome",
    items: [
      "We accept all sizes: extra small, small, medium, large, extra large",
      "Dogs are grouped by energy, temperament, and walking pace\u2014not size",
      "If extra support is needed, we may recommend 1-on-1 training first",
    ],
  },
];

export default function PackWalkRequirementsSection() {
  return (
    <section id="requirements" className="scroll-mt-16 bg-[#1B3022] py-24">
      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <p className="text-xl font-bold tracking-[0.2em] uppercase text-[#C5A059] mb-4">
          Before You Join
        </p>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#F9F6F0] mb-6">
          Pack Walk Requirements
        </h2>
        <p className="text-lg text-[#F9F6F0] leading-relaxed max-w-2xl mb-16">
          To ensure a safe, balanced, and enjoyable experience for every dog, we
          have a few requirements before joining The Gentleman&apos;s Paw pack.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {requirements.map((req) => (
            <div
              key={req.title}
              className="bg-[#F9F6F0]/5 border border-[#F9F6F0]/10 rounded-xl p-8"
            >
              <span className="material-symbols-outlined text-4xl text-[#C5A059] mb-5 block">
                {req.icon}
              </span>
              <h3 className="font-headline text-xl text-[#F9F6F0] mb-4">
                {req.title}
              </h3>
              <ul className="space-y-2">
                {req.items.map((item, i) => {
                  const text = typeof item === "string" ? item : item.text;
                  const excluded = typeof item === "string" ? false : item.excluded;
                  return (
                    <li
                      key={i}
                      className="text-[#F9F6F0] text-base leading-relaxed flex items-start gap-2"
                    >
                      <span className={`material-symbols-outlined text-xl mt-0.5 shrink-0 ${excluded ? "text-red-400" : "text-[#C5A059]"}`}>
                        {excluded ? "close" : "check"}
                      </span>
                      <span>{text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#F9F6F0] mb-4">
            Ready to get started? Fill out our Interest Form and we&apos;ll
            schedule your dog&apos;s meet-and-greet evaluation.
          </p>
          <a
            href="https://forms.gle/LdQkrDTF2bVGQJVt6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C5A059] hover:bg-[#d4b06a] text-white font-semibold tracking-widest uppercase px-10 py-4 rounded transition-colors"
          >
            Interest Form
          </a>
        </div>
      </div>
    </section>
  );
}
