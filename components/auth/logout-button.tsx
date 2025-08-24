"use client";

import { useRouter } from "next/navigation";

import { logout } from "@/actions/logout";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const router = useRouter();

  const onClick = async () => {
    await logout();
    router.push(DEFAULT_LOGIN_REDIRECT);
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
