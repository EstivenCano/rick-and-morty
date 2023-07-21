"use client";

import { Character } from "@/types/character";
import { Info } from "@/types/info";

import { CharacterList } from "./characters-list";

interface Props {
  characters: Character[];
  info: Info;
}

const Characters = ({ characters, info }: Props) => {
  return (
    <div>
      <CharacterList characters={characters} />
    </div>
  );
};

export default Characters;
