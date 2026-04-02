const philosophyItems = [
  {
    icon: "psychology",
    title: "Balanced Training Approach",
    description:
      "Our philosophy combines positive reinforcement with clear redirection when unwanted behaviors appear. Dogs are rewarded for calm, cooperative behavior and guided away from actions like pulling, fixation, or reactivity.",
  },
  {
    icon: "public",
    title: "Real-World Manners",
    description:
      "Every walk is a training opportunity. Dogs practice threshold manners, loose leash walking, impulse control, and basic obedience in real-life situations\u2014learning to move through the world with confidence.",
  },
  {
    icon: "groups",
    title: "The Power of the Pack",
    description:
      "Dogs are naturally social and learn best from other balanced dogs. Within a structured pack walk, dogs mirror calm behavior, follow the rhythm of the group, and build confidence through shared movement.",
  },
  {
    icon: "handyman",
    title: "Tools That Support Communication",
    description:
      "We use the least amount of pressure necessary to communicate clearly. Common tools include slip leads, gentle leaders, and prong collars when appropriate\u2014never to harm, only to guide.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16">
      {/* Header */}
      <div className="px-6 md:px-16 lg:px-24 pt-24 pb-20 max-w-7xl mx-auto">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#C5A059] mb-4">
          Our Story
        </p>
        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-[#1B3022] leading-tight max-w-3xl">
          Crafting Harmony Between Owner &amp; Dog
        </h2>
        <p className="mt-6 text-lg text-[#333333]/80 leading-relaxed max-w-3xl">
          The Gentleman&apos;s Paw is dedicated to building a strong,
          well-balanced dog community through structured group pack walks,
          fostering socialization, obedience, and behavior management making
          your dog more proper. Our walks and training programs focus on
          self-control, patience, stability, agility, and problem-solving to
          create happier, well-mannered dogs at home.
        </p>
      </div>

      {/* Why Pack Walks Work */}
      <div className="bg-[#333333] py-24">
        <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#fed488] mb-4">
            Our Philosophy
          </p>
          <h3 className="font-headline text-3xl md:text-4xl text-white mb-6">
            Why Pack Walks Work
          </h3>
          <p className="text-white/70 leading-relaxed max-w-2xl mb-16">
            We believe balanced dogs are created through structured exercise,
            clear communication, and calm leadership. Our pack walks meet both
            the physical and mental needs of dogs while reinforcing behaviors
            that make everyday life easier for families.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {philosophyItems.map((item) => (
              <div key={item.title} className="flex flex-col">
                <span className="material-symbols-outlined text-[#fed488] text-4xl mb-6">
                  {item.icon}
                </span>
                <h4 className="font-headline text-xl text-white mb-4">
                  {item.title}
                </h4>
                <p className="text-white/70 leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* The Result */}
          <div className="mt-20 border-t border-white/10 pt-12 max-w-2xl">
            <p className="text-white/80 leading-relaxed">
              When dogs receive structured exercise, leadership, and the support
              of a balanced pack, they return home calmer, more focused, mentally
              fulfilled, and easier to live with.
            </p>
            <p className="mt-4 font-headline text-lg text-[#fed488] italic">
              Because a well-walked dog isn&apos;t just tired. It&apos;s balanced.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
