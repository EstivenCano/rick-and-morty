import { Character } from "./character";

export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<Character>;
  created: string;
}
