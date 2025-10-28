import { createFileRoute, Link } from "@tanstack/react-router"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa6";

export const Route = createFileRoute('/_auth/signin')({
  component: RouteComponent
})

export function RouteComponent() {
  return (

    <main className="w-full h-screen grid grid-cols-2">
      {/* Lado esquerdo - Formulário */}
      <section className="flex flex-col justify-between py-12 px-8 text-2xl font-bold w-full h-full bg-[#0a0a0a]">
        <div>
          <Logo />
          <div className="w-[600px] flex flex-col space-y-4 py-14 px-10">
            <div className="flex flex-col space-y-2">
              <h2 className="text-zinc-200 text-4xl font-bold">Sign in</h2>
              <p className="text-zinc-600 font-normal text-lg">
                Sign in your account to continue.
              </p>
            </div>

            <form className="flex flex-col space-y-8">
              <div className="flex flex-col space-y-2">
                <label className="text-base font-medium" htmlFor="email">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  className="p-5 font-normal"
                  placeholder="Place your better email"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-base font-medium" htmlFor="password">
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  className="p-5 font-normal"
                  placeholder="Place your password"
                />
                <p className="text-base font-normal w-full text-right text-zinc-400 cursor-pointer hover:text-zinc-300 transition">
                  Forgot password?
                </p>
              </div>

              <Button
                type="submit"
                className="p-6 bg-red-600 hover:bg-red-700 transition font-bold text-white text-base"
              >
                Sign in
              </Button>
            </form>

            <div className="w-full flex items-center gap-2">
              <p className="flex-1 border border-zinc-800"></p>
              <p className="text-zinc-800 text-base font-medium">OU</p>
              <p className="flex-1 border border-zinc-800"></p>
            </div>

            <div className="w-full flex items-center gap-4">
              <Button
                className="p-6 flex-1 flex flex-row-reverse gap-2"
                variant="outline"
              >
                <p className="text-sm">Sign with Google</p>
                <FcGoogle />
              </Button>

              <Button
                className="p-6 flex-1 flex flex-row-reverse gap-2"
                variant="outline"
              >
                <p className="text-sm">Sign with GitHub</p>
                <FaGithub />
              </Button>
            </div>

            <p className="text-base flex justify-center gap-2 font-normal text-zinc-400 w-full">
              New here?
              <Link className="font-bold text-zinc-200 hover:text-zinc-100 transition" to="/signup">
                Create an Account.
              </Link>
            </p>
          </div>
        </div>

        <p className="font-normal text-lg text-zinc-700 w-full text-center">
          © 2025 Rewind. Todos os direitos reservados.
        </p>
      </section>

      {/* Lado direito - Imagem com gradiente */}
      <section className="relative w-full h-full">
        <img
          src="/aranha.jpg"
          alt="Imagem de fundo"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay de gradiente */}
        <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#0a0a0a]/95" />
      </section>
    </main>
  )
}
