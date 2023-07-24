import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Character } from "@/types/character";
import Image from "next/image";
import Link from "next/link";

interface Props {
  character: Character;
}

export const CharacterCard = ({ character }: Props) => {
  return (
    <Card className='flex flex-row max-w-full justify-between'>
      <div className='w-[140px] h-full float-left md:min-w-[180px] md:h-full relative rounded-l-sm overflow-hidden'>
        <Image
          src={character.image}
          alt={`${character.name} image`}
          quality={100}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className='border-r-4 px-2 md:px-0 flex flex-col rounded-md border-nuclear/60 w-full overflow-hidden'>
        <CardHeader className='p-2 md:p-6 md:py-4'>
          <Link
            href={`/character/${character.id}`}
            className='hover:text-bluclear text-lg md:text-xl cursor-pointer line-clamp-2'>
            {character.name}
          </Link>
          <CardDescription className='capitalize'>
            {character.status} - {character.species}
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col p-2 md:px-6 gap-2 md:gap-4'>
          <div className='flex flex-wrap gap-1'>
            <strong className='text-sm truncate text-muted-foreground'>
              Last know location:
            </strong>
            <Link
              href={`/location/${character.location.id}`}
              className='text-sm truncate hover:text-bluclear'>
              {character.location.name}
            </Link>
          </div>
          <div className='flex flex-wrap gap-1'>
            <strong className='text-sm truncate text-muted-foreground'>
              First episode:
            </strong>
            <Link
              href={`/episode/${character.episode?.[0].id}`}
              className='text-sm truncate hover:text-bluclear'>
              {character.episode?.[0].name || "Unknown"}
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
