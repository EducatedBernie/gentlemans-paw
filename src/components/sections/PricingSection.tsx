export default function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-16">
      <div className="px-6 md:px-16 lg:px-24 py-24 max-w-7xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#C5A059] mb-4 text-center">
          Choose Your Walk Pack &amp; Save
        </p>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#1B3022] mb-6 text-center">
          Membership Pricing
        </h2>
        <p className="text-lg text-[#333333]/70 leading-relaxed max-w-2xl mx-auto text-center mb-8">
          Every walk includes lead walking and training in locations suited to
          the needs of the pack. Travel time is included but not in the hour,
          so your dog is guaranteed its full hour outside.
        </p>

        {/* Single Walk Rate */}
        <div className="max-w-md mx-auto mb-16">
          <div className="bg-[#f0ede7] rounded-xl px-8 py-6 text-center">
            <p className="font-headline text-lg font-semibold text-[#1B3022]">
              Single 1-Hour Walk
            </p>
            <div className="mt-2 flex items-baseline justify-center gap-2">
              <span className="font-headline text-4xl font-bold text-[#1B3022]">
                $48
              </span>
              <span className="text-[#333333]/60">per walk</span>
            </div>
            <p className="mt-3 text-sm text-[#333333]/60 leading-relaxed">
              Includes report card after each walk via our app, water,
              towel-down, and brush before returning home.
            </p>
          </div>
        </div>

        {/* Tiered Bundle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Standard Pack - 10 Walks */}
          <div className="bg-[#F9F6F0] border border-[#e0ddd7] rounded-2xl p-8 flex flex-col relative">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-2">
              Standard Pack
            </p>
            <h3 className="font-headline text-xl font-semibold text-[#1B3022] mb-1">
              10 Walks
            </h3>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-headline text-4xl font-bold text-[#1B3022]">
                $450
              </span>
              <span className="text-sm text-[#333333]/60">total</span>
            </div>
            <p className="text-sm text-[#C5A059] font-semibold mb-6">
              $45 per walk
            </p>

            <ul className="space-y-3 flex-1">
              <li className="flex items-start gap-2 text-sm text-[#333333]/80">
                <span className="material-symbols-outlined text-[#C5A059] text-base mt-0.5 shrink-0">check</span>
                Priority Scheduling
              </li>
              <li className="flex items-start gap-2 text-sm text-[#333333]/80">
                <span className="material-symbols-outlined text-[#C5A059] text-base mt-0.5 shrink-0">check</span>
                Walks valid for 1 full year
              </li>
              <li className="flex items-start gap-2 text-sm text-[#333333]/80">
                <span className="material-symbols-outlined text-[#C5A059] text-base mt-0.5 shrink-0">check</span>
                $480 worth of credits
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-[#e0ddd7]">
              <p className="text-xs font-bold uppercase tracking-wider text-[#333333]/50 mb-1">
                Additional Dog
              </p>
              <p className="font-headline text-lg font-semibold text-[#1B3022]">
                $280 <span className="text-sm font-body text-[#333333]/60">($28/walk)</span>
              </p>
            </div>

            <p className="mt-4 text-xs text-[#333333]/50 italic">
              Perfect for occasional walkers
            </p>
          </div>

          {/* Regular Pack - 20 Walks */}
          <div className="bg-[#F9F6F0] border border-[#e0ddd7] rounded-2xl p-8 flex flex-col relative">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-2">
              Regular Pack
            </p>
            <h3 className="font-headline text-xl font-semibold text-[#1B3022] mb-1">
              20 Walks
            </h3>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-headline text-4xl font-bold text-[#1B3022]">
                $800
              </span>
              <span className="text-sm text-[#333333]/60">total</span>
            </div>
            <p className="text-sm text-[#C5A059] font-semibold mb-6">
              $40 per walk
            </p>

            <ul className="space-y-3 flex-1">
              <li className="flex items-start gap-2 text-sm text-[#333333]/80">
                <span className="material-symbols-outlined text-[#C5A059] text-base mt-0.5 shrink-0">check</span>
                Priority Scheduling
              </li>
              <li className="flex items-start gap-2 text-sm text-[#333333]/80">
                <span className="material-symbols-outlined text-[#C5A059] text-base mt-0.5 shrink-0">check</span>
                Walks valid for 1 full year
              </li>
              <li className="flex items-start gap-2 text-sm text-[#333333]/80">
                <span className="material-symbols-outlined text-[#C5A059] text-base mt-0.5 shrink-0">check</span>
                $960 worth of credits
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-[#e0ddd7]">
              <p className="text-xs font-bold uppercase tracking-wider text-[#333333]/50 mb-1">
                Additional Dog
              </p>
              <p className="font-headline text-lg font-semibold text-[#1B3022]">
                $500 <span className="text-sm font-body text-[#333333]/60">($25/walk)</span>
              </p>
            </div>

            <p className="mt-4 text-xs text-[#333333]/50 italic">
              Great value for consistent walkers
            </p>
          </div>

          {/* VIP Elite Pack - 50 Walks */}
          <div className="bg-[#1B3022] rounded-2xl p-8 flex flex-col relative overflow-hidden">
            <span className="absolute top-4 right-4 bg-[#C5A059] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
              VIP
            </span>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-2">
              VIP Elite Pack
            </p>
            <h3 className="font-headline text-xl font-semibold text-[#F9F6F0] mb-1">
              50 Walks
            </h3>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-headline text-4xl font-bold text-[#F9F6F0]">
                $1,800
              </span>
              <span className="text-sm text-[#F9F6F0]/60">total</span>
            </div>
            <p className="text-sm text-[#C5A059] font-semibold mb-6">
              $36 per walk
            </p>

            <ul className="space-y-3 flex-1">
              <li className="flex items-start gap-2 text-sm text-[#F9F6F0]/80">
                <span className="material-symbols-outlined text-[#C5A059] text-base mt-0.5 shrink-0">check</span>
                $2,400 worth of credits
              </li>
              <li className="flex items-start gap-2 text-sm text-[#F9F6F0]/80">
                <span className="material-symbols-outlined text-[#C5A059] text-base mt-0.5 shrink-0">check</span>
                Walks valid for 1 full year
              </li>
              <li className="flex items-start gap-2 text-sm text-[#F9F6F0]/80">
                <span className="material-symbols-outlined text-[#C5A059] text-base mt-0.5 shrink-0">check</span>
                We waive late fees
              </li>
              <li className="flex items-start gap-2 text-sm text-[#F9F6F0]/80">
                <span className="material-symbols-outlined text-[#C5A059] text-base mt-0.5 shrink-0">check</span>
                We waive add fees
              </li>
              <li className="flex items-start gap-2 text-sm text-[#F9F6F0]/80">
                <span className="material-symbols-outlined text-[#C5A059] text-base mt-0.5 shrink-0">check</span>
                We waive medication fees
              </li>
              <li className="flex items-start gap-2 text-sm text-[#F9F6F0]/80">
                <span className="material-symbols-outlined text-[#C5A059] text-base mt-0.5 shrink-0">check</span>
                We waive feeding fees
              </li>
              <li className="flex items-start gap-2 text-sm text-[#F9F6F0]/80">
                <span className="material-symbols-outlined text-[#C5A059] text-base mt-0.5 shrink-0">check</span>
                We waive cancellation fees
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-[#F9F6F0]/10">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F9F6F0]/40 mb-1">
                Additional Dog
              </p>
              <p className="font-headline text-lg font-semibold text-[#F9F6F0]">
                $1,125 <span className="text-sm font-body text-[#F9F6F0]/60">($22.50/walk)</span>
              </p>
            </div>

            <p className="mt-4 text-xs text-[#F9F6F0]/40 italic">
              Ultimate VIP experience
            </p>
          </div>
        </div>

        {/* Payment Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#333333]/60 mb-4">
            All bundles require payment upfront at time of order.
          </p>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C5A059] mb-3">
            Payments Accepted
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <span className="font-headline text-lg text-[#1B3022]">Venmo</span>
            <span className="text-[#1B3022]/20">|</span>
            <span className="font-headline text-lg text-[#1B3022]">Zelle</span>
            <span className="text-[#1B3022]/20">|</span>
            <span className="font-headline text-lg text-[#1B3022]">PayPal</span>
            <span className="text-[#1B3022]/20">|</span>
            <span className="font-headline text-lg text-[#1B3022]">PetPocketBook</span>
          </div>
          <p className="mt-2 text-xs text-[#333333]/50">
            PetPocketBook available for hassle-free autopay on all bundles
          </p>
        </div>
      </div>
    </section>
  );
}
