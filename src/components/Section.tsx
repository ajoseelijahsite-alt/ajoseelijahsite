import { motion } from "framer-motion";
import type { PropsWithChildren, ReactNode } from "react";

type SectionProps = PropsWithChildren<{
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
}>;

export function Section({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className = "",
  children,
}: SectionProps) {
  const isCenter = align === "center";

  return (
    <section id={id} className={`px-5 py-16 sm:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
        >
          {eyebrow ? (
            <p className="mb-3 inline-flex rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-coral shadow-soft">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold leading-tight text-charcoal sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-slateWarm sm:text-lg">
              {description}
            </p>
          ) : null}
          {action ? <div className="mt-6">{action}</div> : null}
        </motion.div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
