import { routeTree } from "./route-tree.gen"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

const router = createRouter({ routeTree })

const queryClient = new QueryClient();

export function App() {
  return <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} initialIsOpen={false} />
    </QueryClientProvider>
  </>
}


