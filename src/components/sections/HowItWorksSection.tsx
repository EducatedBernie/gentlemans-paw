const steps = [
  {
    number: "01",
    icon: "description",
    title: "Fill Out the Interest Form",
    description:
      "Tell us about your dog\u2014breed, age, energy level, and what you\u2019re looking for. We\u2019ll follow up to schedule your meet-and-greet.",
  },
  {
    number: "02",
    icon: "handshake",
    title: "Meet & Greet Evaluation",
    description:
      "A ~60 minute in-home session where we assess your dog\u2019s temperament, pack position, basic obedience, and identify any triggers or training needs.",
  },
  {
    number: "03",
    icon: "route",
    title: "Training or Pack Ready?",
    description:
      "If your dog is pack-ready, they join the group right away. If they need extra support, we\u2019ll recommend 1-on-1 training first to set them up for success.",
  },
  {
    number: "04",
    icon: "groups",
    title: "Join the Pack",
    description:
      "Your dog starts structured group walks\u2014building confidence, social skills, and better behavior with every outing. You\u2019ll get a report card after every walk.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-16 bg-[#1B3022] py-24">
      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <p className="text-xl font-bold tracking-[0.2em] uppercase text-[#C5A059] mb-4 text-center">
          Getting Started
        </p>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#F9F6F0] mb-16 text-center">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Connector line (hidden on first and on mobile) */}
              {i > 0 && (
                <div className="hidden lg:block absolute top-10 -left-4 w-8 h-0.5 bg-[#C5A059]/30" />
              )}

              {/* Number + Icon */}
              <div className="w-20 h-20 rounded-full bg-[#C5A059]/10 border-2 border-[#C5A059] flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl text-[#C5A059]">
                  {step.icon}
                </span>
              </div>

              <span className="text-sm font-bold tracking-widest text-[#C5A059] mb-2">
                Step {step.number}
              </span>
              <h3 className="font-headline text-xl font-bold text-[#F9F6F0] mb-3">
                {step.title}
              </h3>
              <p className="text-base text-[#F9F6F0] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
