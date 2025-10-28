import { createFileRoute } from "@tanstack/react-router"
import { Input } from "@/components/ui/input"

export const Route = createFileRoute('/_auth/signin')({
  component: RouteComponent
})

export function RouteComponent() {
  return (
    <main className='w-full h-full p-4 grid grid-cols-2'>
      <section className='flex flex-col justify-between p-8 items-center text-2xl font-bold border-2 border-blue-400 w-full h-screen'>
        <div className="w-[500px] flex flex-col space-y-2 border-2 border-yellow-200">
          <h2>Rewind</h2>
          <form className="border-2 border-zinc-800">
            <Input className="border-blue-400" />
            <Input />
          </form>
        </div>

        <p className="font-light text-lg text-zinc-700">salve salve salve</p>
      </section>
      <div className='text-2xl font-bold border-2 border-blue-400 h-screen'>salve</div>
    </main>
  )
}
