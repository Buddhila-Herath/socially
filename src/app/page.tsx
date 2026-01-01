import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-4">
      <SignedOut>
        <SignInButton mode="modal" />
        <Button>Sign In</Button>
      </SignedOut>
      <ModeToggle />
      <Button variant={"secondary"}>Click me</Button>
    </div>
  );
}
