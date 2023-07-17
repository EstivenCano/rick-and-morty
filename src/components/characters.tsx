"use client";

import { getAllCharacters } from "@/services/characters.service";
import useSWRImmutable from "swr/immutable";

export const Characters = () => {
  const { data, error, isLoading } = useSWRImmutable(
    "/all-characters",
    getAllCharacters
  );

  console.log(data);

  return (
    <div>
      {data?.results.map((res, i) => (
        <p key={i}>{res.name}</p>
      ))}
    </div>
  );
};
