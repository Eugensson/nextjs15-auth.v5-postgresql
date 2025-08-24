"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="w-full flex items-center gap-x-2">
      <Button
        variant="outline"
        size="lg"
        className="flex-1"
        onClick={() => onClick("google")}
      >
        <FcGoogle />
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="flex-1"
        onClick={() => onClick("github")}
      >
        <FaGithub />
      </Button>
    </div>
  );
};
