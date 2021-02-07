import Container from "../components/Container";
import TopTracks from "../components/TopTracks";

export default function Home() {
  return (
    <Container title="about – 阿江" description="我爱大自然">
      <div className="flex flex-col justify-center items-start max-w-2xl px-5 pt-safe-top mx-auto my-12">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-4 md:mt-8">
          My Top 10 List
        </h1>
        <TopTracks />
      </div>
    </Container>
  );
}
