import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { useQuery } from "@/hooks/useQuery";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export const SearchName = () => {
  const { handleQuery, searchParams } = useQuery();
  const [value, setValue] = useState(searchParams.get("name") || "");
  const debouncedValue = useDebounce(value, 800);
  const handleChangeQuery = useRef(handleQuery);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (debouncedValue !== searchParams.get("name")) {
      handleChangeQuery.current({ type: "name", value: debouncedValue });
    }
  }, [debouncedValue, searchParams]);

  return (
    <Input
      type='text'
      name='name'
      defaultValue={searchParams.get("name") || ""}
      placeholder='Search a name...'
      className='mb-3'
      onChange={handleChange}
    />
  );
};
