import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Image from "next/image";

function Track(track) {
  return (
    <div className="flex flex-row items-center mb-8">
      <p className="w-4 text-center text-sm font-bold text-gray-400 dark:text-gray-200">
        {track.ranking}
      </p>
      <div className="w-16 flex flex-col pl-3">
        <Image
          alt="Spotify"
          className="w-16 h-16"
          height={60}
          width={60}
          src={track.albumImageUrl}
        />
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
    </div>
  );
}

export default function TopTracks() {
  const { data } = useSWR("/api/top-tracks", fetcher);

  if (!data) {
    return null;
  }

  return data.tracks.map((track, index) => (
    <Track ranking={index + 1} key={track.songUrl} {...track} />
  ));
}
