import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Location } from "@/types/location";
import Link from "next/link";

interface Props {
  location: Location;
}

export const LocationCard = ({ location }: Props) => {
  return (
    <Card className='flex flex-row max-w-full justify-between'>
      <div className='border-r-4 px-2 md:px-0 flex flex-col rounded-md border-nuclear/60 w-full overflow-hidden'>
        <CardHeader className='p-2 md:p-6 md:py-4'>
          <Link
            href={`/location/${location.id}`}
            className='hover:text-bluclear text-lg md:text-xl cursor-pointer line-clamp-2'>
            {location.name}
          </Link>
        </CardHeader>
        <CardContent className='flex flex-col p-2 md:px-6 gap-2 md:gap-4'>
          <div className='flex flex-wrap gap-1'>
            <strong className='text-sm truncate text-muted-foreground'>
              Type:
            </strong>
            <p className='text-sm truncate'>{location.type}</p>
          </div>
          <div className='flex flex-wrap gap-1'>
            <strong className='text-sm truncate text-muted-foreground'>
              Dimension:
            </strong>
            <p className='text-sm truncate capitalize'>{location.dimension}</p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
