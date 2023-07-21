import { Character } from "@/types/character";
import { CharacterCard } from "./character-card";

interface Props {
  characters: Character[];
}

export const CharacterList = ({ characters }: Props) => {
  return (
    <div className='relative flex flex-wrap content-stretch gap-4 py-4 px-2 justify-center'>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};
