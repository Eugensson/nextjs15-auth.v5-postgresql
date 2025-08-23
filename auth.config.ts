import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

import { loginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export default {
  providers: [
    Github,
    Google,
    Credentials({
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);

          if (!user || !user.password) return null;

          const isPasswordsMatch = await bcrypt.compare(
            password,
            user.password
          );

          if (isPasswordsMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
