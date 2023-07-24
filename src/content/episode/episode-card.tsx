import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { Episode } from "@/types/episode";
import Link from "next/link";

interface Props {
  episode: Episode;
}

export const EpisodeCard = ({ episode }: Props) => {
  const [season, chapter] = episode.episode.split("E");
  return (
    <Card className='flex flex-row max-w-full justify-between'>
      <div className='border-r-4 px-2 md:px-0 flex flex-col rounded-md border-nuclear/60 w-full overflow-hidden'>
        <CardHeader className='p-2 md:p-6 md:py-4'>
          <Link
            href={`/episode/${episode.id}`}
            className='hover:text-bluclear text-lg md:text-xl cursor-pointer line-clamp-2'>
            {episode.name}
          </Link>
          <CardDescription className='capitalize'>
            {`Season: ${season} - Chapter: ${chapter}`}
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col p-2 md:px-6 gap-2 md:gap-4'>
          <div className='flex flex-wrap gap-1'>
            <strong className='text-sm truncate text-muted-foreground'>
              Air date:
            </strong>
            <p className='text-sm truncate'>{episode.air_date}</p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
