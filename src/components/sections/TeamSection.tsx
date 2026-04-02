import Image from "next/image";

const teamMembers = [
  {
    name: "Reid Yoshida-Nguyen",
    title: "Founder & CEO",
    image: "/images/team-reid.png",
    description:
      "Founded The Gentleman\u2019s Paw in 2021 amid a career break. Rooted in the mission that quality pet care must be implemented in community with others. Understands that families in Silicon Valley operate on extremely busy schedules and rarely have enough energy to care for their dogs\u2019 socialization needs.",
  },
  {
    name: "Hoang Dang",
    title: "Senior Service Associate",
    image: "/images/team-hoang.png",
    description:
      "Specializes in both dog walking and boarding in a cozy, limited-capacity environment. Passionate about taking furry companions on nature hikes and organizing fun, supervised play sessions. A master chef in the kitchen and dedicated community volunteer.",
  },
  {
    name: "Debra Cavlan",
    title: "Senior Service Associate",
    image: "/images/team-debra.png",
    description:
      "With experience working at City Dog Club, Debra has managed dogs of all temperaments. Her calm and loving leadership helps build trust, making even the most hesitant pups feel at ease. A full-time mom to two kids with a growing family.",
  },
  {
    name: "Matthew Hinton",
    title: "Senior Service Associate",
    image: "/images/team-matthew.png",
    description:
      "Brings years of hands-on experience in pet sitting and dog care with a calm, confident presence on every walk. Proud dog dad of a hyperactive high-energy lab-mix named Loki, who occasionally joins the pack for extra fun.",
  },
  {
    name: "Erika Pham",
    title: "Service Associate",
    image: "/images/team-erika.png",
    description:
      "Her journey started with her dog Snowflake\u2014a small toy doodle who used to be anxious and sensitive. Through patience and calm leadership, she helped him become more balanced and confident. Currently pursuing a veterinary degree.",
  },
  {
    name: "Sofia Reasons-Duque",
    title: "Service Associate",
    image: "/images/team-sofia.png",
    description:
      "Grew up around all kinds of dogs on her family\u2019s ranch, learning to read their energy and understand their needs. Has hands-on experience at A Plus Pet Grooming and Boarding handling dogs of all temperaments. Pet parent to Bruno, a Dachshund/Black Spaniel mix.",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="scroll-mt-16">
      {/* Founder Story */}
      <div className="px-6 md:px-16 lg:px-24 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Founder Photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl w-full overflow-hidden">
              <Image
                src="/images/founder-reid.png"
                alt="Reid Yoshida-Nguyen, Founder"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 bg-[#1B3022] text-[#F9F6F0] px-5 py-2.5 rounded-lg">
              <span className="font-headline text-sm tracking-wide">
                Est. 2021
              </span>
            </div>
          </div>

          {/* Right: Story Content */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#C5A059] mb-4">
              About the Founder
            </p>
            <h2 className="font-headline text-3xl md:text-4xl text-[#1B3022] mb-8">
              How It All Started
            </h2>
            <div className="space-y-6 text-[#333333] leading-relaxed">
              <p>
                Like many dog owners, I grew up in a home where life was busy.
                My single mom worked hard, and although we loved our dog deeply,
                she didn&apos;t always get the exercise and social interaction
                she needed. The result was familiar to many families&mdash;chewed
                shoes, torn-up yards, and a restless dog trying to release
                pent-up energy.
              </p>
              <p>
                But something interesting happened whenever our extended family
                gathered together going out on pack walks. Suddenly, our dog
                became calm, balanced, and well-behaved. Being around other dogs
                and moving together changed everything. That moment stuck with me.
              </p>
              <p>
                Years later, I began studying Cesar Millan&apos;s philosophy of
                structured pack walks and realized something powerful: many
                behavioral issues aren&apos;t about bad dogs&mdash;they&apos;re
                about unmet needs. Dogs thrive when they have exercise,
                structure, and community.
              </p>
              <p>
                In 2021, I started The Gentleman&apos;s Paw as a one-man
                operation in Saratoga with a simple mission: help dogs live
                calmer, happier lives through structured pack walks. Today, our
                team proudly serves families across Santa Clara County, helping
                dogs release energy, build confidence, and return home relaxed
                and fulfilled.
              </p>
              <p className="font-headline text-[#1B3022] italic">
                Because when dogs get the movement and structure they need,
                everyone enjoys a more peaceful home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="px-6 md:px-16 lg:px-24 pb-24 max-w-7xl mx-auto">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#C5A059] mb-4">
          The Team
        </p>
        <h3 className="font-headline text-3xl md:text-4xl text-[#1B3022] mb-16">
          Meet the Pack Leaders
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col">
              <div className="relative aspect-[4/5] rounded-xl mb-5 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-headline text-xl text-[#1B3022]">
                {member.name}
              </h4>
              <p className="text-sm font-medium text-[#C5A059] mt-1 mb-3">
                {member.title}
              </p>
              <p className="text-[#333333] text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
