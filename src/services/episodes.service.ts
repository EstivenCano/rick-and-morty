import { request, gql } from "graphql-request";
import { apiRoute } from "./constants";

import { EpisodeFilter } from "@/types/episode-filter";
import { getAllEpisodesDto } from "@/dto/getAllEpisodes.dto";

export const getAllEpisodes = async ({
  page = 1,
  name,
  episode,
}: EpisodeFilter) => {
  const document = gql`
    query getAllEpisodes($page: Int!, $name: String, $episode: String) {
      episodes(page: $page, filter: { name: $name, episode: $episode }) {
        results {
          id
          name
          air_date
          episode
        }
        info {
          count
          pages
          next
          prev
        }
      }
    }
  `;

  const { episodes } = await request<getAllEpisodesDto>(apiRoute, document, {
    page,
    name,
    episode,
  });

  return episodes;
};
