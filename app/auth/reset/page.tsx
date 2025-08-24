import { Metadata } from "next";

import { ResetForm } from "@/components/auth/reset-form";

export const metadata: Metadata = {
  title: "Reset password",
};

const ResetPage = () => {
  return <ResetForm />;
};

export default ResetPage;
