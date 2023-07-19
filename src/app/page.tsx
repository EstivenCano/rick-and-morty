import { TopicCard } from "@/components/TopicCard";
import Image from "next/image";

const topics = [
  {
    title: "Characters",
    description: "All characters of the serie",
    path: "/character",
    image: "/assets/characters.webp",
  },
  {
    title: "Location",
    description: "Information about locations",
    path: "/location",
    image: "/assets/location.webp",
  },
  {
    title: "Episodes",
    description: "List of episodes",
    path: "/location",
    image: "/assets/episodes.webp",
  },
];

export default function Home() {
  return (
    <>
      <h1 className='sr-only'>Rick and Morty</h1>
      <Image
        src='/assets/Rick-and-Morty.webp'
        alt='Rick and morty logo'
        width={220}
        height={50}
        className='z-10 absolute top-0 left-5 -rotate-12'
      />
      <main className='grid grid-cols-1 md:grid-cols-2 row-auto m-auto h-screen bg-foreground/10'>
        {topics.map((topic, i) => (
          <TopicCard
            key={topic.title}
            description={topic.description}
            image={topic.image}
            path={topic.path}
            title={topic.title}
            className={`${i === topics.length - 1 ? "md:col-span-2" : ""}`}
          />
        ))}
      </main>
    </>
  );
}
