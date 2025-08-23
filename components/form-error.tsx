import { TriangleAlert } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="p-3 flex items-center gap-x-2 rounded-md text-sm text-destructive bg-destructive/15">
      <TriangleAlert size={16} />
      <p>{message}</p>
    </div>
  );
};
