import { currentUser } from "@/lib/auth";

const SettingsPage = async () => {
  const user = await currentUser();

  return (
    <div className="p-10 w-full max-w-150 min-h-110 flex flex-col gap-y-4 bg-background rounded-xl shadow-sm">
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default SettingsPage;
