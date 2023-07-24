import Location from "@/content/location";
import { getAllLocations } from "@/services/locations.service";
import { Metadata } from "next";

type Props = {
  searchParams?: {
    page?: string;
    name?: string;
    type?: string;
    dimension?: string;
  };
};

export const metadata: Metadata = {
  title: "Locations",
  description: "Rick and Morty locations list",
};

export default async function LocationPage({ searchParams }: Props) {
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
