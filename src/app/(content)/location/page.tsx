import Location from "@/content/location";
import { getAllLocations } from "@/services/locations.service";

type Props = {
  searchParams?: {
    page?: string;
    name?: string;
    type?: string;
    dimension?: string;
  };
};

export default async function CharacterPage({ searchParams }: Props) {
  const data = await getAllLocations({
    page: Number(searchParams?.page) || 1,
    name: searchParams?.name,
    dimension: searchParams?.dimension,
    type: searchParams?.type,
  });

  const { info, results } = data;

  return (
    <main className='max-w-screen-2xl w-full mx-auto'>
      <Location locations={results} info={info} />
    </main>
  );
}
