import { getAllCharacters } from "@/services/characters.service";
import Character from "@/content/character";

export default async function CharacterPage() {
  const data = await getAllCharacters();
  const { info, results } = data;

  return (
    <>
      <Character characters={results} info={info} />
    </>
  );
}
