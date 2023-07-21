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
    <Card className='flex flex-row w-[440px] h-60 max-w-md justify-between'>
      <div className='min-w-[180px] h-full relative rounded-l-sm overflow-hidden'>
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
      <div className='border-r-4 rounded-md border-nuclear/60 w-full overflow-hidden'>
        <CardHeader>
          <CardTitle className='hover:text-bluclear cursor-pointer line-clamp-2'>
            {character.name}
          </CardTitle>
          <CardDescription className='capitalize'>
            {character.status} - {character.species}
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          <div>
            <strong className='text-md'>Last know location:</strong>
            <p className='text-sm truncate'>{character.location.name}</p>
          </div>
          <div>
            <strong className='text-md'>First seen in:</strong>
            <p className='text-sm truncate'>{character.location.name}</p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
