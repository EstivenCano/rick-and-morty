import Image from "next/image";
import { ChangeTheme } from "./change-theme";
import { Button } from "./ui/button";
import Link from "next/link";

export const AppBar = () => {
  return (
    <nav className='z-10 h-20 sticky bg-background top-0 flex justify-between items-center w-full py-1 px-8 border-b-2'>
      <Button
        variant='link'
        className='h-16 w-48 max-w-xs relative cursor-pointer'
        asChild>
        <Link href='/' about='Go back to home'>
          <Image
            src='/assets/Rick-and-Morty.webp'
            alt='Rick and morty logo'
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </Link>
      </Button>
      <ChangeTheme />
    </nav>
  );
};
