import { Metadata } from "next";
import { Suspense } from "react";
import { BeatLoader } from "react-spinners";

import { NewVerificationForm } from "@/components/auth/new-verification-form";

export const metadata: Metadata = {
  title: "New Verification",
};

const NewVerificationPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-[80vh]">
          <BeatLoader className="size-8 text-white/80" />
        </div>
      }
    >
      <NewVerificationForm />
    </Suspense>
  );
};

export default NewVerificationPage;
