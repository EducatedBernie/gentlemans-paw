export default function DogTrainingSection() {
  return (
    <section id="dog-training" className="scroll-mt-16 px-6 md:px-16 lg:px-24 py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Placeholder Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full aspect-[4/5] rounded-2xl bg-[#e5e2dc] flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-[#1B3022]/20">
              image
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C5A059] mb-4">
            Personalized Guidance
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-[#1B3022] leading-tight">
            1-on-1 Dog Training
          </h2>
          <p className="mt-6 text-lg text-[#333333]/80 leading-relaxed">
            Personalized sessions tailored to your dog&apos;s unique behavioral
            needs, from basic obedience to advanced rehabilitation. Our
            balanced training philosophy combines positive reinforcement with
            fair boundaries, giving your dog the clarity and confidence they
            need to thrive.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-2xl text-[#C5A059] mt-1">
                check_circle
              </span>
              <div>
                <p className="font-headline text-lg font-semibold text-[#1B3022]">
                  Leash Manners &amp; Public Etiquette
                </p>
                <p className="text-sm text-[#333333]/60 mt-1">
                  Building calm, controlled behavior in real-world settings
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-2xl text-[#C5A059] mt-1">
                check_circle
              </span>
              <div>
                <p className="font-headline text-lg font-semibold text-[#1B3022]">
                  Behavioral Rehabilitation
                </p>
                <p className="text-sm text-[#333333]/60 mt-1">
                  Addressing reactivity, anxiety, and fear-based behaviors
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-2xl text-[#C5A059] mt-1">
                check_circle
              </span>
              <div>
                <p className="font-headline text-lg font-semibold text-[#1B3022]">
                  Pack Preparation
                </p>
                <p className="text-sm text-[#333333]/60 mt-1">
                  Solo sessions before transitioning into structured group walks
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="font-headline text-lg font-semibold text-[#C5A059]">
              Inquire for pricing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
