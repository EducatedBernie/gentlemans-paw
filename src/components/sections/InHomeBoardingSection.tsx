export default function InHomeBoardingSection() {
  return (
    <section id="boarding" className="scroll-mt-16 bg-[#f0ede7] px-6 md:px-16 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-lg font-semibold uppercase tracking-widest text-[#C5A059] mb-4 text-center">
          Extended Care
        </p>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#1B3022] mb-6 text-center">
          In-Home Boarding &amp; More
        </h2>
        <p className="text-lg text-[#333333]/70 leading-relaxed max-w-2xl mx-auto text-center mb-16">
          Available for current clients. To get started, complete a
          meet-and-greet and book at least one pack walk. Both services
          include daily updates through our group chats.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Luxury Boarding */}
          <div className="bg-[#F9F6F0] rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden">
            <span className="absolute top-4 right-4 bg-[#C5A059] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
              Members Only
            </span>
            <span className="material-symbols-outlined text-5xl text-[#C5A059] mb-6">
              home_iot_device
            </span>
            <h3 className="font-headline text-xl font-semibold text-[#1B3022]">
              Boarding
            </h3>
            <p className="mt-3 text-[#333333]/80 leading-relaxed text-sm flex-1">
              Your dog stays with one of our assigned handlers at their home and
              joins our daily pack walks for structure, exercise, and
              socialization.
            </p>
            <div className="mt-6">
              <p className="font-headline text-lg font-semibold text-[#1B3022]">
                $100<span className="text-sm font-body text-[#333333]/60">/night</span>
              </p>
              <p className="text-sm text-[#333333]/60 mt-1">
                +$50 per additional dog
              </p>
            </div>
          </div>

          {/* House Sitting */}
          <div className="bg-[#F9F6F0] rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden">
            <span className="absolute top-4 right-4 bg-[#C5A059] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
              Members Only
            </span>
            <span className="material-symbols-outlined text-5xl text-[#C5A059] mb-6">
              night_shelter
            </span>
            <h3 className="font-headline text-xl font-semibold text-[#1B3022]">
              House Sitting
            </h3>
            <p className="mt-3 text-[#333333]/80 leading-relaxed text-sm flex-1">
              A handler stays in your home overnight and during the day,
              maintaining your dog&apos;s routine while still including them in
              our pack walks.
            </p>
            <div className="mt-6">
              <p className="font-headline text-lg font-semibold text-[#1B3022]">
                $150<span className="text-sm font-body text-[#333333]/60">/day</span>
              </p>
              <p className="text-sm text-[#333333]/60 mt-1">
                +$50 per additional dog
              </p>
            </div>
          </div>

          {/* Drop-in Visits */}
          <div className="bg-[#F9F6F0] rounded-2xl p-8 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-5xl text-[#C5A059] mb-6">
              door_front
            </span>
            <h3 className="font-headline text-xl font-semibold text-[#1B3022]">
              Drop-in Visits
            </h3>
            <p className="mt-3 text-[#333333]/80 leading-relaxed text-sm flex-1">
              Quick check-ins for feeding, potty breaks, and companionship
              when you&apos;re away for shorter stretches. Great for puppies,
              seniors, or dogs in heat who can&apos;t join pack walks.
            </p>
            <p className="mt-6 font-headline text-lg font-semibold text-[#1B3022]">
              $35<span className="text-sm font-body text-[#333333]/60">/visit</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
