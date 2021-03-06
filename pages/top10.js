import Container from '@/components/Container';
import TopTracks from '@/components/TopTracks';

export default function Top10() {
  return (
    <Container title="十大金曲 – 阿江" description="音乐坏品味">
      <div className="flex flex-col justify-center items-start max-w-2xl px-5 pt-safe-top mx-auto my-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-4 md:mt-8">
          My Top 10 List
        </h1>
        <TopTracks />
      </div>
    </Container>
  );
}
