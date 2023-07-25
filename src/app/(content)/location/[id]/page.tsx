import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader } from "@/components/ui/card";
import { LocationCard } from "@/content/location/location-card";
import { getLocationById } from "@/services/locations.service";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function LocationById({
  params,
}: {
  params: { id: string };
}) {
  const [location] = await getLocationById([params.id]);

  if (!location) {
    return notFound();
  }

  return (
    <main className='grid max-w-4xl mx-auto w-full gap-4 py-4 px-2'>
      <LocationCard location={location} />
      <section className='flex flex-col gap-4 rounded-lg border border-r-4 border-r-nuclear/60 bg-card text-card-foreground shadow-sm px-4 md:px-6 py-4'>
        <h2 className='text-lg font-bold text-bluclear'>More info:</h2>
        <div className='flex flex-row gap-4 text-2xl'>
          <div className='flex flex-wrap gap-1'>
            <strong className='text-sm truncate text-bluclear'>
              Dimension:
            </strong>
            <p className='text-sm truncate'>{location.dimension}</p>
          </div>
          <div className='flex flex-wrap gap-1'>
            <strong className='text-sm truncate text-bluclear'>Type:</strong>
            <p className='text-sm truncate'>{location.type || "Unknown"}</p>
          </div>
        </div>
        <hr />
        <Accordion type='single' collapsible>
          <AccordionItem value={`residents`}>
            <AccordionTrigger className='hover:bg-muted hover:no-underline rounded-md px-2 py-2 bg-foreground/10'>
              List of residents
            </AccordionTrigger>
            <AccordionContent>
              {location.residents.map((character) => (
                <Card
                  key={character.id}
                  className='flex flex-row my-2 border-r-4 border-r-nuclear/60'>
                  <Image
                    src={character.image}
                    alt={`${character.name} image`}
                    quality={100}
                    width={100}
                    height={100}
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
