import { useState } from 'react'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function TopTracks() {
  const { data, error } = useSWR('/api/top-tracks', fetcher)

  const isLoading = !data && !error
  const [loadingImage, setLoadingImage] = useState(true)
  function cn(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="my-4 lg:my-8">
      {isLoading ? (
        <>
          <div className="mb-8">
            <div className="animate-pulse">
              <SkeletonTrack type="long" />
            </div>
          </div>
          <div className="mb-8">
            <div
              className="animate-pulse"
              style={{
                animationFillMode: 'backwards',
                animationDelay: '150ms',
              }}
            >
              <SkeletonTrack type="short" />
            </div>
          </div>
          <div className="mb-8">
            <div
              className="animate-pulse"
              style={{
                animationFillMode: 'backwards',
                animationDelay: '300ms',
              }}
            >
              <SkeletonTrack type="long" />
            </div>
          </div>
        </>
      ) : (
        <>
          {data.tracks.map((track, i) => (
            <motion.div
              variants={{
                hidden: (i) => ({
                  opacity: 0,
                  y: -50 * i,
                }),
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.025,
                  },
                }),
              }}
              initial="hidden"
              animate="visible"
              custom={i}
              ranking={i + 1}
              key={track.songUrl}
              className="flex flex-row items-center mb-8"
            >
              <div className="flex flex-col">
                <a
                  href={track.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-16 h-16 shadow-lg relative">
                    <Image
                      alt="Spotify"
                      layout="fill"
                      objectFit="cover"
                      src={track.albumImageUrl}
                      className={cn(
                        'group-hover:opacity-75 duration-700 ease-in-out rounded-sm',
                        loadingImage
                          ? 'grayscale blur-2xl scale-110'
                          : 'grayscale-0 blur-0 scale-100'
                      )}
                      onLoadingComplete={() => setLoadingImage(false)}
                    />
                  </div>
                </a>
              </div>
              <div className="flex flex-col pl-3">
                <a
                  className="font-medium text-gray-900 dark:text-white truncate w-52 sm:w-full overflow-hidden"
                  href={track.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {track.title}
                </a>
                <p className="text-gray-500 dark:text-gray-300 mb-3 truncate w-52 sm:w-full overflow-hidden">
                  {track.artist}
                </p>
              </div>
            </motion.div>
          ))}
        </>
      )}
    </div>
  )
}

function SkeletonTrack({ type = 'short' }) {
  return (
    <div className="flex">
      <div className="w-16 h-16 mr-3 bg-gray-200 rounded-sm" />

      <div className="flex flex-col flex-1 w-60">
        <div className="w-1/3 h-4 mt-1 bg-gray-200 rounded" />

        <div className="mt-1 mb-1 space-y-1">
          {type === 'short' ? (
            <div className="w-1/2 h-4 pt-1">
              <div className="h-full bg-gray-200 rounded"></div>
            </div>
          ) : (
            <div className="w-11/12 h-4 pt-1">
              <div className="h-full bg-gray-200 rounded"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
