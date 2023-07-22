import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Character } from "@/types/character";
import Image from "next/image";

interface Props {
  character: Character;
}

export const CharacterCard = ({ character }: Props) => {
  return (
    <Card className='flex flex-row max-w-full justify-between'>
      <div className='w-[140px] h-full float-left md:min-w-[180px] md:h-full relative rounded-l-sm overflow-hidden'>
        <Image
          src={character.image}
          alt='Rick and morty logo'
          quality={100}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className='border-r-4 px-2 md:px-0 flex flex-row md:flex-col rounded-md border-nuclear/60 w-full overflow-hidden'>
        <CardHeader className='p-2 md:p-6 md:py-4'>
          <CardTitle className='hover:text-bluclear text-lg md:text-xl cursor-pointer line-clamp-2'>
            {character.name}
          </CardTitle>
          <CardDescription className='capitalize'>
            {character.status} - {character.species}
          </CardDescription>
        </CardHeader>
        <CardContent className='hidden md:flex flex-col gap-2 md:gap-4'>
          <div>
            <strong className='text-sm truncate text-muted-foreground'>
              Last know location:
            </strong>
            <p className='text-sm truncate'>{character.location.name}</p>
          </div>
          <div>
            <strong className='text-sm truncate text-muted-foreground'>
              First seen in:
            </strong>
            <p className='text-sm truncate'>{character.location.name}</p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
