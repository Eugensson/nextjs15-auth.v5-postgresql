interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-4">
      <h1 className="text-3xl font-secondary font-semibold">🔐Auth</h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default Header;
