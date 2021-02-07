import { parseISO, format } from "date-fns";

import Container from "../components/Container";

const editUrl = (slug) =>
  `https://github.com/teaware/ajiang.co/edit/main/data/blog/${slug}.mdx`;

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – 阿江记事本`}
      description={frontMatter.summary}
      image={`https://ajiang.co${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl px-5 pt-safe-top mx-auto my-12 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-4 md:mt-8">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Edit on GitHub"}
          </a>
        </div>
      </article>
    </Container>
  );
}
