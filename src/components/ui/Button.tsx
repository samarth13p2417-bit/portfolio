"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-gradient-to-r from-primary to-blue-500",
    "text-white font-medium",
    "shadow-[0_0_20px_rgba(0,229,255,0.25)]",
    "hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]",
  ].join(" "),

  secondary: [
    "bg-gradient-to-r from-secondary to-violet-500",
    "text-white font-medium",
    "shadow-[0_0_20px_rgba(123,97,255,0.25)]",
    "hover:shadow-[0_0_30px_rgba(123,97,255,0.4)]",
  ].join(" "),

  outline: [
    "border border-primary/50 bg-transparent",
    "text-primary font-medium",
    "hover:border-primary hover:bg-primary/5",
    "hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]",
  ].join(" "),

  ghost: [
    "bg-transparent",
    "text-white font-medium",
    "hover:bg-white/5",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-2.5 text-base gap-2",
  lg: "px-8 py-3.5 text-lg gap-2.5",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  icon,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles = [
    "inline-flex items-center justify-center",
    "rounded-xl",
    "cursor-pointer select-none",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
    variantStyles[variant],
    sizeStyles[size],
    className,
  ].join(" ");

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={baseStyles}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.04 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={baseStyles}
    >
      {content}
    </motion.button>
  );
}
