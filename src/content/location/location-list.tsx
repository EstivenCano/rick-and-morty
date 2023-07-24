"use client";

import { LocationCard } from "./location-card";
import { Filter } from "@/components/filter";
import { dimensions, types } from "@/lib/constants";
import { Location } from "@/types/location";

interface Props {
  locations: Location[];
}

export const LocationList = ({ locations }: Props) => {
  return (
    <div className='flex flex-col md:flex-row relative'>
      <Filter
        filters={[
          { type: "type", values: types },
          { type: "dimension", values: dimensions },
        ]}
      />
      <div className='relative w-full grid grid-cols-1 auto-rows-min lg:grid-cols-2 gap-4 py-4 px-2'>
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
};
