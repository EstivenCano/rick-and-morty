import { TopicCard } from "@/components/topic-card";
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
    path: "/episode",
    image: "/assets/episodes.webp",
  },
];

export default function Home() {
  return (
    <>
      <span className='-rotate-12 top-4 left-4 fixed w-52 h-14'>
        <Image
          src='/assets/logo.webp'
          alt='Rick and morty logo'
          fill
          priority
          style={{
            objectFit: "cover",
          }}
        />
      </span>
      <h1 className='sr-only'>Rick and Morty</h1>
      <h2 className='sr-only'>
        Information about characters, locations and episodes
      </h2>
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
