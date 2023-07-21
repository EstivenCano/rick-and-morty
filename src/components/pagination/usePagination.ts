"use client";

import { Info } from "@/types/info";
import { usePathname, useSearchParams } from "next/navigation";

export const usePagination = (info: Info) => {
  const currentPage = Number(useSearchParams().get("page") || 1);
  const pathname = usePathname();

  const isFirstPage = info.prev === null;
  const isLastPage = currentPage === info.pages;

  return {
    pathname,
    currentPage,
    isFirstPage,
    isLastPage,
  };
};
