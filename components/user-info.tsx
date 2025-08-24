import { ExtendedUser } from "@/next-auth";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
  icon: React.ComponentType;
}

export const UserInfo = ({ user, label, icon: Icon }: UserInfoProps) => {
  return (
    <Card className="w-full max-w-150 min-h-110 shadow-md">
      <CardHeader>
        <h2 className="flex items-center justify-center gap-x-4 text-2xl font-semibold">
          <Icon />
          {label}
        </h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row justify-between items-center rounded-md border p-3 shadow-sm">
          <p className="text-sm font-medium">ID</p>
          <p className="truncate text-xs max-w-45 font-mono p-1 bg-slate-100 rounded-md">
            {user?.id}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center rounded-md border p-3 shadow-sm">
          <p className="text-sm font-medium">Name</p>
          <p className="truncate text-xs max-w-45 font-mono p-1 bg-slate-100 rounded-md">
            {user?.name}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center rounded-md border p-3 shadow-sm">
          <p className="text-sm font-medium">Email</p>
          <p className="truncate text-xs max-w-45 font-mono p-1 bg-slate-100 rounded-md">
            {user?.email}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center rounded-md border p-3 shadow-sm">
          <p className="text-sm font-medium">Role</p>
          <p className="truncate text-xs max-w-45 font-mono p-1 bg-slate-100 rounded-md">
            {user?.role}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center rounded-md border p-3 shadow-sm">
          <p className="text-sm font-medium">Two Factor Authentication</p>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "Enabled" : "Disabled"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
