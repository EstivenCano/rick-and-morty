import { Info } from "@/types/info";

export const CurrentInfo = (info: Info) => {
  const currentPage = (info.prev || 0) + 1;
  const firstInRange = 1 + (currentPage - 1) * 20;
  const secondInRange = (currentPage - 1) * 20 + 20;

  const range = [
    firstInRange,
    secondInRange > info.count ? info.count : secondInRange,
  ];

  return (
    <>
      <div className='m-auto sm:m-0'>
        <p className='text-sm text-muted-foreground'>
          <span className='hidden sm:inline'>Showing</span>{" "}
          <span className='font-medium'>{range[0]}</span> to{" "}
          <span className='font-medium'>{range[1]}</span> of{" "}
          <span className='font-medium'>{info.count}</span>{" "}
          <span className='hidden sm:inline'>results</span>
        </p>
      </div>
    </>
  );
};
