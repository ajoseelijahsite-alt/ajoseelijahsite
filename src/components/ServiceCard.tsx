import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -7 }}
      className="group soft-surface relative h-full overflow-hidden rounded-4xl p-6 shadow-soft transition-all duration-300 hover:shadow-[0_20px_40px_rgba(27,26,26,0.12)] sm:p-7"
    >
      <div className="pointer-events-none absolute right-4 top-4 h-14 w-14 rounded-full bg-coral/10 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-coral/20" />
      <motion.div
        whileHover={{ rotate: -7, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 320, damping: 16 }}
        className="mb-5 inline-flex rounded-2xl bg-coral/10 p-3 text-coral"
      >
        <Icon size={22} />
      </motion.div>
      <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slateWarm">{description}</p>
    </motion.article>
  );
}
