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
      <div className="px-6 md:px-16 lg:px-24 pt-24 pb-0 max-w-7xl mx-auto">
        <p className="text-xl font-bold tracking-[0.2em] uppercase text-[#C5A059] mb-6">
          Our Story
        </p>
        <p className="text-xl md:text-2xl text-[#333333] leading-relaxed max-w-4xl">
          The Gentleman&apos;s Paw is dedicated to building a strong,
          well-balanced dog community through structured group pack walks,
          fostering socialization, obedience, and behavior management making
          your dog more proper. Our walks and training programs focus on
          self-control, patience, stability, agility, and problem-solving to
          create happier, well-mannered dogs at home.
        </p>
      </div>

      {/* Why Pack Walks Work */}
      <div className="bg-[#F9F6F0] pt-12 pb-24">
        <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <p className="text-xl font-bold tracking-[0.2em] uppercase text-[#C5A059] mb-4">
            Our Philosophy
          </p>
          <h3 className="font-headline text-3xl md:text-4xl text-[#1B3022] mb-6">
            Why Pack Walks Work
          </h3>
          <p className="text-[#1B3022] leading-relaxed max-w-2xl mb-16 text-xl">
            We believe balanced dogs are created through structured exercise,
            clear communication, and calm leadership. Our pack walks meet both
            the physical and mental needs of dogs while reinforcing behaviors
            that make everyday life easier for families.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {philosophyItems.map((item) => (
              <div key={item.title} className="flex flex-col">
                <span className="material-symbols-outlined text-[#C5A059] text-4xl mb-6">
                  {item.icon}
                </span>
                <h4 className="font-headline text-xl text-[#1B3022] mb-4">
                  {item.title}
                </h4>
                <p className="text-[#1B3022] leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* The Result */}
          <div className="mt-20 border-t border-[#e0ddd7] pt-12 max-w-2xl">
            <p className="text-[#333333] leading-relaxed text-lg">
              When dogs receive structured exercise, leadership, and the support
              of a balanced pack, they return home calmer, more focused, mentally
              fulfilled, and easier to live with.
            </p>
            <p className="mt-4 font-headline text-lg text-[#C5A059] italic">
              Because a well-walked dog isn&apos;t just tired. It&apos;s balanced.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
