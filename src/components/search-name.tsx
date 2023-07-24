import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { useQuery } from "@/hooks/useQuery";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export const SearchName = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 800);
  const { handleQuery, searchParams } = useQuery();
  const handleChangeQuery = useRef(handleQuery);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (value !== "" && debouncedValue !== "") {
      handleChangeQuery.current({ type: "name", value: debouncedValue });
    }
  }, [debouncedValue, value]);

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
