import { getAllCharactersDto } from "@/dto/getAllCharacters.dto";
import { request, gql } from "graphql-request";
import { apiRoute } from "./constants";

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

  const { characters } = (await request(
    apiRoute,
    document
  )) as getAllCharactersDto;

  return characters;
};
