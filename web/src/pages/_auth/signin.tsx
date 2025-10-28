import { createFileRoute } from "@tanstack/react-router"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute('/_auth/signin')({
  component: RouteComponent
})

export function RouteComponent() {
  return (
    <main className='w-full h-full p-4 grid grid-cols-2'>
      <section className='flex flex-col justify-between p-8 text-2xl font-bold border-2 border-zinc-600 w-full h-screen'>
        <div className="w-[500px] flex flex-col space-y-2 border-2 border-yellow-200">
          <h2 className="text-zinc-200 text-2xl">Rewind</h2>
          <form className="flex flex-col space-y-6 border-2 border-zinc-800">
            <Input className="border-zinc-800" />
            <Input className="border-zinc-800" />
          </form>
          <div className="w-full flex items-center gap-2">
            <p className="flex-1 border-2 border-zinc-800"></p>
            <p className=" text-zinc-800 text-base font-normal">OU</p>
            <p className="flex-1 border-2 border-zinc-800"></p>
          </div>
          <div className="w-full flex items-center gap-2">
            <Button className='flex-1 border-2 border-zinc-800' variant={'ghost'}>
              Salve
            </Button>
            <Button className='flex-1 border-2 border-zinc-800' variant={'ghost'}>
              Salve
            </Button>
          </div>

        </div>

        <p className="font-normal text-lg text-zinc-700 w-full text-center">salve salve salve</p>
      </section>
      <div className='text-2xl font-bold border-2 border-zinc-600 h-screen'>salve</div> </main >
  )
}
