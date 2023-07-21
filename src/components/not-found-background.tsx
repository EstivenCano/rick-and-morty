import Image from "next/image";

export const NotFoundBackground = () => {
  return (
    <div className='flex justify-center w-screen items-center overflow-hidden -z-10'>
      <span className='text-[150px] md:text-[200px] font-bold fixed mr-56 md:mr-96'>
        4
      </span>
      <Image
        src='/assets/Portal.webp'
        alt='Rick and morty portal'
        width={400}
        height={150}
        className='z-10 scale-50 md:scale-100'
      />
      <span className='text-[150px] md:text-[200px] font-bold fixed ml-56 md:ml-96'>
        4
      </span>
      <span className='absolute w-72 h-72 md:w-96 md:h-96 rounded-full shadow-xl shadow-nuclear/20 animate-[spin_10s_linear_infinite]' />
    </div>
  );
};
