"use client"

import { Link } from "@tanstack/react-router"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Profile } from "./profile"

export function Menu() {
  const user = { photo: 'salve', username: 'alexsa martins' }

  return (
    <div className="w-full flex justify-between">
      <Profile user={user} isProfile />
      <NavigationMenu className="w-full max-w-none mx-0">
        <NavigationMenuList className="w-full flex-wrap justify-between">
          <NavigationMenuItem className="flex-1">

            <NavigationMenuLink>
              <Link to={'/salve'} className="font-bold text-base">
                Home
              </Link>
            </NavigationMenuLink>

          </NavigationMenuItem>

          <NavigationMenuItem className="flex-1">
            <NavigationMenuLink asChild className="font-bold text-base">
              <Link to="/docs">Search</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuLink asChild>
            <Link to={'/yourmovies'} className="text-base font-bold">Your Movies</Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

