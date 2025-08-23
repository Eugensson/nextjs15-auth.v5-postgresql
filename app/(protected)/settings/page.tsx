import { LogoutButton } from "@/components/auth/logout-button";

import { auth } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <LogoutButton>Logout</LogoutButton>
    </div>
  );
};

export default SettingsPage;
