import { SocialSignInButton } from "@/components/auth/SocialSignInButton";
import LoginForm from "./loginForm";
import { FaGithub } from "react-icons/fa";
import { AnimatedTechBg } from "@/components/ui/animatedTechBg";

export default function LoginPage() {
  return (
   <main className="relative flex items-center justify-center min-h-dvh overflow-hidden p-4 sm:p-6">
      <AnimatedTechBg />
      <div className="relative z-10 w-full max-w-4xl">
        <div className="rounded-2xl backdrop-blur-md shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Left: Social login */}
          <div className="flex flex-col justify-center gap-4 bg-neutral-900/30 text-white p-6 md:p-8 w-full md:w-1/2">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Login with Social
            </h2>

            <SocialSignInButton />
            <SocialSignInButton
              provider="github"
              label="Continue with GitHub"
              icon={<FaGithub className="w-5 h-5 mr-2" />}
            />

            <p className="mt-2 text-xs text-white/70">
              By logging in, you agree to our Terms of Service.
            </p>
          </div>

          {/* Right: Form */}
          <div className="flex flex-col justify-center gap-4 p-6 md:p-8 w-full md:w-1/2">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
