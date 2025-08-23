import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const Home = () => {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-6xl font-secondary font-semibold text-white drop-shadow-md">
        🔐Auth
      </h1>
      <p className="text-white text-lg tracking-wide">
        A simple authentication services
      </p>
      <div>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Sign In
          </Button>
        </LoginButton>
      </div>
    </div>
  );
};

export default Home;
