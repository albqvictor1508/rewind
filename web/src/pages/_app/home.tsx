import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/_app/home')({
  component: HomePage,
  head: () => ({
    meta: [
      { title: 'Home | Rewind' }
    ]
  })
})

function HomePage() {
  return (
    <div>Salvee</div>
  );
  o
