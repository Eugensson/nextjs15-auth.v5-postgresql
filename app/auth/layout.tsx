const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full flex flex-col items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
