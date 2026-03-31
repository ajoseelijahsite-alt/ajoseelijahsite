import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { LinkButton } from "./components/Button";
import "./index.css";

function BookSalesPage() {
  return (
    <div className="min-h-screen bg-white px-5 py-8 text-charcoal sm:px-8">
      <div className="mx-auto max-w-content">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-4 py-2 text-sm text-charcoal transition hover:text-coral"
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-coral">Book Sales Page</p>
        </header>

        <section className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="rounded-4xl bg-gradient-to-br from-[#2b177e] to-[#5d24d4] p-5 shadow-glow"
          >
            <img
              src="/images/intelligent-of-wealth-book.png"
              alt="The Intelligent of Wealth book cover"
              className="w-full rounded-3xl object-cover"
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
              New Release
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-charcoal sm:text-4xl">
              The Intelligent of Wealth
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slateWarm">
              The framework for personal growth, business, and financial mastery in the age of
              digital marketing and AI.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slateWarm">
              This is a practical blueprint built from real-world advisory experience to help you
              move from potential to structure, from hustle to systems, and from effort to
              sustainable wealth.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Identity and entrepreneurial clarity",
                "Language of money and wealth psychology",
                "Systems, strategy, and scalable growth",
                "Brand positioning and influence",
                "Digital execution in the AI era",
                "Business formation and pricing models",
              ].map((item) => (
                <p key={item} className="flex items-start gap-2 text-sm text-slateWarm">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-coral" />
                  {item}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <LinkButton href="mailto:theajoseelijah@gmail.com?subject=Book%20Order%20-%20The%20Intelligent%20of%20Wealth">
                Order via Email <ArrowRight size={16} className="ml-1" />
              </LinkButton>
              <LinkButton href="tel:+2348085339900" variant="secondary">
                Call to Purchase
              </LinkButton>
            </div>
          </motion.div>
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
