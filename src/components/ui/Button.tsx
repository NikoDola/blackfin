"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import styles from "./Button.module.css";

type BaseProps = {
  variant?: "primary" | "outline" | "ghost" | "lightOutline" | "tealOutline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
