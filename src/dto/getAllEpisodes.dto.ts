import { Episode } from "@/types/episode";
import { Info } from "@/types/info";

export type getAllEpisodesDto = {
  episodes: {
    results: Array<Episode>;
    info: Info;
  };
};
