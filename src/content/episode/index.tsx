"use client";

import { Info } from "@/types/info";

import { EpisodeList } from "./episode-list";
import { Pagination } from "@/components/pagination";
import { Episode } from "@/types/episode";

interface Props {
  episodes: Episode[];
  info: Info;
}

const Episodes = ({ episodes, info }: Props) => {
  return (
    <div className='pb-14'>
      <EpisodeList episodes={episodes} />
      <Pagination info={info} />
    </div>
  );
};

export default Episodes;
