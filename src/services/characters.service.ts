import { getAllCharactersDto } from "@/dto/getAllCharacters.dto";
import { getCharacterByIdDto } from "@/dto/getCharacterById.dto";
import { CharacterFilter } from "@/types/character-filter";
import { serviceClient } from "./serviceClient";

export const getAllCharacters = async ({
  page = 1,
  gender,
  species,
  status,
  name,
}: CharacterFilter) => {
  const query = `
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
          gender
          location {
            id
            name
          }
          episode {
            id
            name
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

  const { characters } = await serviceClient<getAllCharactersDto>({
    query,
    variables: { page, species, status, gender, name },
  });

  return characters;
};

export const getCharactersByIds = async (ids: [String]) => {
  const query = `
    query getCharactersById($ids: [ID!]!) {
      charactersByIds(ids: $ids) {
        id
        name
        status
        species
        type
        gender
        image
        episode {
          id
          name
        }
        origin {
          id
          name
        }
        location {
          id
          name
        }
      }
    }
  `;

  const response = await serviceClient<getCharacterByIdDto>({
    query,
    variables: { ids },
  });

  return response.charactersByIds;
};
