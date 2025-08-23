"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "w-full font-normal",
        buttonVariants({
          variant: "link",
          size: "sm",
        })
      )}
    >
      {label}
    </Link>
  );
};
