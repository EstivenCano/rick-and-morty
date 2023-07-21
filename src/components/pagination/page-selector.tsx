"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ScrollArea } from "../ui/scroll-area";

interface Props {
  pages: number;
}

export function PageSelector({ pages }: Props) {
  const currentPage = useSearchParams().get("page") || "1";

  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (value: string) => {
    router.push(`${pathname}?page=${value}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='rounded-none'>{`Page ${currentPage}`}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 hidden sm:flex sm:flex-col'>
        <DropdownMenuLabel>Pages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ScrollArea className='h-[200px] w-[350px]'>
          <DropdownMenuRadioGroup
            value={currentPage}
            onValueChange={handleChange}>
            {Array.from({ length: pages || 1 }, (v, i) => (
              <DropdownMenuRadioItem
                key={i}
                value={`${i + 1}`}
                className='cursor-pointer'>
                {`Page ${i + 1}`}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
