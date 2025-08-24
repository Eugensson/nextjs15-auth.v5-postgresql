"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "server", href: "/server" },
  { name: "client", href: "/client" },
  { name: "admin", href: "/admin" },
  { name: "settings", href: "/settings" },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="p-4 w-full max-w-150 flex items-center justify-between rounded-xl bg-secondary shadow-sm">
      <ul className="flex items-center gap-x-4">
        {NAV_LINKS.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className={cn(
                buttonVariants({
                  variant: pathname === href ? "default" : "outline",
                }),
                "capitalize"
              )}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <UserButton />
    </nav>
  );
};
