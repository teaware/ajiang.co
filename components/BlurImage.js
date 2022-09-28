import Image from 'next/image'
import { useState } from 'react'

const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export function BlurImage({ alt, src, width, height }) {
  const [isLoading, setLoading] = useState(true)
  return (
    <>
      {width ? (
        <Image
          alt={alt ? alt : ''}
          src={src}
          width={width}
          height={height}
          className={cn(
            'duration-700 ease-in-out',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      ) : (
        <Image
          alt={alt ? alt : ''}
          src={src}
          layout="fill"
          objectFit="cover"
          className={cn(
            'duration-700 ease-in-out',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      )}
    </>
  )
}
