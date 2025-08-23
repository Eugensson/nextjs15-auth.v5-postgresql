import { Suspense } from "react";
import type { Metadata } from "next";
import { Loader } from "lucide-react";

import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-[80vh]">
          <Loader className="animate-spin size-8 text-white/80" />
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;
