import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CharacterCard } from "@/content/character/character-card";
import { getCharactersByIds } from "@/services/characters.service";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CharacterById({
  params,
}: {
  params: { id: string };
}) {
  const [character] = await getCharactersByIds([params.id]);

  if (!character) {
    return notFound();
  }

  return (
    <main className='grid grid-cols-1 max-w-4xl mx-auto w-full gap-4 py-4 px-2'>
      <CharacterCard character={character} />
      <section className='flex flex-col gap-4 rounded-lg border border-r-4 border-r-nuclear/60 bg-card text-card-foreground shadow-sm px-2 py-4'>
        <h2 className='text-lg font-bold text-bluclear'>More info:</h2>
        <div className='flex flex-row gap-4 text-2xl'>
          <div className='flex flex-wrap gap-1'>
            <strong className='text-sm truncate text-bluclear'>Gender:</strong>
            <p className='text-sm truncate'>{character.gender}</p>
          </div>
          <div className='flex flex-wrap gap-1'>
            <strong className='text-sm truncate text-bluclear'>Type:</strong>
            <p className='text-sm truncate'>{character.type || "Unknown"}</p>
          </div>
          <div className='flex flex-wrap gap-1'>
            <strong className='text-sm truncate text-bluclear'>Origin:</strong>
            <Link
              href={`/location${
                !!character.origin.id ? `/` + character.origin.id : ""
              }`}
              className='text-sm truncate hover:text-bluclear cursor-pointer capitalize'>
              {character.origin.name || "Unknown"}
            </Link>
          </div>
        </div>
        <hr />
        <Accordion
          type='single'
          collapsible
          className='w-full sm:mr-2 mr-8'
          defaultValue='episodes'>
          <AccordionItem value='episodes'>
            <AccordionTrigger className='hover:bg-muted hover:no-underline rounded-md px-2 py-2 bg-foreground/10'>
              List of episodes
            </AccordionTrigger>
            <AccordionContent className='py-2'>
              {character.episode.map((ep) => (
                <Link
                  href={`/episode/${ep.id}`}
                  key={ep.id}
                  className={`flex w-full min-w-full px-2 py-1 text-sm hover:text-bluclear hover:underline`}>
                  {ep.name}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
