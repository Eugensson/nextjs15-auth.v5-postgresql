import { CircleCheck } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 p-3 rounded-md bg-emerald-500/15 text-sm text-emerald-500">
      <CircleCheck size={16} />
      <p>{message}</p>
    </div>
  );
};
