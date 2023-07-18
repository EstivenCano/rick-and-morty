"use client";

import { getAllCharacters } from "@/services/characters.service";
import Image from "next/image";
import { Fragment } from "react";
import useSWRImmutable from "swr/immutable";

export const Characters = () => {
  const { data, error, isLoading } = useSWRImmutable(
    "/all-characters",
    getAllCharacters
  );

  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      {data?.results.map((res, i) => (
        <Fragment key={i}>
          <p>{res.name}</p>
          <Image src={res.image} alt={res.name} width={50} height={50} />
        </Fragment>
      ))}
    </div>
  );
};
