import Container from '@/components/Container';
import Playing from '@/components/Playing';

export default function Home() {
  return (
    <Container title="阿江" description="be water my friend">
      <div className="h-screen overflow-x-hidden">
        <div className="h-3/4 relative flex flex-col items-center justify-center lg:items-stretch">
          <div className="grid justify-center px-4 ml-0 lg:self-start lg:ml-48">
            <h1 className="text-6xl lg:text-8xl text-black mb-4 dark:text-gray-100">
              water <span className="animate-otter inline-block">🦦</span>
            </h1>
            <p className="block self-end ml-auto text-xl font-mono">
              <a
                className="dark:text-gray-100 pb-1 border-double border-b-4 border-transparent hover:border-current transition-all duration-500 ease-in-out"
                href="https://blog.ajiang.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                go to my blog
              </a>
            </p>
          </div>
          <svg
            className="absolute bottom-0 left-0 block w-full h-20 lg:h-40 max-h-screen fill-current text-green-600 dark:text-green-900"
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
        <div className="h-1/4 bg-green-600 dark:bg-green-900 -mt-px pb-px box-content relative">
          <div className="absolute left-1/2 -top-12 transform -translate-x-1/2">
            <Playing />
          </div>
        </div>
      </div>
    </Container>
  );
}
