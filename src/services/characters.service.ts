import { getAllCharactersDto } from "@/dto/getAllCharacters.dto";
import { request, gql } from "graphql-request";
import { apiRoute } from "./constants";
import { getCharacterByIdDto } from "@/dto/getCharacterById.dto";

export const getAllCharacters = async () => {
  const document = gql`
    {
      characters {
        results {
          id
          name
          status
          species
          type
          gender
          origin {
            id
            name
            type
            dimension
          }
          location {
            id
            name
            type
          }
          image
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

  const { characters } = await request<getAllCharactersDto>(apiRoute, document);

  return characters;
};

export const getCharactersByIds = async (ids: [String]) => {
  const document = gql`
    query getCharactersById($ids: [ID!]!) {
      charactersByIds(ids: $ids) {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
        }
        location {
          id
          name
          type
        }
        image
      }
    }
  `;

  const response = await request<getCharacterByIdDto>(apiRoute, document, {
    ids,
  });

  return response.charactersByIds;
};
