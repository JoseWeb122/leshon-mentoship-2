import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-ivory/85 backdrop-luxe border-b border-navy/5 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="flex items-center gap-3 group"
          >
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500",
              scrolled
                ? "border-navy bg-navy text-ivory"
                : "border-ivory/40 bg-ivory/10 text-ivory backdrop-blur"
            )}>
              <span className="font-display text-lg italic">L</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className={cn(
                "font-display text-[20px] tracking-tight transition-colors duration-500",
                scrolled ? "text-navy" : "text-ivory"
              )}>
                Leshon
              </span>
              <span className={cn(
                "eyebrow-sm transition-colors duration-500",
                scrolled ? "text-navy-muted/70" : "text-ivory/70"
              )}>
                Family · Community
              </span>
            </div>
          </button>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className={cn(
                  "px-5 py-2 text-[13.5px] font-medium tracking-wide transition-colors relative group",
                  scrolled ? "text-navy/80 hover:text-navy" : "text-ivory/85 hover:text-ivory"
                )}
              >
                {l.label}
                <span className={cn(
                  "absolute left-1/2 -bottom-0.5 h-px w-0 group-hover:w-6 -translate-x-1/2 transition-all duration-300",
                  scrolled ? "bg-gold-deep" : "bg-gold"
                )} />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav("#contact")}
              className={cn(
                "hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium tracking-wide transition-all duration-300",
                scrolled
                  ? "bg-navy text-ivory hover:bg-navy-soft"
                  : "bg-ivory text-navy hover:bg-gold-soft"
              )}
            >
              Get Support
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={() => setOpen(!open)}
              className={cn(
                "lg:hidden w-11 h-11 rounded-full flex items-center justify-center border transition-colors",
                scrolled
                  ? "border-navy/15 text-navy"
                  : "border-ivory/30 text-ivory"
              )}
              aria-label="Menu"
            >
              <div className="relative w-5 h-4">
                <span className={cn("absolute left-0 right-0 h-px bg-current transition-all duration-300", open ? "top-1/2 rotate-45" : "top-0")} />
                <span className={cn("absolute left-0 right-0 top-1/2 h-px bg-current transition-opacity duration-300", open ? "opacity-0" : "opacity-100")} />
                <span className={cn("absolute left-0 right-0 h-px bg-current transition-all duration-300", open ? "top-1/2 -rotate-45" : "bottom-0")} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-navy"
          >
            <motion.div
              initial={{ y: "-8%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-8%", opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full flex flex-col px-6 pt-28 pb-10"
            >
              <div className="eyebrow text-gold mb-8">Menu</div>
              <nav className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.button
                    key={l.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                    onClick={() => handleNav(l.href)}
                    className="text-left flex items-baseline gap-4 py-4 border-b border-ivory/10 text-ivory group"
                  >
                    <span className="eyebrow-sm text-gold/70 w-6">0{i + 1}</span>
                    <span className="font-display text-4xl">{l.label}</span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold"><path d="M7 17L17 7M9 7h8v8"/></svg>
                    </span>
                  </motion.button>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-auto pt-10"
              >
                <button
                  onClick={() => handleNav("#contact")}
                  className="w-full bg-gold text-navy py-4 rounded-full font-medium tracking-wide"
                >
                  Get Support
                </button>
                <div className="mt-6 flex items-center gap-3 text-ivory/60 text-sm">
                  <span className="w-8 h-px bg-ivory/30" />
                  <span className="eyebrow-sm">Family · Education · Community</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
