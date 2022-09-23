import Image from 'next/image'
import { useState } from 'react'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function BlurImage({ image }) {
  const [isLoading, setLoading] = useState(true)
  return (
    <a href={image.href} className="group">
      <div className="w-full aspect-w-8 aspect-h-5 bg-gray-200 rounded-lg overflow-hidden md:aspect-w-1 md:aspect-h-1 xl:aspect-w-8 xl:aspect-h-5">
        <Image
          alt={image.name}
          src={image.imageSrc}
          layout="fill"
          objectFit="cover"
          className={cn(
            'group-hover:opacity-75 duration-700 ease-in-out',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-md font-medium">{image.name}</h3>
      <p className="mt-1 text-sm ">{image.info}</p>
    </a>
  )
}
