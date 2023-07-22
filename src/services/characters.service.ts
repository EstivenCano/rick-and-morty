import { getAllCharactersDto } from "@/dto/getAllCharacters.dto";
import { request, gql } from "graphql-request";
import { apiRoute } from "./constants";
import { getCharacterByIdDto } from "@/dto/getCharacterById.dto";
import { CharacterFilter } from "@/types/character-filter";

export const getAllCharacters = async ({
  page = 1,
  gender,
  species,
  status,
  name,
}: CharacterFilter) => {
  const document = gql`
    query getAllCharacters(
      $page: Int!
      $gender: String
      $species: String
      $status: String
      $name: String
    ) {
      characters(
        page: $page
        filter: {
          status: $status
          species: $species
          gender: $gender
          name: $name
        }
      ) {
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

  const { characters } = await request<getAllCharactersDto>(
    apiRoute,
    document,
    { page, species, status, gender, name }
  );

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
