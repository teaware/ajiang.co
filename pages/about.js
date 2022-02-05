import Container from '@/components/Container';

export default function About() {
  return (
    <Container title="about – 阿江" description="我爱大自然">
      <div className="flex flex-col justify-center items-start max-w-2xl px-5 pt-safe-top mx-auto my-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-4 md:mt-8">
          About
        </h1>
        <p className=" mb-4">第一次写博客大概是2010年（或者更早）</p>
        <p className="mb-4">目前还在线上的有这些...</p>
        <ul className="mb-4">
          <li>
            <a
              className="dark:text-gray-100 pb-1"
              href="https://teaware.wordpress.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              wordpress
            </a>
          </li>
          <li>
            <a
              className="dark:text-gray-100 pb-1"
              href="https://veryben.tumblr.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              tumblr
            </a>
          </li>
          <li>
            <a
              className="dark:text-gray-100 pb-1"
              href="https://blog.ajiang.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              gatsby
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}
