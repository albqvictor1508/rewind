import { routeTree } from "./route-tree.gen"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

const router = createRouter({ routeTree })

export function App() {
  return <>
    <RouterProvider router={router} />
    <TanStackRouterDevtools router={router} initialIsOpen={false} />
  </>
}


