import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import {
  Intro,
  Services,
  FeaturedServices,
  Journey,
  Advocacy,
  About,
  Impact,
} from "./components/Sections";
import {
  Resources,
  Testimonials,
  CTA,
  Footer,
} from "./components/Interactive";

function Marquee() {
  const items = [
    "Family Mentorship",
    "Educational Advocacy",
    "Community Resources",
    "Trusted Guidance",
    "Parent Support",
    "Youth Programs",
  ];
  const row = [...items, ...items];

  return (
    <div className="bg-ivory-deep py-6 border-y border-stone-warm/70 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {[...row, ...row].map((t, i) => (
          <div key={i} className="flex items-center gap-10 px-10">
            <span className="font-display text-navy/50 text-3xl md:text-4xl italic tracking-tight">
              {t}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-navy">
      <Nav />
      <Hero />
      <Marquee />
      <Intro />
      <Services />
      <FeaturedServices />
      <Journey />
      <Advocacy />
      <About />
      <Impact />
      <Resources />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
