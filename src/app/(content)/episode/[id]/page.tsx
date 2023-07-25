import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getEpisodeById } from "@/services/episodes.service";
import { EpisodeCard } from "@/content/episode/episode-card";

export default async function EpisodeById({
  params,
}: {
  params: { id: string };
}) {
  const [episode] = await getEpisodeById([params.id]);

  if (!episode) {
    return notFound();
  }

  return (
    <main className='grid grid-cols-1 max-w-4xl mx-auto w-full gap-4 py-4 px-2'>
      <EpisodeCard episode={episode} />
      <section className='flex flex-col gap-4 rounded-lg border border-r-4 border-r-nuclear/60 bg-card text-card-foreground shadow-sm px-4 md:px-6 py-4'>
        <h2 className='text-lg font-bold text-bluclear'>More info:</h2>
        <Accordion type='single' collapsible defaultValue={"characters"}>
          <AccordionItem value='characters'>
            <AccordionTrigger className='hover:bg-muted hover:no-underline rounded-md px-2 py-2 bg-foreground/10'>
              List of characters
            </AccordionTrigger>
            <AccordionContent>
              {episode.characters.map((character) => (
                <Card
                  key={character.id}
                  className='flex flex-row my-2 border-r-4 border-r-nuclear/60'>
                  <Image
                    src={character.image}
                    alt={`${character.name} image`}
                    quality={100}
                    width={100}
                    height={100}
                    className='rounded-l-sm'
                  />
                  <CardHeader className='p-2 md:p-6 md:py-4'>
                    <Link
                      href={`/character/${character.id}`}
                      className='hover:text-bluclear text-lg md:text-xl cursor-pointer line-clamp-2'>
                      {character.name}
                    </Link>
                  </CardHeader>
                </Card>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
