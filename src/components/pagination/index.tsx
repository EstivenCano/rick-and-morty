"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Info } from "@/types/info";
import { usePagination } from "./usePagination";
import { CurrentInfo } from "./current-info";
import { PageSelector } from "./page-selector";
import { useQuery } from "@/hooks/useQuery";

interface Props {
  info: Info;
}

export const Pagination = ({ info }: Props) => {
  const { handleQuery } = useQuery();
  const { isFirstPage, isLastPage } = usePagination(info);

  return (
    <div className='flex w-full max-w-screen-2xl fixed bottom-0 items-center justify-between border-t border bg-background px-4 py-3 sm:px-6 text-foreground'>
      <div className='flex flex-1 justify-between sm:hidden'>
        <Button
          variant='outline'
          disabled={isFirstPage}
          onClick={() => {
            handleQuery({ type: "page", value: `${info.prev}` });
          }}>
          Previous
        </Button>
        <CurrentInfo {...info} />
        <Button
          variant='outline'
          disabled={isLastPage}
          onClick={() => {
            handleQuery({ type: "page", value: `${info.next}` });
          }}>
          Next
        </Button>
      </div>
      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <CurrentInfo {...info} />
        <div>
          <nav
            className='isolate inline-flex -space-x-px rounded-md shadow-sm'
            aria-label='Pagination'>
            {!isFirstPage && (
              <Button
                variant='outline'
                className='rounded-r-none'
                onClick={() => {
                  handleQuery({ type: "page", value: `${info.prev}` });
                }}>
                <span className='sr-only'>Previous</span>
                <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
              </Button>
            )}
            <PageSelector pages={info.pages} />
            {!isLastPage && (
              <Button
                variant='outline'
                className='rounded-l-none'
                onClick={() => {
                  handleQuery({ type: "page", value: `${info.next}` });
                }}>
                <span className='sr-only'>Next</span>
                <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
              </Button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};
