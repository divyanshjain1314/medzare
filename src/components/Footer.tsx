import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "About Us", href: "/#about", scroll: true },
  { label: "Our Excellence", href: "/#excellence", scroll: true },
  { label: "Contact", href: "/#contact", scroll: true },
  { label: "Privacy Policy", href: "/privacy-policy", scroll: false },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-yellow-500/10"
      style={{ background: "hsl(222, 47%, 5%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full border border-yellow-500/40 flex items-center justify-center">
                {/* <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
                  <path d="M20 4L4 20L20 36L36 20L20 4Z" stroke="hsl(45,80%,62%)" strokeWidth="1.5" fill="none" />
                  <path d="M20 10L10 20L20 30L30 20L20 10Z" fill="hsl(45,80%,52%)" opacity="0.4" />
                  <circle cx="20" cy="20" r="4" fill="hsl(45,80%,72%)" />
                </svg> */}
                <Image
                  className='w-8 h-8'
                  src='/applogo.svg'
                  alt='applogo'
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <div
                  className="font-serif font-semibold text-base leading-tight"
                  style={{
                    background: "linear-gradient(135deg, hsl(45,80%,65%) 0%, hsl(45,90%,80%) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  MEDZARE PHARMA
                </div>
                <div className="text-[10px] text-white/35 tracking-[0.2em] uppercase">
                  PRIVATE LIMITED
                </div>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed">
              Advancing healthcare through science, integrity, and innovation. Delivering quality pharmaceutical solutions for a healthier India.
            </p>
            <div className="mt-5 space-y-1">
              <div className="text-xs text-white/30">CIN: U46497DL2026PTC464403</div>
              <div className="text-xs text-white/25">PAN: AAUCM6526E &nbsp;·&nbsp; TAN: DELMS4364C</div>
              <div className="text-xs text-white/20">Incorp. 11 March 2026 &nbsp;·&nbsp; ROC Delhi 1</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5 font-sans">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="underline-reveal text-white/50 hover:text-yellow-400/80 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5 font-sans">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full border border-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-yellow-500/70" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C5.24 0 3 2.24 3 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 6.75C7.03 6.75 6.25 5.97 6.25 5S7.03 3.25 8 3.25 9.75 4.03 9.75 5 8.97 6.75 8 6.75z" />
                  </svg>
                </div>
                <p className="text-white/45 text-xs leading-relaxed">
                  H-30 Plot 6 & 7, 3rd Floor, Gulshan Park,<br />
                  Vijay Chowk, Laxmi Nagar, East Delhi,<br />
                  India — 110092
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full border border-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-yellow-500/70" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                  </svg>
                </div>
                <a href="tel:+918435369211" className="text-white/45 text-xs hover:text-yellow-400/70 transition-colors duration-200">
                  +91-8435369211
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full border border-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-yellow-500/70" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                  </svg>
                </div>
                <a href="mailto:shirshpalak20@gmail.com" className="text-white/45 text-xs hover:text-yellow-400/70 transition-colors duration-200">
                  shirshpalak20@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center">
            © 2026 Medzare Pharma Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="text-white/30 text-xs">
              Sunil Kumar Jain (DIN: 11599520) &middot; Archana Devi (DIN: 11599518)
            </div>
            <Link
              href="/privacy-policy"
              className="text-white/30 text-xs hover:text-yellow-500/60 transition-colors duration-200 underline-reveal"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}