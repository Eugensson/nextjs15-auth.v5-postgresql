"use client";

import { MdOutlineMonitor } from "react-icons/md";

import { UserInfo } from "@/components/user-info";

import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
  const user = useCurrentUser();

  return (
    <UserInfo label="Client components" user={user} icon={MdOutlineMonitor} />
  );
};

export default ClientPage;
