"use client";

import { Character } from "@/types/character";
import { Info } from "@/types/info";

import { CharacterList } from "./characters-list";
import { Pagination } from "@/components/pagination";

interface Props {
  characters: Character[];
  info: Info;
}

const Characters = ({ characters, info }: Props) => {
  return (
    <div className='pb-14'>
      <CharacterList characters={characters} />
      <Pagination info={info} />
    </div>
  );
};

export default Characters;
