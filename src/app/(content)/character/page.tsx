import { getAllCharacters } from "@/services/characters.service";
import Character from "@/content/character";

type Props = {
  searchParams?: {
    page?: string;
  };
};

export default async function CharacterPage({ searchParams }: Props) {
  const data = await getAllCharacters(Number(searchParams?.page) || 1);
  const { info, results } = data;

  return (
    <main className='max-w-7xl mx-auto'>
      <Character characters={results} info={info} />
    </main>
  );
}
