"use client"

import { Link } from "@tanstack/react-router"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Profile } from "./profile"
import { Input } from "./ui/input"
import { Logo } from "./logo"

export function Menu() {
  const user = { photo: 'salve', username: 'alexsa martins' }

  return (
    <div className="w-full flex justify-between py-4 px-8 border-b">
      <div className="flex gap-8">
        <Link to={'/home'}>
          <Logo />
        </Link>
        <NavigationMenu className="w-full max-w-none mx-0">
          <NavigationMenuList className="w-full flex-wrap justify-between">
            <NavigationMenuItem className="flex-1">
              <NavigationMenuLink asChild className="font-normal text-base">
                <Link to="/search">Search</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuLink asChild>
              <Link to={'/mymovies'} className="text-base font-medium">My Movies</Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <Profile user={user} isProfile />
    </div >
  )
}

