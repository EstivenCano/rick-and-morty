"use client";

import Image from "next/image";
import { ChangeTheme } from "./change-theme";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Menu } from "lucide-react";

export const AppBar = () => {
  return (
    <nav className='z-10 h-20 sticky bg-background top-0 flex justify-between items-center w-full py-1 px-2 md:px-8 border-b-2'>
      <Button
        variant='link'
        className='h-16 w-44 max-w-xs relative cursor-pointer hidden md:flex'
        asChild>
        <Link href='/' about='Go back to home'>
          <Image
            src='/assets/logo.webp'
            alt='Rick and morty logo'
            quality={100}
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </Link>
      </Button>
      <NavigationMenu className='flex md:hidden'>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='border px-2'>
              <Menu />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='flex flex-col w-fit gap-4 p-4'>
                <li>
                  <Link href='/' legacyBehavior passHref>
                    <NavigationMenuLink>Home</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href='/character' legacyBehavior passHref>
                    <NavigationMenuLink>Characters</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href='/location' legacyBehavior passHref>
                    <NavigationMenuLink>Locations</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href='/episode' legacyBehavior passHref>
                    <NavigationMenuLink>Episodes</NavigationMenuLink>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className='hidden md:flex'>
        <NavigationMenuList className='gap-6'>
          <NavigationMenuItem>
            <Link href='/character' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Characters
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/location' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Locations
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/episode' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Episodes
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <ChangeTheme />
    </nav>
  );
};
