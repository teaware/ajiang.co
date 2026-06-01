import Container from '@/components/Container'

export default function About() {
  return (
    <Container title="about – 阿江" description="我爱大自然">
      <div className="flex flex-col justify-center items-start max-w-2xl px-5 pt-safe-top mx-auto my-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mt-4 mb-8 md:mt-8">
          About
        </h1>
        <p className="mb-4">默默无闻的海獭🦦</p>
        <p className="mb-4">每次看深夜食堂 眼泪都会不争气地从嘴角流下来</p>
      </div>
    </Container>
  )
}
