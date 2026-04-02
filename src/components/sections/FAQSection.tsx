const faqs = [
  {
    question: "What is a pack walk?",
    answer:
      "A structured group walk where up to 10 balanced dogs move together with clear leadership. It\u2019s not just exercise\u2014dogs learn calm behavior, social balance, and better leash manners while walking as a group. Each session is 1 hour + drive time. Depending on the weather we get between 1.5\u20132.5 miles per session + photos + walking recap.",
  },
  {
    question: "Is my dog a good fit for pack walks?",
    answer:
      "Dogs thrive with a sense of purpose and guidance. We require a meet-and-greet evaluation to assess your dog\u2019s basic obedience, energy level, and pack compatibility. We accept all sizes and breeds\u2014what matters most is your dog\u2019s energy, temperament, and ability to move within a structured group. If your dog needs extra support, we may recommend 1-on-1 training first to set them up for success.",
  },
  {
    question: "What happens during the meet-and-greet?",
    answer:
      "This is a ~60 minute evaluation where we assess your dog\u2019s behavior and pack position, review basic obedience (sit, down, heel, stay, place, leave-it, and drop-it), identify any triggers or sensitivities, and go over home access and routines. If your dog needs extra support, we may recommend 1-on-1 training first.",
  },
  {
    question: "Do you accept puppies and older dogs?",
    answer:
      "Yes & Yes! Puppies must be at least 14 weeks + vaccines and older dogs must at least be able to walk the full hour to join the pack. For older or younger dogs we offer drop-in services to make sure they receive the outlet they need at the pace they feel comfortable with.",
  },
  {
    question: "Can my dog join if they are not spayed or neutered?",
    answer:
      "Yes, we welcome unneutered dogs. However, female dogs in heat cannot join pack walks for safety reasons. We offer drop-in visits during that time.",
  },
  {
    question: "Does my dog receive training on the walk?",
    answer:
      "Yes. Every walk is a structured training session in motion. We reinforce loose leash walking, impulse control and calm behavior around distractions, threshold manners and boundaries, and basic obedience (sit, heel, stay, leave-it, drop-it). If your dog needs extra support, we may recommend 1-on-1 training first.",
  },
  {
    question: "What vaccines are required?",
    answer:
      "Dogs must be up to date on: Rabies vaccine (boosters typically every 1\u20133 years), Canine Influenza vaccine (typically given annually), and Flea & tick boosters (typically given every 6 months).",
  },
  {
    question: "What if my dog pulls or is reactive?",
    answer:
      "Many dogs that show reactivity aren\u2019t \u201Cproblem dogs\u201D\u2014they often have unmet needs or a lack of clear, calm leadership, which can lead to confusion and heightened responses. We require a meet-and-greet evaluation to assess your dog\u2019s needs. If extra support is needed, we may recommend 1-on-1 training first to set them up for success.",
  },
  {
    question: "What tools do you use?",
    answer:
      "Our philosophy is to use the least amount of pressure necessary\u2014never to harm, only to guide. We use tools that support clear, safe communication, including slip leads, gentle leaders / Halti, and prong collars (when appropriate). When calm energy and body language aren\u2019t enough, we use clear interruption cues to safely redirect the dog\u2019s focus.",
  },
  {
    question: "How does pickup and drop-off work?",
    answer:
      "We offer home pickup and drop-off for your convenience. Not home? No worries\u2014we can go over contactless entry (codes, keys, gates) + photo update of the security checkout to make sure your home is secure. Need a different pickup or drop-off location? We can add multiple addresses to your profile (additional fees may apply).",
  },
  {
    question: "How often should my dog join?",
    answer:
      "Most busy clients book 4\u20138 times per week for best results. Consistency helps dogs release energy regularly, build better habits faster, stay calm at home, and feel fulfilled with a sense of purpose.",
  },
  {
    question: "Will I get updates?",
    answer:
      "Yes! We provide GPS tracking, photo and text updates so you can see your dog enjoying their walk and progressing over time. Communication is provided in our group chats and through our mobile app \u201CPetPocketBook.\u201D",
  },
  {
    question: "Do you offer boarding and house sitting?",
    answer:
      "Yes\u2014we offer both for current clients. To get started, complete a meet-and-greet and book at least one pack walk. Boarding is $100 per night (+$50 extra dog)\u2014your dog stays with one of our handlers and joins daily pack walks. House Sitting is $150 per day (+$50 extra dog)\u2014a handler stays in your home overnight and during the day. Both services include daily updates through our group chats.",
  },
  {
    question: "Do you offer daycare?",
    answer:
      "We currently do not offer traditional daycare. However, each pack walk session lasts 2\u20133 hours, providing structured exercise, training, and socialization. If you\u2019re looking for more coverage, sessions can be paired together\u2014morning, afternoon, evening, and drop-ins\u2014to create a half-day or full-day schedule.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-16 px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <p className="text-xl font-bold uppercase tracking-widest text-[#C5A059] mb-4 text-center">
          Concierge Support
        </p>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#1B3022] text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-[#f0ede7] rounded-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-headline text-lg font-semibold text-[#1B3022] list-none">
                <span>{faq.question}</span>
                <span className="material-symbols-outlined text-[#C5A059] transition-transform duration-300 group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 text-[#1B3022] leading-relaxed text-lg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
