"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useQuery } from "@/hooks/useQuery";
import { gender, species, status } from "@/lib/constants";
import { CharacterSearch } from "./character-search";

type SearchProps = {
  type: string;
  value: string;
};

const filters = [
  { type: "status", values: status },
  { type: "species", values: species },
  { type: "gender", values: gender },
];

export const CharacterFilter = () => {
  const { handleQuery, checkParam } = useQuery();

  return (
    <div className='min-w-[250px] max-w-[250px] flex flex-col w-full top-20 sticky md:max-h-[calc(100vh-145.5px)] max-h-[calc(100vh-85px)] overflow-y-auto overflow-x-hidden pr-1 pl-2'>
      <h2 className='py-3 font-bold'>Filters</h2>
      <CharacterSearch />
      <Accordion
        type='multiple'
        defaultValue={["item-0", "item-1", "item-2"]}
        className='w-full sm:mr-2 mr-8'>
        {filters.map(({ type, values }, i) => (
          <AccordionItem key={type} value={`item-${i}`}>
            <AccordionTrigger className='capitalize hover:bg-muted rounded-md px-2 py-2'>
              {type}
            </AccordionTrigger>
            <AccordionContent className='pl-2'>
              {values.map((value) => (
                <Button
                  variant='link'
                  key={value}
                  className={`px-1 py-2 rounded-md w-full justify-start cursor-pointer ${
                    checkParam({ type, value })
                      ? "bg-nuclear/40"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => handleQuery({ type, value })}>
                  {value}
                </Button>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
