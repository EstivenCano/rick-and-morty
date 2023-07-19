import Image from "next/image";

export const Background = () => {
  return (
    <div className='flex justify-center w-screen h-full items-center overflow-hidden absolute -z-10'>
      <Image
        src='/assets/Rick-and-Morty.webp'
        alt='Rick and morty portal'
        width={500}
        height={150}
        className='animate-[pulse_8s_linear_infinite] z-10'
      />
      <span className='absolute w-96 h-96 rounded-full shadow-xl shadow-nuclear/20 animate-[spin_10s_linear_infinite]' />
    </div>
  );
};
