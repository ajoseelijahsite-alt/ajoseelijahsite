import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";

const styles = {
  base: "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue/35",
  primary:
    "relative overflow-hidden bg-brand-spectrum text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] shadow-glow hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,132,203,0.28)] before:absolute before:inset-y-0 before:-left-10 before:w-8 before:rotate-12 before:bg-white/30 before:transition-all before:duration-500 hover:before:left-[120%]",
  secondary:
    "border border-charcoal/15 bg-white/92 text-charcoal shadow-soft hover:-translate-y-0.5 hover:border-coral/30 hover:shadow-[0_15px_35px_rgba(27,26,26,0.12)] hover:text-coral",
} as const;

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
  }
>;

type LinkButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "secondary";
  }
>;

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${styles.base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a className={`${styles.base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
