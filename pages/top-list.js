import Head from "next/head";
import TopTracks from "../components/top-tracks";

export default function Home() {
  return (
    <>
      <Head>
        <title>阿江 | 十大金曲</title>
      </Head>

      <div className="p-4">
        <h1 className="font-mono text-2xl max-w-3xl w-full my-4 mx-auto">
          my top 10 list
        </h1>
        <TopTracks />
        <div className="mb-10" />
      </div>
    </>
  );
}
