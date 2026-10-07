import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { cn } from "@/utils/cn";

type Resource = {
  id: number;
  name: string;
  desc: string;
  category: string;
  location: string;
  services: string[];
  website: string;
  contact: string;
};

const RESOURCES: Resource[] = [
  {
    id: 1,
    name: "Family Support Center",
    desc: "Family counseling, parenting support, and community programs designed to strengthen family connections and resilience.",
    category: "Family Support",
    location: "Local Community",
    services: ["Family counseling", "Parenting workshops", "Crisis support", "Support groups"],
    website: "https://example.com/family-support",
    contact: "contact@example.com",
  },
  {
    id: 2,
    name: "Bright Futures Learning Hub",
    desc: "Tutoring, enrichment programs, and academic guidance for youth and families navigating educational transitions.",
    category: "Education",
    location: "Regional",
    services: ["Tutoring", "Enrichment programs", "Academic guidance", "College prep"],
    website: "https://example.com/bright-futures",
    contact: "hello@example.com",
  },
  {
    id: 3,
    name: "Youth Mentorship Collective",
    desc: "Structured mentorship programs for young people, pairing youth with trusted mentors in the community.",
    category: "Youth Programs",
    location: "Metro Area",
    services: ["One-on-one mentorship", "Group mentorship", "Leadership development"],
    website: "https://example.com/youth-collective",
    contact: "info@example.com",
  },
  {
    id: 4,
    name: "Community Services Alliance",
    desc: "A network of local organizations offering food assistance, housing support, and essential services.",
    category: "Community Services",
    location: "Statewide",
    services: ["Food assistance", "Housing support", "Transportation help", "Utility assistance"],
    website: "https://example.com/community-alliance",
    contact: "help@example.com",
  },
  {
    id: 5,
    name: "Family Financial Wellness",
    desc: "Financial education, budgeting support, and access to assistance programs for families in transition.",
    category: "Financial Support",
    location: "Online + Local",
    services: ["Financial coaching", "Budgeting workshops", "Benefits navigation"],
    website: "https://example.com/financial-wellness",
    contact: "support@example.com",
  },
  {
    id: 6,
    name: "Wellness & Family Health",
    desc: "Access to mental health support, family wellness resources, and preventative care information.",
    category: "Health & Wellness",
    location: "Regional",
    services: ["Mental health resources", "Family wellness programs", "Care referrals"],
    website: "https://example.com/wellness",
    contact: "care@example.com",
  },
  {
    id: 7,
    name: "Parent Advocacy Network",
    desc: "Peer-led community of parents supporting one another through education, advocacy, and shared experience.",
    category: "Family Support",
    location: "Online",
    services: ["Peer support", "Advocacy training", "Resource sharing"],
    website: "https://example.com/parent-network",
    contact: "parents@example.com",
  },
  {
    id: 8,
    name: "After-School Connections",
    desc: "Afterschool and summer programs for children and youth focused on learning, play, and development.",
    category: "Youth Programs",
    location: "Local Community",
    services: ["After-school programs", "Summer camps", "STEM enrichment", "Arts programs"],
    website: "https://example.com/afterschool",
    contact: "kids@example.com",
  },
];

const CATEGORIES = [
  "All Categories",
  "Education",
  "Family Support",
  "Youth Programs",
  "Community Services",
  "Financial Support",
  "Health & Wellness",
  "Other Resources",
];

export function Resources() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [location, setLocation] = useState("");
  const [selected, setSelected] = useState<Resource | null>(null);

  const filtered = useMemo(() => {
    return RESOURCES.filter((r) => {
      const q = query.toLowerCase().trim();
      const matchQ =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.desc.toLowerCase().includes(q) ||
        r.services.some((s) => s.toLowerCase().includes(q));
      const matchC = category === "All Categories" || r.category === category;
      const matchL =
        !location.trim() || r.location.toLowerCase().includes(location.toLowerCase().trim());
      return matchQ && matchC && matchL;
    });
  }, [query, category, location]);

  return (
    <>
      <section id="resources" className="relative py-28 md:py-40 bg-ivory-soft overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl mb-14"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold-deep" />
              <span className="eyebrow text-navy/60">Resource Directory</span>
            </div>
            <h2 className="font-display text-navy text-4xl sm:text-5xl md:text-[60px] leading-[1.03] tracking-tight">
              Find Resources{" "}
              <span className="italic text-teal-deep">That Can Help.</span>
            </h2>
            <p className="mt-6 text-navy/65 text-lg max-w-xl">
              Search our directory of community organizations, services, and
              programs. Demo content — representative of the kinds of resources
              we help families connect with.
            </p>
          </motion.div>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-ivory rounded-2xl border border-stone-warm/70 shadow-[0_20px_60px_-30px_rgba(14,26,43,0.15)] p-4 md:p-5"
          >
            <div className="grid md:grid-cols-12 gap-3">
              <div className="md:col-span-5 relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="What kind of support are you looking for?"
                  className="w-full bg-ivory-soft pl-11 pr-4 py-4 rounded-xl text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-gold/50 border border-transparent focus:border-gold/50 text-[15px]"
                />
              </div>

              <div className="md:col-span-3 relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-ivory-soft px-4 py-4 rounded-xl text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 border border-transparent focus:border-gold/50 appearance-none cursor-pointer text-[15px]"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-navy/40" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>

              <div className="md:col-span-2 relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City or ZIP"
                  className="w-full bg-ivory-soft pl-11 pr-3 py-4 rounded-xl text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-gold/50 border border-transparent focus:border-gold/50 text-[15px]"
                />
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="md:col-span-2 bg-navy text-ivory rounded-xl hover:bg-navy-soft transition-colors text-sm font-medium tracking-wide"
              >
                Find Resources
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2 flex-wrap text-[13px] text-navy/60">
              <span className="eyebrow-sm text-navy/40">Popular:</span>
              {["tutoring", "mentorship", "counseling", "food assistance"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1 rounded-full border border-stone-warm hover:border-navy/20 hover:bg-ivory transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <div id="results" className="mt-14">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="eyebrow text-navy/50">Results</div>
                <div className="font-display text-navy text-2xl mt-1">
                  {filtered.length} {filtered.length === 1 ? "resource" : "resources"} found
                </div>
              </div>
              {(query || category !== "All Categories" || location) && (
                <button
                  onClick={() => { setQuery(""); setCategory("All Categories"); setLocation(""); }}
                  className="text-sm text-navy/60 hover:text-navy underline underline-offset-4"
                >
                  Clear filters
                </button>
              )}
            </div>

            {filtered.length === 0 ? (
              <div className="bg-ivory border border-stone-warm/70 rounded-2xl p-12 text-center">
                <div className="font-display text-navy text-2xl mb-2">No resources match your search</div>
                <p className="text-navy/60">Try adjusting your filters or search terms.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((r, i) => (
                  <motion.article
                    key={r.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
                    className="group bg-ivory border border-stone-warm/70 hover:border-navy/15 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(14,26,43,0.2)] transition-all duration-500"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="eyebrow-sm text-gold-deep bg-gold-soft/40 px-2.5 py-1 rounded-full">{r.category}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-navy/30"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <h3 className="font-display text-navy text-xl mb-2 leading-tight">{r.name}</h3>
                    <p className="text-navy/60 text-sm leading-relaxed mb-5 line-clamp-3">{r.desc}</p>
                    <div className="flex items-center justify-between pt-5 border-t border-stone-warm/60">
                      <span className="text-xs text-navy/50">{r.location}</span>
                      <button
                        onClick={() => setSelected(r)}
                        className="text-sm font-medium text-navy inline-flex items-center gap-1.5 group-hover:text-gold-deep transition-colors"
                      >
                        View Resource
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-0 md:p-6 bg-navy-deep/70 backdrop-luxe"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-ivory w-full max-w-2xl rounded-t-3xl md:rounded-3xl overflow-hidden max-h-[92vh] flex flex-col"
            >
              <div className="p-7 md:p-10 overflow-y-auto">
                <div className="flex items-start justify-between mb-6">
                  <span className="eyebrow-sm text-gold-deep bg-gold-soft/40 px-2.5 py-1 rounded-full">{selected.category}</span>
                  <button
                    onClick={() => setSelected(null)}
                    className="w-10 h-10 rounded-full border border-stone-warm hover:bg-ivory-soft flex items-center justify-center transition-colors"
                    aria-label="Close"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </button>
                </div>
                <h3 className="font-display text-navy text-3xl md:text-4xl leading-tight tracking-tight">{selected.name}</h3>
                <div className="mt-3 flex items-center gap-2 text-sm text-navy/60">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {selected.location}
                </div>
                <p className="mt-6 text-navy/70 leading-relaxed">{selected.desc}</p>

                <div className="mt-8">
                  <div className="eyebrow text-navy/50 mb-3">Services</div>
                  <div className="flex flex-wrap gap-2">
                    {selected.services.map((s) => (
                      <span key={s} className="text-sm px-3 py-1.5 rounded-full bg-ivory-soft border border-stone-warm text-navy/80">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-stone-warm/70 p-5 md:p-6 bg-ivory-soft flex flex-wrap gap-3">
                <a
                  href={selected.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] bg-navy text-ivory text-center py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-navy-soft transition-colors inline-flex items-center justify-center gap-2"
                >
                  Visit Website
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M9 7h8v8"/></svg>
                </a>
                <a
                  href={`mailto:${selected.contact}`}
                  className="flex-1 min-w-[140px] border border-navy/20 text-navy text-center py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-ivory transition-colors"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ---------------- TESTIMONIALS ----------------
const testimonials = [
  {
    quote:
      "When we felt lost navigating our daughter's school options, Leshon's team helped us understand our choices and find our voice. We finally felt heard.",
    name: "Maria T.",
    role: "Parent · Family Member",
  },
  {
    quote:
      "We didn't know where to start. The mentorship and community connections gave us real, practical next steps — and hope we hadn't felt in a long time.",
    name: "David R.",
    role: "Father · Caregiver",
  },
  {
    quote:
      "What made the difference was being listened to first. We weren't handed a generic plan — we were supported as a family with our own story.",
    name: "Jasmine W.",
    role: "Mother · Family Member",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-28 md:py-40 bg-ivory overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div {...{ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 } }} className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold-deep" />
            <span className="eyebrow text-navy/60">Voices of Families</span>
            <span className="w-8 h-px bg-gold-deep" />
          </div>
          <h2 className="font-display text-navy text-4xl sm:text-5xl md:text-[56px] leading-[1.05] tracking-tight">
            Families Deserve Support{" "}
            <span className="italic text-teal-deep">They Can Trust.</span>
          </h2>
        </motion.div>

        <div className="relative bg-navy text-ivory rounded-[24px] overflow-hidden p-10 md:p-16 min-h-[360px]">
          <div className="absolute top-10 right-10 font-display text-[200px] leading-none text-gold/15 select-none pointer-events-none">"</div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal/20 blur-3xl" />

          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-3xl"
            >
              <p className="font-display text-ivory text-2xl md:text-[32px] leading-[1.35] tracking-tight">
                "{testimonials[idx].quote}"
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center font-display text-gold-soft text-xl">
                  {testimonials[idx].name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-ivory">{testimonials[idx].name}</div>
                  <div className="eyebrow-sm text-ivory/50">{testimonials[idx].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-10 right-10 flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  i === idx ? "w-10 bg-gold" : "w-5 bg-ivory/25"
                )}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-navy/45 text-sm">
          Demo testimonials representative of the kind of support families receive.
        </p>
      </div>
    </section>
  );
}

// ---------------- CTA ----------------
export function CTA() {
  return (
    <section id="contact" className="relative py-28 md:py-40 bg-ivory-soft overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="relative rounded-[28px] overflow-hidden bg-navy text-ivory p-10 md:p-20">
          <div className="absolute inset-0 opacity-40">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&q=85&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/80 to-navy/70" />
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-gold" />
                <span className="eyebrow text-gold">Get In Touch</span>
              </div>
              <h2 className="font-display text-ivory text-4xl sm:text-5xl md:text-[58px] leading-[1.05] tracking-tight">
                Ready to take the{" "}
                <span className="italic text-gold-soft">next step?</span>
              </h2>
              <p className="mt-6 text-ivory/70 text-lg max-w-lg">
                Reach out to schedule a conversation. We listen first, and we'll
                help you understand the support available to your family.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks — this is a front-end demo. Your message has been received (demo).");
              }}
              className="bg-ivory text-navy rounded-2xl p-6 md:p-8 space-y-4"
            >
              <div>
                <label className="eyebrow-sm text-navy/60 block mb-2">Name</label>
                <input required type="text" className="w-full bg-ivory-soft border border-stone-warm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold/60" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="eyebrow-sm text-navy/60 block mb-2">Email</label>
                  <input required type="email" className="w-full bg-ivory-soft border border-stone-warm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/60" />
                </div>
                <div>
                  <label className="eyebrow-sm text-navy/60 block mb-2">Phone</label>
                  <input type="tel" className="w-full bg-ivory-soft border border-stone-warm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/60" />
                </div>
              </div>
              <div>
                <label className="eyebrow-sm text-navy/60 block mb-2">How can we help?</label>
                <textarea rows={4} className="w-full bg-ivory-soft border border-stone-warm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/60 resize-none" />
              </div>
              <button type="submit" className="w-full bg-navy text-ivory py-4 rounded-full font-medium tracking-wide hover:bg-navy-soft transition-colors">
                Send Message
              </button>
              <p className="text-xs text-navy/50 text-center">
                Demo form — no messages are actually sent.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- FOOTER ----------------
export function Footer() {
  return (
    <footer className="bg-navy-deep text-ivory pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 pb-14 border-b border-ivory/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full bg-ivory text-navy flex items-center justify-center font-display italic text-xl">L</div>
              <div>
                <div className="font-display text-2xl">Leshon</div>
                <div className="eyebrow-sm text-ivory/50">Family · Community Support</div>
              </div>
            </div>
            <p className="text-ivory/60 max-w-md leading-relaxed">
              Family mentorship, educational advocacy, and community resources.
              Helping families find the guidance and connections they need.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {["instagram", "facebook", "linkedin"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-full border border-ivory/15 hover:border-gold/60 hover:text-gold flex items-center justify-center transition-colors"
                  aria-label={s}
                >
                  <span className="eyebrow-sm">{s.charAt(0).toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="eyebrow text-gold mb-4">Navigate</div>
            <ul className="space-y-2 text-ivory/70 text-sm">
              {["Home", "About", "Services", "Resources", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-ivory transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="eyebrow text-gold mb-4">Services</div>
            <ul className="space-y-2 text-ivory/70 text-sm">
              <li>Family Mentorship</li>
              <li>Educational Advocacy</li>
              <li>Community Resources</li>
              <li>Parent Support</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow text-gold mb-4">Stay Connected</div>
            <p className="text-ivory/60 text-sm mb-4">
              Receive thoughtful updates on family resources and community programs.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Demo: subscribed.");
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 bg-ivory/5 border border-ivory/15 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-gold/50"
              />
              <button className="bg-gold text-navy px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gold-soft transition-colors">Join</button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-ivory/40 text-xs">
          <div>© {new Date().getFullYear()} Leshon · Family & Community Support. Demo front-end.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ivory transition-colors">Privacy</a>
            <a href="#" className="hover:text-ivory transition-colors">Terms</a>
            <a href="#" className="hover:text-ivory transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
