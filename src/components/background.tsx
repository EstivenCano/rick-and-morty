import Image from "next/image";

export const Background = () => {
  return (
    <div className='flex justify-center w-full h-full items-center overflow-hidden absolute -z-10'>
      <header className='absolute max-w-lg w-full h-40 top-4'>
        <Image
          src='/assets/Rick-and-Morty.webp'
          alt='Rick and morty portal'
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </header>
      <span className='relative w-96 h-96 rounded-full animate-[pulse_8s_linear_infinite]'>
        <Image
          src='/assets/Portal.webp'
          alt='Rick and morty portal'
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </span>
      <span className='absolute w-96 h-96 rounded-full shadow-xl shadow-nuclear/20 animate-[spin_10s_linear_infinite]' />
    </div>
  );
};
