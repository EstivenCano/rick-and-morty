import { Info } from "@/types/info";

import { LocationList } from "./location-list";
import { Pagination } from "@/components/pagination";
import { Location } from "@/types/location";

interface Props {
  locations: Location[];
  info: Info;
}

const Locations = ({ locations, info }: Props) => {
  return (
    <div className='pb-14'>
      <LocationList locations={locations} />
      <Pagination info={info} />
    </div>
  );
};

export default Locations;
