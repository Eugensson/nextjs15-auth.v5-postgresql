import { Metadata } from "next";
import { Suspense } from "react";
import { BeatLoader } from "react-spinners";

import { NewPasswordForm } from "@/components/auth/new-password-form";

export const metadata: Metadata = {
  title: "New Password",
};

const NewPasswordPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-[80vh]">
          <BeatLoader className="size-8 text-white/80" />
        </div>
      }
    >
      <NewPasswordForm />
    </Suspense>
  );
};

export default NewPasswordPage;
