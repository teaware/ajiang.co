import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import Image from 'next/image';

function Track(track) {
  return (
    <li className="flex flex-row items-center mb-8">
      <div className="w-16 flex flex-col">
        <a href={track.songUrl} target="_blank" rel="noopener noreferrer">
          <Image
            alt="Spotify"
            className="w-16 h-16"
            height={60}
            width={60}
            src={track.albumImageUrl}
          />
        </a>
      </div>
      <div className="flex flex-col pl-3">
        <a
          className="font-medium text-gray-900 dark:text-white truncate w-60 md:w-full overflow-hidden"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <p className="text-gray-500 dark:text-gray-300 mb-4 truncate w-60 md:w-full overflow-hidden">
          {track.artist}
        </p>
      </div>
    </li>
  );
}

export default function TopTracks() {
  const { data } = useSWR('/api/top-tracks', fetcher);

  if (!data) {
    return null;
  }

  return (
    <ul className="list-disc list-inside my-4 lg:my-8">
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </ul>
  );
}
