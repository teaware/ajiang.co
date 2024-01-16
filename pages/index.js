import Container from '@/components/Container'

export default function Home() {
  return (
    <Container title="阿江" description="be water my friend">
      <div className="h-screen overflow-x-hidden">
        <div className="h-3/4 relative flex flex-col items-center justify-center lg:items-stretch">
          <div className="w-full max-w-2xl grid justify-center lg:justify-start px-4 mx-auto">
            <h1 className="text-6xl lg:text-8xl whitespace-nowrap text-black mb-4 dark:text-gray-100">
              water <span className="animate-otter inline-block">🦦</span>
            </h1>
            <p className="block self-end ml-auto text-xl font-mono">flows</p>
          </div>
          <svg
            className="absolute bottom-0 left-0 block w-full h-20 lg:h-40 max-h-screen fill-current text-emerald-600 dark:text-emerald-900"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                className="animate-wave"
                x={50}
                y={6}
              />
            </g>
          </svg>
        </div>
        <div className="h-1/4 bg-emerald-600 dark:bg-emerald-900 -mt-px pb-px box-content"></div>
      </div>
    </Container>
  )
}
