import { createFileRoute, Link } from "@tanstack/react-router"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa6";

export const Route = createFileRoute('/_auth/signup')({
  component: RouteComponent
})

export function RouteComponent() {
  return (
    <main className="w-full h-screen grid grid-cols-2">
      <section className="flex flex-col justify-between py-12 px-8 w-full h-screen bg-[#0a0a0a]">
        <Logo className="px-8 mb-12" />
        <div className="flex flex-col items-center mt-12 grow">
          <div className="w-[500px] flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <h2 className="text-zinc-200 text-4xl font-bold">Sign up</h2>
              <p className="text-zinc-600 font-normal text-lg">
                Create your account to continue.
              </p>
            </div>

            <form className="flex flex-col space-y-8">
              <div className="flex flex-col space-y-2">
                <label className="text-xl font-medium" htmlFor="username">
                  Username
                </label>
                <Input
                  type="text"
                  id="username"
                  className="p-5 font-normal text-lg"
                  placeholder="Enter your username"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xl font-medium" htmlFor="email">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  className="p-5 font-normal text-lg"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-base font-medium" htmlFor="password">
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  className="p-5 font-normal text-lg"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-base font-medium" htmlFor="confirm-password">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  id="confirm-password"
                  className="p-5 font-normal text-lg"
                  placeholder="Confirm your password"
                />
              </div>


              <Button
                type="submit"
                className="p-6 bg-red-600 hover:bg-red-700 transition font-bold text-white text-base"
              >
                Sign up
              </Button>
            </form>

            <div className="w-full flex items-center gap-2">
              <p className="flex-1 border border-zinc-800"></p>
              <p className="text-zinc-800 text-base font-medium">OR</p>
              <p className="flex-1 border border-zinc-800"></p>
            </div>

            <div className="w-full flex items-center gap-4">
              <Button
                className="p-6 flex-1 flex flex-row-reverse gap-2"
                variant="outline"
              >
                <p className="text-sm">Sign in with Google</p>
                <FcGoogle />
              </Button>

              <Button
                className="p-6 flex-1 flex flex-row-reverse gap-2"
                variant="outline"
              >
                <p className="text-sm">Sign in with GitHub</p>
                <FaGithub />
              </Button>
            </div>

            <p className="text-base flex justify-center gap-2 font-normal text-zinc-400 w-full">
              Have an account?
              <Link className="font-bold text-zinc-200 hover:text-zinc-100 transition" to="/signin">
                Sign in.
              </Link>
            </p>
          </div>
        </div>

        {/* Copyright at the bottom */}
        <p className="font-normal text-lg text-zinc-700 w-full text-center">
          © 2025 Rewind. Todos os direitos reservados.
        </p>
      </section>


      {/* Right side - Image with gradient */}
      <section className="relative w-full h-full">
        <img
          src="/batman.jpg"
          alt="Background image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#0a0a0a]/95" />
      </section>
    </main>
  )
}
