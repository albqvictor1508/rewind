import { createFileRoute, Link } from "@tanstack/react-router"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export const Route = createFileRoute('/_auth/change-password')({
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
              <h2 className="text-zinc-200 text-4xl font-bold">Forgot your password?</h2>
              <p className="text-zinc-600 font-normal text-lg">
                Create your account to continue.
              </p>
            </div>

            <form className="flex flex-col space-y-10">
              <div className="flex flex-col space-y-2">
                <label className="text-base font-medium" htmlFor="email">
                  Email
                </label>
                <Input
                  type="password"
                  id="email"
                  className="p-5 font-normal text-lg"
                  placeholder="Enter your email"
                />
              </div>

              <Button
                type="button"
                className="p-6 bg-red-600 hover:bg-red-700 transition font-bold text-white text-base"
              >
                <Link
                  to={'/code'}
                >
                  Send
                </Link>
              </Button>
            </form>

            <Link className="w-full text-center underline text-zinc-400 hover:text-zinc-100 transition" to="/signin">
              Back to Sign in.
            </Link>
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
          src="/flash.jpg"
          alt="Background image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#0a0a0a]/95" />
      </section>
    </main>
  )
}
