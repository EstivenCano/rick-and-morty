import { request, gql } from "graphql-request";
import { apiRoute } from "./constants";
import { LocationFilter } from "@/types/location-filter";
import { getAllLocationsDto } from "@/dto/getAllLocations.dto";
import { getLocationByIdDto } from "@/dto/getLocationById.dto";

export const getAllLocations = async ({
  page = 1,
  name,
  dimension,
  type,
}: LocationFilter) => {
  const document = gql`
    query getAllLocations(
      $page: Int!
      $name: String
      $type: String
      $dimension: String
    ) {
      locations(
        page: $page
        filter: { name: $name, type: $type, dimension: $dimension }
      ) {
        results {
          id
          name
          type
          dimension
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

  const { locations } = await request<getAllLocationsDto>(apiRoute, document, {
    page,
    name,
    type,
    dimension,
  });

  return locations;
};

export const getLocationById = async (ids: [String]) => {
  const document = gql`
    query getLocationById($ids: [ID!]!) {
      locationsByIds(ids: $ids) {
        id
        name
        type
        dimension
        residents {
          id
          name
          image
        }
      }
    }
  `;

  const { locationsByIds } = await request<getLocationByIdDto>(
    apiRoute,
    document,
    {
      ids,
    }
  );

  return locationsByIds;
};
