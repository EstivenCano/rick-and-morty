import { Info } from "@/types/info";
import { Location } from "@/types/location";

export type getAllLocationsDto = {
  locations: {
    results: Array<Location>;
    info: Info;
  };
};
