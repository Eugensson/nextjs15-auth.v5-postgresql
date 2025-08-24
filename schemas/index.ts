import * as z from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
});

export const loginSchema = z.object({
  email: z.email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  code: z
    .string()
    .regex(/^\d{6}$/, "Code must be 6 digits")
    .optional(),
});

export const resetSchema = z.object({
  email: z.email({ message: "Email is required" }),
});

export const newPasswordSchema = z.object({
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
});
