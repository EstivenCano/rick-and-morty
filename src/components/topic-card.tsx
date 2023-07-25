import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  image: string;
  path: string;
  className?: string;
}

export const TopicCard = ({
  description,
  image,
  path,
  title,
  className,
}: Props) => {
  return (
    <Card
      className={cn(
        "w-full h-full bg-transparent relative rounded-none border-0 group overflow-hidden",
        className
      )}>
      <Image
        src={image}
        alt={`${title} image`}
        fill
        style={{ objectFit: "cover" }}
        className='-z-10 md:filter md:grayscale md:group-hover:grayscale-0 md:duration-150 group-hover:scale-105'
      />
      <div className='h-full w-full flex'>
        <CardFooter className='border-l-8 grayscale-0 border-nuclear px-4 py-2 w-full flex-wrap overflow-hidden bg-background/70 dark:bg-background/60 mt-auto'>
          <div>
            <CardTitle className='text-lg md:text-xl'>{title}</CardTitle>
            <CardDescription className='text-foreground/80'>
              {description}
            </CardDescription>
          </div>
          <Button variant='outline' className='gap-2 ml-auto group' asChild>
            <Link href={path} aria-label={`Go to ${title} page`}>
              <ArrowBigRight
                size={30}
                className='fill-bluclear group-hover:fill-nuclear stroke-foreground stroke-1'
              />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};
