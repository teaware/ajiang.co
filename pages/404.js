import Link from 'next/link';

import Container from '@/components/Container';

export default function NotFound() {
  return (
    <Container title="404 – water 🦦">
      <div className="flex flex-col justify-center items-start max-w-2xl px-5 pt-safe-top mx-auto my-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-4 md:mt-8">
          404 – Not found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double check
          that URL?
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md">
            Go Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
