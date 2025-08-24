import { Suspense } from "react";
import { FaServer } from "react-icons/fa";
import { BeatLoader } from "react-spinners";

import { UserInfo } from "@/components/user-info";

import { currentUser } from "@/lib/auth";

const ServerPage = async () => {
  const user = await currentUser();

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-[80vh]">
          <BeatLoader className="size-8 text-white/80" />
        </div>
      }
    >
      <UserInfo label="Server components" user={user} icon={FaServer} />
    </Suspense>
  );
};

export default ServerPage;
