import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Handshake,
  Menu,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Sparkles,
  TrendingUp,
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
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Brand & Business Consulting",
    description:
      "Establish a sharp brand identity, refine strategic direction, and build long-term market relevance through focused positioning and customer engagement.",
  },
  {
    icon: TrendingUp,
    title: "Business Development & Management",
    description:
      "Scale operations with stronger structures, practical management systems, and high-impact initiatives designed for efficiency, profitability, and adaptability.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Consulting",
    description:
      "Improve visibility and conversion with integrated digital strategy across SEO, social media, content planning, and analytics-led performance optimization.",
  },
  {
    icon: Handshake,
    title: "Intellect & Wealth Network",
    description:
      "Connect individuals and businesses to mentorship, strategic partnerships, and practical frameworks that unlock financial growth and long-term opportunity.",
  },
];

const reasons = [
  "Strategic thinking rooted in practical execution",
  "Brand development that builds trust and relevance",
  "Business growth systems for sustainable scale",
  "Marketing insight driven by market intelligence",
  "Financial intelligence for stronger decision-making",
  "Powerful networking and partnership opportunities",
];

const process = [
  {
    title: "Discovery",
    text: "We map your current position, opportunities, and constraints through focused audits and strategic conversations.",
  },
  {
    title: "Strategy",
    text: "A tailored blueprint is built around your brand goals, market position, and measurable growth priorities.",
  },
  {
    title: "Execution",
    text: "We implement with clear milestones, operational systems, and accountability mechanisms for fast traction.",
  },
  {
    title: "Growth",
    text: "We refine, optimize, and scale outcomes with performance insights that sustain momentum over time.",
  },
];

const testimonials = [
  {
    quote:
      "Elijah helped us move from scattered ideas to a clear growth system. Within months, our positioning, team focus, and client conversion improved significantly.",
    name: "Founder, Retail Expansion Firm",
  },
  {
    quote:
      "The strategic clarity we gained transformed how we market and manage operations. The framework was practical, actionable, and deeply effective.",
    name: "Director, Education Enterprise",
  },
  {
    quote:
      "What stood out was the combination of business insight and people development. Our leadership confidence and revenue strategy are now far stronger.",
    name: "CEO, Consulting Collective",
  },
];

const revealUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerChildren: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden text-charcoal">
      <motion.div
        aria-hidden
        animate={{ x: [0, 20, 0], y: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="ambient-ring float-gentle -left-28 top-24 h-72 w-72 opacity-50"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -18, 0], y: [0, 16, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="ambient-ring float-side -right-16 top-[24rem] h-64 w-64 opacity-40"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="ambient-ring bottom-[12rem] left-[34%] h-44 w-44 opacity-35"
      />
      <header className="sticky top-0 z-50 border-b border-white/50 bg-blush/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
          <a href="#" className="text-sm font-semibold tracking-[0.14em] text-charcoal sm:text-base">
            THE AJOSE ELIJAH COMPANY
          </a>
          <motion.nav
            initial="hidden"
            animate="show"
            variants={staggerChildren}
            className="hidden items-center gap-7 md:flex"
          >
            {navLinks.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                variants={revealUp}
                className="group relative text-sm text-slateWarm transition-colors hover:text-coral"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-coral transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </motion.nav>
          <LinkButton href="#contact" className="hidden px-4 py-2 text-xs sm:text-sm md:inline-flex md:px-6 md:py-3">
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
                <LinkButton
                  href="#contact"
                  className="mt-2 w-full justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Consultation
                </LinkButton>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main>
        <section className="relative px-5 pb-12 pt-14 sm:px-8 lg:pb-20 lg:pt-20">
          <div className="mx-auto grid max-w-content items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerChildren}
            >
              <motion.p
                variants={revealUp}
                className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-coral shadow-soft"
              >
                <Sparkles size={14} />
                Premium consulting and management
              </motion.p>
              <motion.h1
                variants={revealUp}
                className="text-gradient text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
              >
                Strategic Consulting That Elevates Your Brand, Business, and Financial Future
              </motion.h1>
              <motion.p
                variants={revealUp}
                className="mt-6 max-w-2xl text-base leading-relaxed text-slateWarm sm:text-lg"
              >
                The Ajose Elijah Company helps businesses and ambitious professionals grow with
                clarity, strategy, and influence through executive-level consulting, systems
                optimization, and market-smart decision making.
              </motion.p>
              <motion.div variants={revealUp} className="mt-8 flex flex-wrap items-center gap-4">
                <LinkButton href="#contact">Book Consultation</LinkButton>
                <LinkButton href="#services" variant="secondary">
                  Explore Services
                </LinkButton>
              </motion.div>
              <motion.div
                variants={staggerChildren}
                className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3"
              >
                <StatCard value="10+ Years" label="Entrepreneurship and advisory experience" />
                <StatCard value="5,000+" label="People trained across multiple sectors" />
                <StatCard value="Global" label="Business growth perspective with local relevance" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-[2.5rem] bg-hero-glow p-4 shadow-soft"
            >
              <div className="glass relative overflow-hidden rounded-[2rem] p-4 sm:p-6">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                  alt="Executive business strategy session"
                  className="h-[420px] w-full rounded-3xl object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="glass absolute left-8 top-8 rounded-2xl px-4 py-3 shadow-soft"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-slateWarm">Growth Focus</p>
                  <p className="mt-1 text-lg font-semibold text-charcoal">Brand. Systems. Wealth.</p>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
                  className="glass absolute bottom-8 right-8 rounded-2xl px-4 py-3 shadow-soft"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-slateWarm">Client Impact</p>
                  <p className="mt-1 flex items-center gap-2 text-lg font-semibold text-charcoal">
                    <Users size={18} className="text-coral" />
                    Scalable transformation
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-8 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
            className="mx-auto grid max-w-content gap-4 rounded-4xl border border-white/60 bg-white/70 p-6 shadow-soft backdrop-blur-sm md:grid-cols-3"
          >
            <motion.div variants={revealUp} className="rounded-3xl bg-blush px-5 py-4 transition hover:-translate-y-1 hover:shadow-soft">
              <p className="text-xs uppercase tracking-[0.14em] text-slateWarm">Business Consultant</p>
              <p className="mt-2 font-medium text-charcoal">Clarity, structure, measurable growth</p>
            </motion.div>
            <motion.div variants={revealUp} className="rounded-3xl bg-blush px-5 py-4 transition hover:-translate-y-1 hover:shadow-soft">
              <p className="text-xs uppercase tracking-[0.14em] text-slateWarm">Marketing Consultant</p>
              <p className="mt-2 font-medium text-charcoal">Positioning, engagement, conversions</p>
            </motion.div>
            <motion.div variants={revealUp} className="rounded-3xl bg-blush px-5 py-4 transition hover:-translate-y-1 hover:shadow-soft">
              <p className="text-xs uppercase tracking-[0.14em] text-slateWarm">Executive Coach & Partnership</p>
              <p className="mt-2 font-medium text-charcoal">Leadership, influence, strategic alliances</p>
            </motion.div>
          </motion.div>
        </section>

        <Section
          id="about"
          eyebrow="About Elijah Ajose"
          title="Experienced strategic advisor helping vision become high-performance execution."
          description="Elijah Ajose is a seasoned entrepreneur and brand specialist with more than a decade of experience guiding individuals and organizations toward sustainable success. His work combines strategic communication, operational discipline, and growth intelligence."
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
            className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <motion.div variants={revealUp} className="soft-surface rounded-4xl p-6 shadow-soft sm:p-8">
              <h3 className="text-xl font-semibold text-charcoal">Core expertise</h3>
              <ul className="mt-5 space-y-3">
                {[
                  "Business advancement and brand awareness strategy",
                  "Marketing research and competitive analysis",
                  "Wealth coaching and financial analysis",
                  "Operational improvement and business systems",
                  "Networking and partnership development",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slateWarm">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-coral" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={revealUp}
              className="rounded-4xl bg-gradient-to-br from-[#fffefe] to-roseMist p-7 shadow-soft sm:p-10"
            >
              <p className="text-lg leading-relaxed text-slateWarm">
                Elijah has trained over 5,000 people and is recognized for motivating, educating,
                and equipping people to achieve personal, business, and financial success. He helps
                clients access the right strategy, blueprint, and network needed to thrive.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-slateWarm">
                As founder and co-founder of business and educational initiatives, he understands
                both startup pressure and long-term scaling realities, making his advisory practical
                and results-driven.
              </p>
            </motion.div>
          </motion.div>
        </Section>

        <Section
          id="services"
          eyebrow="Services"
          title="Advisory services designed for resilient growth and market leadership."
          description="Each engagement is tailored to your stage, ambition, and operating context, balancing immediate wins with long-term capability building."
          align="center"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Section>

        <Section
          id="why-us"
          eyebrow="Why Choose Us"
          title="High-trust guidance grounded in strategy, systems, and results."
          description="We partner with leaders who need more than theory. We deliver clear pathways, aligned execution, and growth that can be sustained."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="soft-surface rounded-3xl px-5 py-4 shadow-soft"
              >
                <p className="flex items-center gap-3 text-slateWarm">
                  <BarChart3 size={18} className="shrink-0 text-coral" />
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="process"
          eyebrow="Our Process"
          title="A focused four-step model for sustainable transformation."
          align="center"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, idx) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="soft-surface group rounded-4xl p-6 shadow-soft transition-shadow duration-300 hover:shadow-[0_18px_35px_rgba(27,26,26,0.12)]"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-coral transition group-hover:tracking-[0.18em]">
                  Step {idx + 1}
                </p>
                <h3 className="text-xl font-semibold text-charcoal">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slateWarm">{step.text}</p>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section
          id="testimonials"
          eyebrow="Testimonials"
          title="Trusted by ambitious founders and growth-stage leaders."
          align="center"
        >
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.figure
                key={testimonial.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="soft-surface rounded-4xl p-6 shadow-soft transition-shadow duration-300 hover:shadow-[0_18px_35px_rgba(27,26,26,0.12)]"
              >
                <blockquote className="text-sm leading-relaxed text-slateWarm sm:text-base">
                  "{testimonial.quote}"
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-charcoal">
                  {testimonial.name}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </Section>

        <section className="px-5 py-8 sm:px-8 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto max-w-content rounded-4xl bg-gradient-to-r from-coral to-[#ff2e24] p-8 text-white shadow-glow sm:p-12"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.14em] text-white/80">Start your next phase</p>
                <h3 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                  Build a stronger brand, smarter systems, and scalable growth strategy.
                </h3>
              </div>
              <LinkButton href="#contact" variant="secondary" className="bg-white text-charcoal hover:text-coral">
                Schedule a Consultation <ArrowRight size={16} className="ml-2" />
              </LinkButton>
            </div>
          </motion.div>
        </section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Let’s discuss your next move."
          description="Share your goals and challenges. We will connect with a tailored consulting pathway."
        >
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="soft-surface space-y-4 rounded-4xl p-7 shadow-soft sm:p-8"
            >
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-coral" />
                <div>
                  <p className="text-sm font-semibold text-charcoal">Phone number</p>
                  <p className="text-slateWarm">+234 (000) 000-0000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-coral" />
                <div>
                  <p className="text-sm font-semibold text-charcoal">Email</p>
                  <p className="text-slateWarm">hello@ajoseelijahcompany.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-coral" />
                <div>
                  <p className="text-sm font-semibold text-charcoal">Location</p>
                  <p className="text-slateWarm">Lagos, Nigeria</p>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.06 }}
              className="soft-surface rounded-4xl p-7 shadow-soft sm:p-8"
            >
              <h3 className="text-xl font-semibold text-charcoal">Consultation form</h3>
              <div className="mt-6 grid gap-4">
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
                  <span className="mb-2 block text-slateWarm">What do you need support with?</span>
                  <textarea
                    rows={4}
                    className="w-full rounded-2xl border border-charcoal/10 bg-white px-4 py-3 text-charcoal outline-none transition focus:border-coral/50"
                    placeholder="Tell us about your goals"
                  />
                </label>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-[#e9342a]"
                >
                  Submit Request
                </button>
              </div>
            </motion.form>
          </div>
        </Section>
      </main>

      <footer className="px-5 pb-8 pt-4 sm:px-8">
        <div className="mx-auto flex max-w-content flex-col gap-3 border-t border-charcoal/10 pt-6 text-sm text-slateWarm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Ajose Elijah Company. All rights reserved.</p>
          <p>Luxury consulting, executive coaching, and growth strategy.</p>
        </div>
      </footer>
    </div>
  );
}
