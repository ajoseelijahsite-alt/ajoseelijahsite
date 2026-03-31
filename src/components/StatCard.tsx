import { motion } from "framer-motion";

type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="soft-surface rounded-3xl px-4 py-3 shadow-soft backdrop-blur-sm"
    >
      <p className="text-xl font-semibold text-charcoal">{value}</p>
      <p className="mt-1 text-xs text-slateWarm">{label}</p>
    </motion.div>
  );
}
