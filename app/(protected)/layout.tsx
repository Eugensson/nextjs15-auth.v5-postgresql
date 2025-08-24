import { Navbar } from "@/app/(protected)/_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <main className="h-full flex flex-col items-center justify-center gap-y-10">
      <Navbar />
      {children}
    </main>
  );
};

export default ProtectedLayout;
