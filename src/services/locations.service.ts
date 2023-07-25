import { LocationFilter } from "@/types/location-filter";
import { getAllLocationsDto } from "@/dto/getAllLocations.dto";
import { getLocationByIdDto } from "@/dto/getLocationById.dto";
import { serviceClient } from "./serviceClient";

export const getAllLocations = async ({
  page = 1,
  name,
  dimension,
  type,
}: LocationFilter) => {
  const query = `
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

  const { locations } = await serviceClient<getAllLocationsDto>({
    query,
    variables: {
      page,
      name,
      type,
      dimension,
    },
  });

  return locations;
};

export const getLocationById = async (ids: [String]) => {
  const query = `
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

  const { locationsByIds } = await serviceClient<getLocationByIdDto>({
    query,
    variables: { ids },
  });

  return locationsByIds;
};
