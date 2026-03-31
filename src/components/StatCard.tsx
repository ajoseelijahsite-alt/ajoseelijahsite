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
      className="soft-surface rounded-3xl px-5 py-4 shadow-soft backdrop-blur-sm"
    >
      <p className="text-2xl font-semibold text-charcoal">{value}</p>
      <p className="mt-1 text-sm text-slateWarm">{label}</p>
    </motion.div>
  );
}
