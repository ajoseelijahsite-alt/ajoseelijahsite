import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { LinkButton } from "./components/Button";
import "./index.css";

const painPoints = [
  "I am working hard but not seeing real growth.",
  "I have ideas, but consistency keeps breaking down.",
  "I make revenue, but I do not build wealth.",
  "I need structure, not another motivation speech.",
];

const outcomes = [
  "Align identity with execution",
  "Master practical financial literacy",
  "Build systems that scale sustainably",
  "Train discipline when motivation fails",
  "Speak the language of investors confidently",
  "Leverage technology and AI for growth",
  "Structure multiple income streams",
  "Avoid hidden traps destroying entrepreneurs",
];

const parts = [
  {
    title: "Part 1: The Entrepreneur Awakens",
    text: "Build the person before the business, develop discipline systems, and upgrade your thinking.",
  },
  {
    title: "Part 2: The Language of Money",
    text: "Understand core financial terms, avoid cash-flow mistakes, and protect profit deliberately.",
  },
  {
    title: "Part 3: Systems, Strategy & Scale",
    text: "Move from survival to scale using clear systems, global leverage, and digital execution.",
  },
];

const transformationBullets = [
  "Clarity over confusion",
  "Structure over chaos",
  "Intelligence over impulse",
  "Systems over struggle",
  "Scale over survival",
];

function BookSalesPage() {
  return (
    <div className="min-h-screen bg-white px-5 py-8 text-charcoal sm:px-8">
      <div className="mx-auto max-w-content">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-charcoal/10 pb-5">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-4 py-2 text-sm text-charcoal transition hover:text-coral"
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-coral">
            Book Sales Page
          </p>
        </header>

        <section className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="rounded-4xl bg-gradient-to-br from-[#2b177e] to-[#5d24d4] p-5 shadow-glow"
          >
            <img
              src="/images/IOW.png"
              alt="The Intelligence of Wealth book cover"
              className="w-full rounded-3xl object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="rounded-4xl border border-coral/20 bg-white p-7 shadow-soft sm:p-9"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-coral">
              <BookOpen size={14} />
              New Release by Elijah Ajose
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-charcoal sm:text-4xl">
              The Intelligence of Wealth
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slateWarm">
              The blueprint for entrepreneurs who refuse to stay broke, stuck, or invisible.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slateWarm">
              If something still feels off despite your hard work, this book reveals the missing
              intelligence behind wealth: clarity, structure, discipline, and execution.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {transformationBullets.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-coral/20 bg-coral/5 px-3 py-1 text-xs font-medium text-slateWarm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {outcomes.map((item) => (
                <p key={item} className="flex items-start gap-2 text-sm text-slateWarm">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-coral" />
                  {item}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <LinkButton href="mailto:theajoseelijah@gmail.com?subject=Book%20Order%20-%20The%20Intelligence%20of%20Wealth">
                Get The Book Now <ArrowRight size={16} className="ml-1" />
              </LinkButton>
              <LinkButton href="tel:+2348085339900" variant="secondary">
                Call to Purchase
              </LinkButton>
            </div>
          </motion.div>
        </section>

        <section className="mt-12 rounded-4xl border border-coral/15 bg-gradient-to-r from-[#fff1ef] to-white p-7 shadow-soft sm:p-9">
          <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
            What if the problem is not effort... but understanding?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slateWarm sm:text-base">
            You plan. You push. You show up. Yet profits disappear, execution breaks, and momentum
            fades. This book closes that gap with practical intelligence you can apply immediately.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {painPoints.map((item) => (
              <p key={item} className="rounded-2xl border border-coral/20 bg-white px-4 py-3 text-sm text-slateWarm">
                "{item}"
              </p>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">Inside the blueprint</h2>
          <p className="mt-2 text-sm text-slateWarm sm:text-base">
            Not theory. Lived intelligence from real failures, investor conversations, and practical
            consulting systems.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {parts.map((part) => (
              <article key={part.title} className="rounded-3xl border border-coral/20 bg-white p-5 shadow-soft">
                <h3 className="text-base font-semibold text-charcoal">{part.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slateWarm">{part.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-4xl border border-coral/15 bg-white p-6 shadow-soft sm:p-8">
          <div className="grid items-center gap-7 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="inline-flex rounded-full bg-coral/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-coral">
                Premium Print Preview
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-charcoal sm:text-3xl">
                Built to feel like a practical handbook for serious builders.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slateWarm sm:text-base">
                This is the exact cover identity of <strong>The Intelligence of Wealth</strong>. The
                visual system was designed to communicate clarity, intelligence, and scale at first glance.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-coral/20 bg-[#fff5f4] px-4 py-3">
                  <p className="text-lg font-semibold text-charcoal">7 Parts</p>
                  <p className="text-xs text-slateWarm">End-to-end growth framework</p>
                </div>
                <div className="rounded-2xl border border-coral/20 bg-[#fff5f4] px-4 py-3">
                  <p className="text-lg font-semibold text-charcoal">Actionable</p>
                  <p className="text-xs text-slateWarm">Built for immediate execution</p>
                </div>
              </div>
            </div>

            <motion.figure
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="overflow-hidden rounded-[2.2rem] border border-coral/15 bg-gradient-to-b from-[#fff8f8] to-white p-5 shadow-soft"
            >
              <img
                src="/images/IOW.png"
                alt="The Intelligence of Wealth full book cover"
                className="h-[520px] w-full rounded-[2rem] border border-coral/25 object-contain shadow-soft"
              />
            </motion.figure>
          </div>
        </section>

        <section className="mt-12 rounded-4xl bg-gradient-to-r from-coral to-[#ff2e24] p-8 text-white shadow-glow sm:p-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Ready to build wealth intelligently?</h2>
          <p className="mt-3 max-w-3xl text-sm text-white/90 sm:text-base">
            Choose structure over chaos. Intelligence over impulse. Systems over struggle. Your next
            level starts with the way you think and execute.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton href="mailto:theajoseelijah@gmail.com?subject=Book%20Order%20-%20The%20Intelligence%20of%20Wealth" variant="secondary" className="bg-white text-charcoal">
              Order Your Copy
            </LinkButton>
            <LinkButton href="tel:+2348085339900" variant="secondary" className="border-white/40 bg-white/10 text-white hover:text-white">
              Speak to Elijah&apos;s Team
            </LinkButton>
          </div>
        </section>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookSalesPage />
  </React.StrictMode>,
);
