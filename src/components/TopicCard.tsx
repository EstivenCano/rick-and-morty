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
        "w-full h-full bg-transparent relative md:filter md:grayscale md:hover:grayscale-0 md:duration-150 border-0",
        className
      )}>
      <Image
        src={image}
        alt={`${title} image`}
        fill
        style={{ objectFit: "cover" }}
        className='-z-10'
      />
      <div className='h-full w-full flex'>
        <CardFooter className='px-4 py-2 w-full flex-wrap overflow-hidden bg-foreground/60 text-background mt-auto'>
          <div>
            <CardTitle className='text-lg md:text-xl'>{title}</CardTitle>
            <CardDescription className='truncate'>
              {description}
            </CardDescription>
          </div>
          <Button variant='outline' className='gap-2 ml-auto group' asChild>
            <Link href={path}>
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
