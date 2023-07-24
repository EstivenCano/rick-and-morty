"use client";

import { EpisodeCard } from "./episode-card";
import { Filter } from "@/components/filter";
import { seasons } from "@/lib/constants";
import { Episode } from "@/types/episode";

interface Props {
  episodes: Episode[];
}

export const EpisodeList = ({ episodes }: Props) => {
  return (
    <div className='flex flex-col md:flex-row relative'>
      <Filter filters={[{ type: "episode", values: seasons }]} />
      <div className='relative w-full grid grid-cols-1 auto-rows-min lg:grid-cols-2 gap-4 py-4 px-2'>
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};
