"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export const Social = () => {
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button variant="outline" size="lg" className="flex-1" onClick={() => {}}>
        <FcGoogle />
      </Button>
      <Button variant="outline" size="lg" className="flex-1" onClick={() => {}}>
        <FaGithub />
      </Button>
    </div>
  );
};
