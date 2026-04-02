import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#333333] w-full py-20 text-sm leading-relaxed tracking-wide">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 max-w-screen-2xl mx-auto text-left">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-white-black.png"
              alt="The Gentleman's Paw"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-lg font-headline text-[#F9F6F0] uppercase tracking-widest">
              The Gentleman&apos;s Paw
            </span>
          </div>
          <p className="text-[#F9F6F0] max-w-xs font-body">
            Excellence in canine behavior and social structure. Elevating the
            standard of care for Santa Clara&apos;s dogs.
          </p>
        </div>

        <div className="space-y-4">
          <h5 className="text-[#C5A059] font-bold uppercase tracking-widest text-xs mb-6">
            Navigation
          </h5>
          <ul className="space-y-3 font-body">
            <li>
              <a
                href="#about"
                className="text-[#F9F6F0] hover:text-[#F9F6F0] transition-colors hover:translate-x-1 duration-300 inline-block"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#pack-walks"
                className="text-[#F9F6F0] hover:text-[#F9F6F0] transition-colors hover:translate-x-1 duration-300 inline-block"
              >
                Pack Walks
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-[#F9F6F0] hover:text-[#F9F6F0] transition-colors hover:translate-x-1 duration-300 inline-block"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-[#F9F6F0] hover:text-[#F9F6F0] transition-colors hover:translate-x-1 duration-300 inline-block"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="text-[#C5A059] font-bold uppercase tracking-widest text-xs mb-6">
            Connect
          </h5>
          <ul className="space-y-3 font-body">
            <li>
              <a
                href="mailto:concierge@gentlemanspaw.com"
                className="text-[#F9F6F0] hover:text-[#F9F6F0] transition-colors hover:translate-x-1 duration-300 inline-block"
              >
                Join the Pack
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#F9F6F0] hover:text-[#F9F6F0] transition-colors hover:translate-x-1 duration-300 inline-block"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#F9F6F0] hover:text-[#F9F6F0] transition-colors hover:translate-x-1 duration-300 inline-block"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="text-[#F9F6F0] hover:text-[#F9F6F0] transition-colors hover:translate-x-1 duration-300 inline-block"
              >
                Our Team
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="text-[#C5A059] font-bold uppercase tracking-widest text-xs mb-6">
            Location
          </h5>
          <p className="text-[#F9F6F0] leading-relaxed font-body">
            Serving Los Gatos, Saratoga,
            <br />
            and South San Jose regions of
            <br />
            Santa Clara County.
          </p>
          <div className="pt-4">
            <span className="material-symbols-outlined text-[#C5A059]">
              location_on
            </span>
          </div>
        </div>
      </div>

      <div className="mt-20 px-6 md:px-12 max-w-screen-2xl mx-auto pt-8 border-t border-white/10 text-center md:text-left">
        <p className="text-[#F9F6F0] text-xs uppercase tracking-widest font-body">
          &copy; {new Date().getFullYear()} The Gentleman&apos;s Paw. Serving
          Santa Clara County.
        </p>
      </div>
    </footer>
  );
}
