import { SignIn, SignInButton } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <SignIn routing="path" path="/signin" />
    </div>
  );
}
