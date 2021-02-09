import { useState } from 'react';

import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import { getAllFilesFrontMatter } from '@/lib/mdx';

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container
      title="blog – 阿江记事本"
      description="Thoughts on the software industry, programming, tech, music, and my personal life."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl px-5 pt-safe-top mx-auto my-12">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-4 md:mt-8">
          Blog
        </h1>
        <p className="mb-4">
          第一次写博客大概是2010年（或者更早）,
          大概都是记录一些无聊的日常和一点感想，目前还在线上的有这些...
        </p>
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
        <p className="mb-4">
          {`这个博客是用 Next.js 搭建，目前有 ${posts.length} 篇文章`}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!searchValue && (
          <>
            {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
              Most Popular
            </h3>
            <p>something hide when search</p> */}
          </>
        )}
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          All Posts
        </h3>
        {!filteredBlogPosts.length && 'No posts found.'}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
