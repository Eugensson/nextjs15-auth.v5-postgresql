import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

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
    default: "Auth(v5)-Postgresql",
    template: "%s | Auth(v5)-Postgresql",
  },
  description:
    "Secure authentication app built with PostgreSQL. Features include user registration, login, email verification, Google and GitHub social sign-in, password reset, two-factor authentication, and profile management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
