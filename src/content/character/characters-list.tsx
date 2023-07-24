"use client";

import { Character } from "@/types/character";
import { CharacterCard } from "./character-card";
import { Filter } from "@/components/filter";
import { gender, species, status } from "@/lib/constants";

interface Props {
  characters: Character[];
}

export const CharacterList = ({ characters }: Props) => {
  return (
    <div className='flex flex-col md:flex-row relative'>
      <Filter
        filters={[
          { type: "status", values: status },
          { type: "species", values: species },
          { type: "gender", values: gender },
        ]}
      />
      <div className='relative w-full grid grid-cols-1 auto-rows-min lg:grid-cols-2 gap-4 py-4 px-2'>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};
