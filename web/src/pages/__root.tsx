import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Menu } from "@/components/menu"

export const Route = createRootRoute({
  component: RootComponent,
})

export function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}
