import { Character } from "./character";

export interface Origin {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Array<Character>;
  created: string;
}
