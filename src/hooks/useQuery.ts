"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

type SearchProps = {
  type: string;
  value: string;
};

export const useQuery = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const checkParam = ({ type, value }: SearchProps) => {
    return searchParams.get(type) === value;
  };

  const handleQuery = ({ type, value }: SearchProps) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (checkParam({ type, value })) {
      current.delete(type);
    } else {
      current.set(type, value);
    }

    current.set("page", "1");

    const search = current.toString();

    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  return { searchParams, handleQuery, checkParam };
};
