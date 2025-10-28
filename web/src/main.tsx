import { RouterProvider, createRouter } from "@tanstack/react-router"
//@ts-expect-error
import { routeTree } from "./routeTree.gen"
import ReactDOM from "react-dom/client"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

const router = createRouter({ routeTree })

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
    <TanStackRouterDevtools router={router} initialIsOpen={false} />
  </>
)

