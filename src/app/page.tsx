import { ChangeTheme } from "@/components/change-theme";
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
    path: "/location",
    image: "/assets/episodes.webp",
  },
];

export default function Home() {
  return (
    <>
      <Image
        src='/assets/Rick-and-Morty.webp'
        alt='Rick and morty logo'
        width={220}
        height={50}
        className='-rotate-12 -top-4 left-4 fixed'
      />
      <header className='fixed top-4 right-4 z-10'>
        <ChangeTheme />
      </header>

      <h1 className='sr-only'>Rick and Morty</h1>
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
