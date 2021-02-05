import Head from "next/head";
import TopTracks from "../components/TopTracks";

export default function Home() {
  return (
    <>
      <Head>
        <title>阿江 | 十大金曲</title>
      </Head>

      <div className="max-w-3xl p-4 mx-auto my-16">
        <h1 className="font-mono text-3xl w-full my-8">my top 10 list</h1>
        <TopTracks />
      </div>
    </>
  );
}
