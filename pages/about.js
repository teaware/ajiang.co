import Container from "../components/Container";

export default function About() {
  return (
    <Container title="about – 阿江" description="我爱大自然">
      <div className="flex flex-col justify-center items-start max-w-2xl px-8 mx-auto my-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-4">
          About
        </h1>
        <p className="mb-4">关于</p>
      </div>
    </Container>
  );
}
