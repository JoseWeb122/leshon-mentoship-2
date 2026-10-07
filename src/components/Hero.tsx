import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const go = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" ref={ref} className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-navy-deep">
      {/* Background image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center slow-zoom"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1609220136736-443140cffec6?w=2400&q=85&auto=format&fit=crop')",
          }}
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/40 to-navy-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy-deep/35 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,transparent_0%,rgba(8,18,32,0.75)_100%)]" />
      </motion.div>

      <div className="grain absolute inset-0 pointer-events-none" />

      {/* Top eyebrow line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2 }}
        className="absolute top-[calc(6.5rem)] left-0 right-0 hidden md:block z-10"
      >
        <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between text-ivory/50 eyebrow-sm">
          <span>Est. Community Practice</span>
          <span className="hidden lg:block">A Trusted Place to Turn</span>
          <span>Scroll to Discover</span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 max-w-[1400px] mx-auto px-6 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-10 h-px gold-underline" />
          <span className="eyebrow text-gold">Family · Education · Community</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-ivory text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight max-w-[1100px]"
        >
          Helping Families
          <br />
          Move Forward{" "}
          <span className="italic text-gold-soft font-light">With Confidence.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-ivory/75 text-base md:text-lg leading-relaxed"
        >
          Guidance, advocacy, and community connections designed to help families
          navigate challenges and discover the support available to them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => go("#contact")}
            className="group inline-flex items-center gap-3 bg-gold text-navy px-7 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-gold-soft transition-colors"
          >
            Get Support
            <span className="w-7 h-7 rounded-full bg-navy/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </span>
          </button>
          <button
            onClick={() => go("#services")}
            className="group inline-flex items-center gap-3 text-ivory border border-ivory/25 hover:border-ivory/60 hover:bg-ivory/5 px-7 py-4 rounded-full text-sm font-medium tracking-wide transition-all"
          >
            Explore Our Services
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-ivory/60"
      >
        <span className="eyebrow-sm tracking-[0.4em]">Discover More</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>

      {/* Side vertical text */}
      <div className="hidden xl:flex absolute right-10 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-4 text-ivory/50">
        <span className="w-px h-20 bg-ivory/20" />
        <span className="eyebrow-sm [writing-mode:vertical-rl] rotate-180 tracking-[0.3em]">Leshon · Family Support</span>
        <span className="w-px h-20 bg-ivory/20" />
      </div>
    </section>
  );
}
