import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { useQuery } from "@/hooks/useQuery";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export const CharacterSearch = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1000);
  const { handleQuery, searchParams } = useQuery();
  const handleChangeQuery = useRef(handleQuery);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    handleChangeQuery.current({ type: "name", value: debouncedValue });
  }, [debouncedValue]);

  return (
    <Input
      type='text'
      name='name'
      placeholder='Search a name...'
      className='mb-3'
      onChange={handleChange}
    />
  );
};
