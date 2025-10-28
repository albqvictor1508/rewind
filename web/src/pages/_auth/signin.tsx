import { createFileRoute, Link } from "@tanstack/react-router"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa6";

export const Route = createFileRoute('/_auth/signin')({
  component: RouteComponent
})

export function RouteComponent() {
  return (
    <main className='w-full h-full p-4 grid grid-cols-2'>
      <section className='flex flex-col justify-between py-12 px-8 text-2xl font-bold border-2 border-zinc-600 w-full h-screen'>
        <div className="">
          <h1 className="text-zinc-200 text-3xl">Rewind</h1>
          <div className="w-[600px] flex flex-col space-y-4 py-14 px-10">
            <div className="flex flex-col space-y-1">
              <h2 className="text-zinc-200 text-2xl">Entrar</h2>
              <p className="text-zinc-600 font-normal text-lg">Acesse sua conta para continuar.</p>
            </div>
            <form className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="text-lg" form='email'>Email</label>
                <Input id="email" className="p-5" placeholder="Place here your better email." />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-lg" form='email'>Password</label>
                <Input className="p-5" placeholder="Your password." />
              </div>
            </form>
            <div className="w-full flex items-center gap-2">
              <p className="flex-1 border border-zinc-800"></p>
              <p className=" text-zinc-800 text-base font-normal">OU</p>
              <p className="flex-1 border border-zinc-800"></p>
            </div>
            <div className="w-full flex items-center gap-2">
              <Button className='p-5 flex-1 flex-row-reverse flex gap-2 border-2 border-zinc-800' variant={'ghost'}>
                <p className="text-sm">Entrar com Google</p>
                <FcGoogle />
              </Button>
              <Button className='p-5 flex-1 flex flex-row-reverse border-2 border-zinc-800' variant={'ghost'}>
                <p className="text-sm">Entrar com Github</p>
                <FaGithub />
              </Button>
            </div>

            <p className="text-base flex justify-center gap-2 font-normal text-zinc-400 w-full ">
              Novo por aqui?
              <Link className="font-bold text-zinc-200" to={'salve'}>
                Crie uma conta.
              </Link>
            </p>
          </div>
        </div>
        <p className="font-normal text-lg text-zinc-700 w-full text-center">salve salve salve</p>
      </section>
      <div className='text-2xl font-bold border-2 border-zinc-600 h-screen'>salve</div> </main >
  )
}
