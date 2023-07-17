import { Character } from "./character";

export interface Location {
  id: string;
  name: string;
  type: string;
  residents: Array<Character>;
  dimension: string;
  created: string;
}
