import { Suspense } from "react";
import type { Metadata } from "next";
import { BeatLoader } from "react-spinners";

import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Register",
};

const RegisterPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-[80vh]">
          <BeatLoader className="size-8 text-white/80" />
        </div>
      }
    >
      <RegisterForm />
    </Suspense>
  );
};

export default RegisterPage;
