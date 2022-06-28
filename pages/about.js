import Container from '@/components/Container';

export default function About() {
  return (
    <Container title="about – 阿江" description="我爱大自然">
      <div className="flex flex-col justify-center items-start max-w-2xl px-5 pt-safe-top mx-auto my-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-4 md:mt-8">
          About
        </h1>
        <p className="mb-4">看深夜食堂会泪流满面😭</p>
        <p className="mb-4">不是因为感动，实在是太馋了</p>
      </div>
    </Container>
  );
}
