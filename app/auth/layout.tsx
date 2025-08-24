interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="h-full flex flex-col items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
