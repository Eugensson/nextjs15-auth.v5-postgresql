import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/next";

import { Toaster } from "@/components/ui/sonner";

import { auth } from "@/auth";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Auth(v5)-PostgreSQL",
    template: "%s | Auth(v5)-PostgreSQL",
  },
  description:
    "Secure authentication app built with PostgreSQL. Features include user registration, login, email verification, Google and GitHub social sign-in, password reset, two-factor authentication, and profile management.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`${inter.variable} ${poppins.variable} antialiased`}>
          {children}
          <Toaster />
          <Analytics />
        </body>
      </html>
    </SessionProvider>
  );
}
