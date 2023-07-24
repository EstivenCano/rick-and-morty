import Location from "@/content/location";
import { getAllEpisodes } from "@/services/episodes.service";
import { getAllLocations } from "@/services/locations.service";

type Props = {
  searchParams?: {
    page?: string;
    name?: string;
  };
};

export default async function EpisodePage({ searchParams }: Props) {
  const data = await getAllEpisodes({
    page: Number(searchParams?.page) || 1,
    name: searchParams?.name,
  });

  const { info, results } = data;

  return (
    <main className='max-w-screen-2xl w-full mx-auto'>
      {results[0].episode}
    </main>
  );
}
