import { EpisodeFilter } from "@/types/episode-filter";
import { getAllEpisodesDto } from "@/dto/getAllEpisodes.dto";
import { getEpisodeByIdDto } from "@/dto/getEpisodeById.dto";
import { serviceClient } from "./serviceClient";

export const getAllEpisodes = async ({
  page = 1,
  name,
  episode,
}: EpisodeFilter) => {
  const query = `
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

  const { episodes } = await serviceClient<getAllEpisodesDto>({
    query,
    variables: {
      page,
      name,
      episode,
    },
  });

  return episodes;
};

export const getEpisodeById = async (ids: [String]) => {
  const query = `
    query getEpisodeById($ids: [ID!]!) {
      episodesByIds(ids: $ids) {
        id
        name
        air_date
        episode
        characters {
          id
          name
          image
        }
      }
    }
  `;

  const { episodesByIds } = await serviceClient<getEpisodeByIdDto>({
    query,
    variables: { ids },
  });

  return episodesByIds;
};
