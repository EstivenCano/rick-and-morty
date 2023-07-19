import { getCharactersByIds } from "@/services/characters.service";
import { notFound } from "next/navigation";

export default async function CharacterById({
  params,
}: {
  params: { id: string };
}) {
  const [character] = await getCharactersByIds([params.id]);

  if (!character) {
    return notFound();
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {params.id} {character.name}
    </main>
  );
}
