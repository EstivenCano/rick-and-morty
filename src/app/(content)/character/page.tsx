import { getAllCharacters } from "@/services/characters.service";
import Character from "@/content/character";
import { Metadata } from "next";

type Props = {
  searchParams?: {
    page?: string;
    gender?: string;
    status?: string;
    species?: string;
    name?: string;
  };
};

export const metadata: Metadata = {
  title: "Characters",
  description: "Rick and Morty characters list",
};

export default async function CharacterPage({ searchParams }: Props) {
  const data = await getAllCharacters({
    page: Number(searchParams?.page) || 1,
    gender: searchParams?.gender,
    species: searchParams?.species,
    status: searchParams?.status,
    name: searchParams?.name,
  });

  const { info, results } = data;

  return (
    <main className='max-w-screen-2xl w-full mx-auto relative'>
      <Character characters={results} info={info} />
    </main>
  );
}
