import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/utils/cn";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

// ---------------- INTRO ----------------
export function Intro() {
  return (
    <section className="relative py-28 md:py-40 bg-ivory overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-gold-deep" />
              <span className="eyebrow text-navy/60">A Support System for Families</span>
            </div>
            <h2 className="font-display text-navy text-4xl sm:text-5xl md:text-[56px] leading-[1.05] tracking-tight">
              You Don't Have to{" "}
              <span className="italic text-teal-deep">Navigate It</span> Alone.
            </h2>
            <p className="mt-7 text-navy/70 text-[17px] leading-[1.75] max-w-md">
              Families often face complicated decisions involving education,
              resources, services, and the future of their children. Our goal is
              to provide a trusted place to turn for guidance, advocacy, and
              meaningful connections.
            </p>

            <div className="mt-10 flex items-center gap-5">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover border-2 border-ivory"
                  />
                ))}
              </div>
              <div className="text-sm text-navy/70">
                <span className="font-display text-lg text-navy">Families</span>
                <br />
                <span className="eyebrow-sm text-navy/50">We Listen First</span>
              </div>
            </div>
          </motion.div>

          {/* Image composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative">
              <div className="absolute -inset-6 dotted-bg rounded-[32px] -z-0 opacity-70" />
              <div className="relative aspect-[5/4] rounded-[20px] overflow-hidden bg-navy-deep">
                <img
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1400&q=85&auto=format&fit=crop"
                  alt="Family"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
              </div>

              {/* Overlapping small card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute -bottom-10 -left-6 md:-left-10 bg-ivory-soft border border-stone-warm/60 p-6 rounded-2xl max-w-[280px] shadow-[0_20px_60px_-20px_rgba(14,26,43,0.25)]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A88651" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <div className="eyebrow-sm text-navy/50">Our Approach</div>
                    <div className="font-display text-navy text-lg leading-tight">Family-Centered</div>
                  </div>
                </div>
              </motion.div>

              {/* Gold accent shape */}
              <div className="absolute -top-6 -right-4 w-24 h-24 rounded-full border border-gold/40" />
              <div className="absolute -top-3 -right-1 w-24 h-24 rounded-full bg-gold/10" />
            </div>
          </motion.div>
        </div>

        {/* Three highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-28 md:mt-36 grid md:grid-cols-3 gap-px bg-stone-warm/70 rounded-2xl overflow-hidden border border-stone-warm/70"
        >
          {[
            {
              t: "Family-Centered",
              d: "Support built around the unique needs of each family.",
              n: "01",
            },
            {
              t: "Community Connected",
              d: "Helping families discover resources and opportunities around them.",
              n: "02",
            },
            {
              t: "Advocacy Focused",
              d: "Helping families understand their options and voice their needs.",
              n: "03",
            },
          ].map((h) => (
            <div key={h.t} className="bg-ivory-soft p-8 md:p-10 group hover:bg-ivory transition-colors duration-500">
              <div className="flex items-start justify-between mb-8">
                <span className="eyebrow text-gold-deep">{h.n}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-navy/30 group-hover:text-gold-deep transition-colors"><path d="M7 17L17 7M9 7h8v8"/></svg>
              </div>
              <h3 className="font-display text-navy text-2xl mb-3">{h.t}</h3>
              <p className="text-navy/60 text-[15px] leading-relaxed">{h.d}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------------- SERVICES ----------------
const services = [
  {
    num: "01",
    title: "Mentorship for Families",
    desc: "Personal guidance and encouragement for families navigating challenges, transitions, and important decisions.",
    img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1200&q=85&auto=format&fit=crop",
    href: "#mentorship",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
    ),
  },
  {
    num: "02",
    title: "Educational Advocacy",
    desc: "Helping parents and caregivers better understand educational options, communicate their needs, and advocate for their children.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=85&auto=format&fit=crop",
    href: "#advocacy",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
    ),
  },
  {
    num: "03",
    title: "Community Resources",
    desc: "Connecting families with programs, organizations, services, and opportunities that can provide additional support.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=85&auto=format&fit=crop",
    href: "#resources",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40 bg-ivory-soft">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div {...fadeUp} className="max-w-3xl mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-8 h-px bg-gold-deep" />
            <span className="eyebrow text-navy/60">Core Services</span>
          </div>
          <h2 className="font-display text-navy text-4xl sm:text-5xl md:text-[64px] leading-[1.03] tracking-tight">
            How We Support <span className="italic text-teal-deep">Families</span>
          </h2>
          <p className="mt-7 text-navy/65 text-lg leading-relaxed max-w-xl">
            Practical guidance and meaningful support for the challenges
            families face.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-7">
          {services.map((s, i) => (
            <motion.a
              key={s.num}
              href={s.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-ivory rounded-[20px] overflow-hidden border border-stone-warm/60 hover:border-navy/10 hover:-translate-y-1.5 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-transparent to-transparent" />
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="w-9 h-9 rounded-full bg-ivory/90 backdrop-blur flex items-center justify-center text-navy">
                    {s.icon}
                  </span>
                  <span className="eyebrow text-ivory bg-navy-deep/40 backdrop-blur px-3 py-1 rounded-full">Service {s.num}</span>
                </div>
              </div>
              <div className="p-7 md:p-8">
                <h3 className="font-display text-navy text-2xl md:text-[26px] leading-tight mb-3">{s.title}</h3>
                <p className="text-navy/60 text-[15px] leading-relaxed mb-6">{s.desc}</p>
                <div className="inline-flex items-center gap-2 text-navy font-medium text-sm group-hover:text-gold-deep transition-colors">
                  <span className="border-b border-navy/20 group-hover:border-gold-deep pb-0.5">
                    Learn More
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- FEATURED SERVICES TABS ----------------
const featured = [
  {
    key: "mentorship",
    eyebrow: "01 · Mentorship",
    title: "Mentorship for Families",
    desc: "Our mentorship approach walks alongside families through seasons of change, challenge, and growth. We help families clarify priorities, make confident decisions, and feel less alone in the process.",
    points: [
      "One-on-one guidance for parents and caregivers",
      "Navigating transitions, challenges, and decisions",
      "Encouragement rooted in real experience",
      "Goal-setting and forward planning support",
    ],
    img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1400&q=85&auto=format&fit=crop",
    cta: "Learn About Family Mentorship",
  },
  {
    key: "advocacy",
    eyebrow: "02 · Advocacy",
    title: "Educational Advocacy",
    desc: "Navigating educational systems, services, and conversations can be overwhelming. We help families better understand their options and prepare for the discussions that matter most for their children.",
    points: [
      "Understanding available educational options",
      "Preparing for school and service conversations",
      "Supporting parent voice and communication",
      "Helping families navigate special services",
    ],
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&q=85&auto=format&fit=crop",
    cta: "Explore Educational Advocacy",
  },
  {
    key: "resources",
    eyebrow: "03 · Community",
    title: "Community Resources",
    desc: "Communities offer meaningful programs, services, and opportunities — but they're not always easy to find. We help families identify and connect with the resources that fit their situation.",
    points: [
      "Directory of trusted community resources",
      "Personalized recommendations by need",
      "Connections to programs and services",
      "Ongoing support through the process",
    ],
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=85&auto=format&fit=crop",
    cta: "Explore Resources",
  },
];

export function FeaturedServices() {
  const [active, setActive] = useState(0);
  const current = featured[active];

  return (
    <section id="mentorship" className="relative py-28 md:py-40 bg-navy text-ivory overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div {...fadeUp} className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold" />
            <span className="eyebrow text-gold">Featured Experience</span>
          </div>
          <h2 className="font-display text-ivory text-4xl sm:text-5xl md:text-[56px] leading-[1.05] max-w-3xl tracking-tight">
            Explore our{" "}
            <span className="italic text-gold-soft">three core areas</span> of
            family support.
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 border-b border-ivory/10 pb-6">
          {featured.map((f, i) => (
            <button
              key={f.key}
              onClick={() => setActive(i)}
              className={cn(
                "px-5 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-400",
                active === i
                  ? "bg-ivory text-navy"
                  : "text-ivory/60 border border-ivory/15 hover:border-ivory/40 hover:text-ivory"
              )}
            >
              {f.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            key={current.key + "-img"}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] md:aspect-[5/4] rounded-2xl overflow-hidden order-2 lg:order-1"
          >
            <img src={current.img} alt={current.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <span className="eyebrow text-gold bg-navy-deep/60 backdrop-blur px-3 py-1.5 rounded-full">{current.eyebrow}</span>
            </div>
          </motion.div>

          <motion.div
            key={current.key + "-text"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="font-display italic text-gold-soft text-xl mb-4">{current.eyebrow}</div>
            <h3 className="font-display text-ivory text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              {current.title}
            </h3>
            <p className="text-ivory/70 text-[17px] leading-[1.8] mb-8 max-w-lg">{current.desc}</p>

            <ul className="space-y-3 mb-10">
              {current.points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-3 text-ivory/85"
                >
                  <span className="mt-1.5 w-5 h-5 rounded-full border border-gold/50 flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C7A876" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </span>
                  <span className="text-[15px]">{p}</span>
                </motion.li>
              ))}
            </ul>

            <button className="group inline-flex items-center gap-3 bg-gold text-navy px-7 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-gold-soft transition-colors">
              {current.cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------------- JOURNEY ----------------
const steps = [
  { num: "01", t: "Listen", d: "We begin by understanding the family's situation, concerns, and goals." },
  { num: "02", t: "Guide", d: "We help families understand their options and identify practical next steps." },
  { num: "03", t: "Connect", d: "We connect families with appropriate resources, services, and community opportunities." },
];

export function Journey() {
  return (
    <section className="relative py-28 md:py-40 bg-ivory overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold-deep" />
            <span className="eyebrow text-navy/60">The Family Journey</span>
            <span className="w-8 h-px bg-gold-deep" />
          </div>
          <h2 className="font-display text-navy text-4xl sm:text-5xl md:text-[56px] leading-[1.05] tracking-tight">
            Support That Starts With{" "}
            <span className="italic text-teal-deep">Understanding.</span>
          </h2>
        </motion.div>

        {/* Desktop horizontal */}
        <div className="hidden md:block relative">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-[70px] h-px bg-gradient-to-r from-transparent via-stone-warm to-transparent" />
          <div className="grid grid-cols-3 gap-10 relative">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-[140px] h-[140px] mx-auto rounded-full border border-stone-warm bg-ivory-soft flex items-center justify-center mb-7 relative">
                  <span className="font-display text-navy text-4xl">{s.num}</span>
                  <span className="absolute top-2 right-4 w-2 h-2 rounded-full bg-gold-deep" />
                </div>
                <h3 className="font-display text-navy text-3xl mb-3">{s.t}</h3>
                <p className="text-navy/60 max-w-[280px] mx-auto leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden relative pl-12">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-stone-warm" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-12 w-8 h-8 rounded-full bg-ivory border border-stone-warm flex items-center justify-center">
                  <span className="font-display text-navy text-sm">{s.num}</span>
                </div>
                <h3 className="font-display text-navy text-3xl mb-2">{s.t}</h3>
                <p className="text-navy/60">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- ADVOCACY FEATURE ----------------
export function Advocacy() {
  return (
    <section id="advocacy" className="relative py-28 md:py-40 bg-ivory-soft overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8 aspect-[4/5] rounded-[20px] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=1000&q=85&auto=format&fit=crop"
                  alt="Parent and child"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="col-span-4 flex flex-col gap-4">
                <div className="aspect-square rounded-[20px] overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=600&q=85&auto=format&fit=crop"
                    alt="Education"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-[20px] overflow-hidden relative bg-navy text-ivory p-5 flex flex-col justify-between">
                  <div className="eyebrow text-gold">Advocacy</div>
                  <div>
                    <div className="font-display text-3xl leading-none">Your Voice,</div>
                    <div className="font-display italic text-gold-soft text-2xl leading-none mt-1">Made Clearer.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold-deep" />
              <span className="eyebrow text-navy/60">Educational Advocacy</span>
            </div>
            <h2 className="font-display text-navy text-4xl sm:text-5xl md:text-[60px] leading-[1.03] tracking-tight">
              Every Family Deserves to{" "}
              <span className="italic text-teal-deep">Be Heard.</span>
            </h2>
            <p className="mt-7 text-navy/70 text-[17px] leading-[1.8] max-w-xl">
              Understanding the educational system can be overwhelming. We help
              families approach important conversations with greater clarity,
              confidence, and preparation.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Understanding educational options",
                "Preparing for important conversations",
                "Supporting parent communication",
                "Identifying available services",
                "Helping families advocate for their children",
              ].map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B7A72" strokeWidth="1.8" className="mt-0.5 shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                  <span className="text-navy/80 text-[15px]">{p}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="group inline-flex items-center gap-3 bg-navy text-ivory px-7 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-navy-soft transition-colors">
                Learn More About Advocacy
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------------- ABOUT ----------------
export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 bg-ivory overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-gold-deep" />
              <span className="eyebrow text-navy/60">About Leshon</span>
            </div>
            <h2 className="font-display text-navy text-4xl sm:text-5xl md:text-[56px] leading-[1.05] tracking-tight">
              Built Around Families.{" "}
              <span className="italic text-teal-deep">Connected to Community.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="font-display text-navy text-2xl md:text-[28px] leading-[1.4] tracking-tight">
              "Our work is centered around a simple belief: families deserve
              access to information, guidance, advocacy, and community support
              when they need it most."
            </p>
            <p className="mt-7 text-navy/70 text-[16px] leading-[1.85] max-w-xl">
              Leshon's work focuses on meeting families where they are —
              listening, understanding the situation, and helping them discover
              real, practical paths forward. Whether that means navigating
              education, identifying community resources, or simply finding a
              trusted voice to guide the next step.
            </p>

            <div className="mt-12 flex items-center gap-5 pt-8 border-t border-stone-warm">
              <div className="w-16 h-16 rounded-full bg-navy text-ivory flex items-center justify-center font-display italic text-2xl">L</div>
              <div>
                <div className="font-display text-navy text-xl">Leshon</div>
                <div className="eyebrow-sm text-navy/50">Founder · Family & Community Advocate</div>
              </div>
              <svg className="ml-auto text-gold-deep" width="32" height="32" viewBox="0 0 40 24" fill="none">
                <path d="M2 18C8 10 14 6 22 8C30 10 34 14 38 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------------- IMPACT (animated numbers) ----------------
function CountUp({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  if (inView && value === 0) {
    // Kick off animation
    setTimeout(() => {}, 0);
  }

  // Use effect-style logic via state
  const startedRef = useRef(false);
  if (inView && !startedRef.current) {
    startedRef.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  return <span ref={ref}>{value.toLocaleString()}{suffix}</span>;
}

export function Impact() {
  const stats = [
    { n: 500, suffix: "+", label: "Families Supported", sub: "Guided through challenges and transitions" },
    { n: 120, suffix: "+", label: "Community Connections", sub: "Programs, services, and organizations" },
    { n: 80, suffix: "+", label: "Educational Advocacy", sub: "Families supported in school conversations" },
    { n: 25, suffix: "+", label: "Resource Categories", sub: "Covering education, health, youth, and more" },
  ];

  return (
    <section className="relative py-28 md:py-32 bg-navy-deep text-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-teal blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gold-deep blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div {...fadeUp} className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold" />
            <span className="eyebrow text-gold">Measurable Care</span>
          </div>
          <h2 className="font-display text-ivory text-4xl sm:text-5xl md:text-[56px] leading-[1.05] tracking-tight">
            Impact rooted in <span className="italic text-gold-soft">real connection.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ivory/10 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="bg-navy-deep p-8 md:p-10"
            >
              <div className="font-display text-ivory text-5xl md:text-6xl leading-none tracking-tight">
                <CountUp target={s.n} suffix={s.suffix} />
              </div>
              <div className="mt-5 h-px gold-underline w-10" />
              <div className="mt-5 font-display text-xl">{s.label}</div>
              <div className="mt-2 text-ivory/55 text-sm leading-relaxed">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-ivory/40 eyebrow-sm max-w-xl">
          Note · Metrics are representative front-end demo content. Editable
          upon implementation.
        </p>
      </div>
    </section>
  );
}
