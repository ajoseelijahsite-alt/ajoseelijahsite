import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Handshake,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Phone,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { LinkButton } from "./components/Button";
import { Section } from "./components/Section";
import { ServiceCard } from "./components/ServiceCard";
import { StatCard } from "./components/StatCard";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Book", href: "#book-intro" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Business Consulting",
    description:
      "Translate your vision into structured execution using practical frameworks for setup, systems, positioning, and scalable growth.",
  },
  {
    icon: Megaphone,
    title: "Marketing Consulting",
    description:
      "Build brand authority, attract the right audience, and convert visibility into revenue through clear, data-driven marketing strategy.",
  },
  {
    icon: Users,
    title: "Executive Coaching",
    description:
      "Develop identity clarity, leadership discipline, and decision-making power so your business grows at the speed of your capacity.",
  },
];

const reasons = [
  "Systems-first wealth strategy, not random hustle",
  "Clear positioning for authority and influence",
  "Scalable business operations and performance models",
  "Cross-market experience across Africa and global regions",
  "Disciplined execution backed by tested frameworks",
  "High-value partnerships for sustainable expansion",
];

const process = [
  {
    title: "Discovery",
    text: "Audit your current position, bottlenecks, and growth opportunities with sharp clarity.",
  },
  {
    title: "Strategy",
    text: "Design a tailored roadmap around your goals, market realities, and value leverage.",
  },
  {
    title: "Execution",
    text: "Deploy practical systems, messaging, and management actions with measurable milestones.",
  },
  {
    title: "Scale",
    text: "Optimize what works, remove friction, and expand influence, revenue, and sustainability.",
  },
];

const testimonials = [
  {
    quote:
      "Elijah turned our scattered operations into a structured growth engine. In one quarter, our team alignment, pricing confidence, and revenue quality improved significantly.",
    name: "Founder, Consumer Brand",
  },
  {
    quote:
      "His process is practical and measurable. We went from random marketing to a clear position and a system that converts consistently.",
    name: "CEO, Service Company",
  },
];

const galleryItems = [
  { src: "/images/elijah-award-full.png", alt: "Elijah Ajose at leadership awards event" },
  { src: "/images/elijah-award-close.png", alt: "Elijah Ajose holding award portrait" },
  { src: "/images/Award image.jpeg", alt: "Elijah Ajose award event portrait" },
  { src: "/images/elijah-award-handshake.png", alt: "Elijah Ajose with fellow award recipient" },
  { src: "/images/OP1.jpeg", alt: "OP! - 1" },
  { src: "/images/OP2.jpeg", alt: "OP! - 2" },
  { src: "/images/OP3.jpeg", alt: "OP! - 3" },
  { src: "/images/OP4.jpeg", alt: "OP! - 4" },
];

const revealUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const staggerChildren: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeGalleryImage, setActiveGalleryImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <div className="relative overflow-hidden text-charcoal">
      <div className="silicon-grid absolute inset-0 z-0 opacity-40" />
      <motion.div
        aria-hidden
        animate={{ x: [0, 20, 0], y: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="ambient-ring float-gentle -left-28 top-24 h-72 w-72 opacity-35"
      />
      <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
          <a href="#" className="inline-flex items-center gap-3">
            <img
              src="/images/icon1.png"
              alt="The Ajose Elijah Company logo"
              className="h-9 w-auto md:hidden"
            />
            <img
              src="/images/icon2.png"
              alt="The Ajose Elijah Company logo"
              className="hidden h-9 w-auto md:block"
            />
          </a>
          <motion.nav
            initial="hidden"
            animate="show"
            variants={staggerChildren}
            className="hidden items-center gap-6 md:flex"
          >
            {navLinks.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                variants={revealUp}
                className="group relative text-[13px] text-slateWarm transition-colors hover:text-coral"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-coral transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </motion.nav>
          <LinkButton href="#contact" className="hidden px-4 py-2 text-xs md:inline-flex">
            Book Consultation
          </LinkButton>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex rounded-full border border-charcoal/15 bg-white/80 p-2 text-charcoal shadow-soft transition hover:text-coral md:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="border-t border-charcoal/10 bg-white/90 px-5 pb-5 pt-4 backdrop-blur-xl md:hidden"
            >
              <nav className="mx-auto flex max-w-content flex-col gap-2">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-charcoal transition hover:bg-coral/10 hover:text-coral"
                  >
                    {item.label}
                  </a>
                ))}
                <LinkButton href="#contact" className="mt-2 w-full justify-center">
                  Book Consultation
                </LinkButton>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main className="relative z-10">
        <section className="relative px-5 pb-10 pt-8 sm:px-8 lg:pb-16 lg:pt-10">
          <div className="mx-auto max-w-content rounded-[2.4rem] bg-brand-spectrum p-6 shadow-[0_22px_70px_rgba(0,132,203,0.28)] lg:p-8">
            <div className="grid items-center gap-9 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div initial="hidden" animate="show" variants={staggerChildren}>
                <motion.p
                  variants={revealUp}
                  className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white"
                >
                  <Sparkles size={14} />
                  Strategic advisory and wealth intelligence
                </motion.p>
                <motion.h1
                  variants={revealUp}
                  className="text-[2.15rem] font-semibold leading-[1.08] text-white sm:text-[2.8rem] lg:text-[3.45rem]"
                >
                  Build authority, scale your business, and structure lasting wealth for Africa and beyond.
                </motion.h1>
                <motion.p
                  variants={revealUp}
                  className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-white/90 sm:text-base"
                >
                  Elijah Ajose helps entrepreneurs and organizations move from effort-driven growth
                  to system-driven scale through consulting, executive coaching, and strategic
                  market positioning.
                </motion.p>
                <motion.div variants={revealUp} className="mt-7 flex flex-wrap items-center gap-3">
                  <LinkButton href="#contact">Book Consultation</LinkButton>
                  <LinkButton
                    href="#book-intro"
                    variant="secondary"
                    className="border-white/55 bg-black/20 text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.4)] hover:bg-black/25 hover:text-white"
                  >
                    Explore The Intelligence of Wealth
                  </LinkButton>
                </motion.div>
                <motion.div variants={staggerChildren} className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
                  <StatCard value="10+ Years" label="Consulting and strategy experience" />
                  <StatCard value="15,000+" label="Individuals mentored and trained" />
                  <StatCard value="4 Regions" label="Africa, Europe, UK, Middle East projects" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[2rem] border border-white/25 bg-white/10 p-3 backdrop-blur-sm"
              >
                <img
                  src="/images/Main hero image.jpeg"
                  alt="Elijah Ajose portrait"
                  className="h-[460px] w-full rounded-[1.5rem] object-cover object-top"
                />
                <div className="absolute left-5 top-5 rounded-xl bg-black/25 px-3 py-2 text-white backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-white/90">Mission</p>
                  <p className="mt-1 text-xs font-semibold">Empowering Excellence</p>
                </div>
                <div className="absolute bottom-5 right-5 rounded-xl bg-black/25 px-3 py-2 text-white backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-white/90">Framework</p>
                  <p className="mt-1 text-xs font-semibold">Establish • Execute • Excel • Exceed</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-brand-soft px-5 py-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
            className="mx-auto grid max-w-content gap-3 rounded-4xl border border-coral/15 bg-white/85 p-4 shadow-soft backdrop-blur-sm md:grid-cols-4"
          >
            {["Business Consulting", "Marketing Consulting", "Executive Coaching", "Partnership"].map((item) => (
              <motion.div
                key={item}
                variants={revealUp}
                className="rounded-3xl bg-gradient-to-br from-brandBlue/10 via-brandRed/10 to-brandGreen/10 px-4 py-3 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slateWarm">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <Section
          id="about"
          eyebrow="About Elijah Ajose"
          title="Elijah Ajose — Architect of Strategic Wealth and Scalable Influence."
          description="Elijah Ajose is an award-winning business consultant, executive coaching advisor, and marketing strategist focused on one mission: helping people and organizations move from confusion to clarity, effort to structure, and survival to scalable success."
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="soft-surface rounded-4xl p-7 shadow-soft"
            >
              <p className="text-sm leading-relaxed text-slateWarm sm:text-base">
                Founder of <strong>The Ajose Elijah Company (TAEC)</strong> and CEO of{" "}
                <strong>Mibitriz Global Multibiz (MGM)</strong>, Elijah is known for translating
                complex ideas into structured and profitable systems. His turning point came when he
                realized ambition without financial intelligence limits growth. Since then, his work
                has been built on mastering the language of money, the psychology of scaling, and
                strategic value positioning.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slateWarm sm:text-base">
                He has advised startups, coached leaders, and supported organizations across Africa,
                the UK, Europe, and the Middle East with market-entry strategy, operational
                structure, brand authority, and disciplined execution.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Build the person before the business",
                  "Understand money before chasing it",
                  "Create systems before scaling",
                  "Develop discipline before expecting results",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slateWarm">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-coral" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-white to-roseMist p-3 shadow-soft"
            >
              <img
                src="/images/elijah-award-full.png"
                alt="Elijah Ajose at awards event"
                className="h-[460px] w-full rounded-4xl object-cover object-top"
              />
              <div className="glass absolute bottom-7 left-7 rounded-2xl px-4 py-3 shadow-soft">
                <p className="text-xs uppercase tracking-[0.12em] text-slateWarm">Philosophy</p>
                <p className="mt-1 text-sm font-semibold text-charcoal">
                  Wealth is engineered with structure.
                </p>
              </div>
              <div className="absolute right-5 top-5 overflow-hidden rounded-2xl border border-white/40 bg-white/85 p-1 shadow-soft">
                <img
                  src="/images/elijah-award-trophy.png"
                  alt="Inspirational Thought Leader Award"
                  className="h-24 w-20 rounded-xl object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Section>

        <Section
          id="services"
          eyebrow="Core Services"
          title="Three core advisory pillars built for impact."
          align="center"
          className="bg-gradient-to-b from-white to-roseMist/40"
        >
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Section>

        <section id="book-intro" className="px-5 py-6 sm:px-8 lg:py-10">
          <div className="mx-auto max-w-content rounded-4xl border border-coral/20 bg-brand-soft p-6 shadow-soft sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-coral">Book</p>
                <h3 className="mt-2 text-2xl font-semibold text-charcoal sm:text-[2rem]">
                  The Intelligence of Wealth
                </h3>
                <p className="mt-2 text-sm text-slateWarm sm:text-base">
                  The framework for personal growth, business, and financial mastery in the age of
                  digital marketing and AI.
                </p>
              </div>
              <LinkButton href="/book-sales.html" variant="secondary" className="bg-white text-charcoal">
                Go to Book Sales Page <ArrowRight size={16} className="ml-1" />
              </LinkButton>
            </div>
          </div>
        </section>

        <Section
          id="why-us"
          eyebrow="Why Work With Elijah"
          title="Clarity, structure, and execution that produce measurable outcomes."
          className="bg-brand-soft"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-3xl border border-coral/15 bg-white px-5 py-4 shadow-soft"
              >
                <p className="flex items-center gap-3 text-sm text-slateWarm sm:text-base">
                  <Handshake size={17} className="shrink-0 text-coral" />
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="process"
          eyebrow="Working Model"
          title="A disciplined four-step growth process."
          align="center"
          className="bg-gradient-to-b from-white to-roseMist/35"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, idx) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: "easeOut" }}
                className="rounded-4xl border border-coral/15 bg-white p-6 shadow-soft"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-coral">Step {idx + 1}</p>
                <h3 className="text-lg font-semibold text-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slateWarm">{step.text}</p>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section
          id="testimonials"
          eyebrow="Social Proof"
          title="Results, recognition, and measurable transformation."
          className="bg-gradient-to-b from-brand-soft to-white"
        >
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-5">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl bg-gradient-to-r from-brandBlue/25 to-brandGreen/20 px-4 py-4 text-center">
                  <p className="text-xl font-semibold text-charcoal">15,000+</p>
                  <p className="text-xs text-slateWarm">People impacted</p>
                </div>
                <div className="rounded-3xl bg-gradient-to-r from-brandRed/25 to-brandYellow/25 px-4 py-4 text-center">
                  <p className="text-xl font-semibold text-charcoal">4 Regions</p>
                  <p className="text-xs text-slateWarm">Cross-market advisory</p>
                </div>
                <div className="rounded-3xl bg-gradient-to-r from-brandGreen/25 to-brandBlue/20 px-4 py-4 text-center">
                  <p className="text-xl font-semibold text-charcoal">10+ Years</p>
                  <p className="text-xs text-slateWarm">Strategy and execution</p>
                </div>
              </div>

              {testimonials.map((testimonial) => (
                <motion.figure
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-4xl border border-coral/15 bg-white/95 p-6 shadow-soft"
                >
                  <blockquote className="text-base leading-relaxed text-slateWarm">
                    "{testimonial.quote}"
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-charcoal">
                    {testimonial.name}
                  </figcaption>
                </motion.figure>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-4xl border border-coral/15 bg-white p-3 shadow-soft">
              <img
                src="/images/elijah-seated.png"
                alt="Elijah Ajose"
                className="h-full min-h-[460px] w-full rounded-[1.4rem] object-cover object-top"
              />
              <div className="absolute bottom-6 left-6 rounded-xl bg-white/85 px-4 py-2 text-xs font-semibold text-charcoal backdrop-blur-sm">
                Award-winning consultant and executive coaching advisor
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="gallery"
          eyebrow="Gallery"
          title="Moments, milestones, and recognition."
          description="Click any image to view full size."
          className="bg-brand-soft"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item) => (
              <motion.button
                key={item.src}
                type="button"
                onClick={() => setActiveGalleryImage(item)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4 }}
                className="overflow-hidden rounded-3xl border border-white/60 shadow-soft"
              >
                <img src={item.src} alt={item.alt} className="h-64 w-full object-cover object-top" />
              </motion.button>
            ))}
          </div>
        </Section>

        <section className="px-5 py-6 sm:px-8 lg:py-10">
          <div className="mx-auto max-w-content rounded-4xl bg-brand-spectrum p-7 text-white shadow-glow sm:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.12em] text-white/80">Connect. Collaborate. Build.</p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight sm:text-[2rem]">
                  Build what you carry. Structure what you know. Scale what you create.
                </h3>
              </div>
              <LinkButton href="#contact" variant="secondary" className="bg-white text-charcoal">
                Start a Strategic Conversation
              </LinkButton>
            </div>
          </div>
        </section>

        <Section
          id="contact"
          eyebrow="Contact & Collaboration"
          title="Ready to think differently and act intentionally?"
          description="Reach out for consulting, executive coaching, partnerships, speaking opportunities, or book orders."
        >
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="soft-surface space-y-4 rounded-4xl p-7 shadow-soft sm:p-8">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-coral" />
                <div>
                  <p className="text-sm font-semibold text-charcoal">Phone number</p>
                  <p className="text-slateWarm">+234 808 533 9900</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-coral" />
                <div>
                  <p className="text-sm font-semibold text-charcoal">Email</p>
                  <p className="text-slateWarm">theajoseelijah@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-coral" />
                <div>
                  <p className="text-sm font-semibold text-charcoal">Location</p>
                  <p className="text-slateWarm">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            <form className="soft-surface rounded-4xl p-7 shadow-soft sm:p-8">
              <h3 className="text-xl font-semibold text-charcoal">Consultation form</h3>
              <div className="mt-5 grid gap-4">
                <label className="text-sm">
                  <span className="mb-2 block text-slateWarm">Full name</span>
                  <input
                    className="w-full rounded-2xl border border-charcoal/10 bg-white px-4 py-3 text-charcoal outline-none transition focus:border-coral/50"
                    placeholder="Your full name"
                  />
                </label>
                <label className="text-sm">
                  <span className="mb-2 block text-slateWarm">Email address</span>
                  <input
                    type="email"
                    className="w-full rounded-2xl border border-charcoal/10 bg-white px-4 py-3 text-charcoal outline-none transition focus:border-coral/50"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="text-sm">
                  <span className="mb-2 block text-slateWarm">Message</span>
                  <textarea
                    rows={4}
                    className="w-full rounded-2xl border border-charcoal/10 bg-white px-4 py-3 text-charcoal outline-none transition focus:border-coral/50"
                    placeholder="Tell us what you want to build"
                  />
                </label>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-[#e9342a]"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </Section>
      </main>

      <footer className="px-5 pb-8 pt-4 sm:px-8">
        <div className="mx-auto flex max-w-content flex-col gap-3 border-t border-charcoal/10 pt-6 text-sm text-slateWarm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Ajose Elijah Company. All rights reserved.</p>
          <p>Wealth intelligence. Strategic execution. Scalable influence.</p>
        </div>
      </footer>

      <AnimatePresence>
        {activeGalleryImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/80 p-5"
          >
            <button
              type="button"
              onClick={() => setActiveGalleryImage(null)}
              className="absolute right-6 top-6 rounded-full bg-white/20 p-2 text-white transition hover:bg-white/30"
              aria-label="Close gallery image"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={activeGalleryImage.src}
              alt={activeGalleryImage.alt}
              className="max-h-[86vh] w-auto max-w-[92vw] rounded-2xl border border-white/20 bg-white object-contain"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
