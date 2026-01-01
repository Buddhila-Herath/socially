import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-4">
      <h1>home page</h1>
    </div>
  );
}
