import Episodes from "@/content/episode";
import { getAllEpisodes } from "@/services/episodes.service";

type Props = {
  searchParams?: {
    page?: string;
    name?: string;
    episode?: string;
  };
};

export default async function EpisodePage({ searchParams }: Props) {
  const data = await getAllEpisodes({
    page: Number(searchParams?.page) || 1,
    name: searchParams?.name,
    episode: searchParams?.episode,
  });

  const { info, results } = data;

  return (
    <main className='max-w-screen-2xl w-full mx-auto'>
      <Episodes episodes={results} info={info} />
    </main>
  );
}
