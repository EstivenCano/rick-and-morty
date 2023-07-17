import { Character } from "@/types/character";
import { Info } from "@/types/info";

export type getAllCharactersDto = {
  characters: {
    results: Array<Character>;
    info: Info;
  };
};
