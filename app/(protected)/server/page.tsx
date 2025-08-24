import { FaServer } from "react-icons/fa";

import { UserInfo } from "@/components/user-info";

import { currentUser } from "@/lib/auth";

const ServerPage = async () => {
  const user = await currentUser();

  return <UserInfo label="Server components" user={user} icon={FaServer} />;
};

export default ServerPage;
