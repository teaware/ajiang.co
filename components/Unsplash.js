import useSWR from 'swr';
import Image from 'next/image';

import fetcher from '@/lib/fetcher';

function Img(img) {
  return (
    <Image
      alt={img.alt}
      width={img.width}
      height={img.height}
      src={img.small}
    />
  );
}

export default function Unsplash() {
  const { data } = useSWR('/api/unsplash', fetcher);

  if (!data) {
    return null;
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 my-2 w-full">
      {data.imgs.map((img) => (
        <Img key={img.id} {...img} />
      ))}
    </div>
  );
}
