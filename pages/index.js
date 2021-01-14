import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>阿江</title>
      </Head>

      <div className="h-screen">
        <div className="h-4/5 max-h-screen relative flex flex-col items-center justify-center lg:items-stretch">
          <div className="z-10 grid justify-center ml-0 lg:self-start lg:ml-48">
            <h1 className="text-8xl text-black mb-4">water 🦦</h1>
            <p className="block self-end ml-auto text-xl font-mono">
              front-end developer
            </p>
          </div>
          <svg
            className="block w-full h-20 lg:h-40 max-h-screen fill-current text-green-900 absolute bottom-0 left-0"
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
              <use xlinkHref="#gentle-wave" x={50} y={6} />
            </g>
          </svg>
        </div>
        <div className="h-1/5  bg-green-900"></div>
      </div>
    </>
  );
}
