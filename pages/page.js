import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>阿江</title>
      </Head>

      <Container size="some">
        <Section>
          <SectionTitle link="/projects">Projects</SectionTitle>
          <SectionBody>
            <p>
              I'm currently working on{' '}
              <a href="https://miragejs.com/">Mirage JS</a>, an API mocking
              library that lets frontend developers build complete features
              without touching their backend APIs.{' '}
            </p>
            <p className="mt-6">
              I also run <a href="https://embermap.com/">embermap.com</a> where
              I make videos about design, development and testing using
              Ember.js, along with my friend{' '}
              <a href="https://twitter.com/ryantotweets">Ryan Toronto</a>.
            </p>
          </SectionBody>
        </Section>
      </Container>

      <div>
        <div className="mx-auto mt-16 xl:max-w-6xl">
          <ImageCard
            src="/images/new-york.jpeg"
            title="New York City"
            date="2015–Present"
            width={5567}
            height={3132}
          />
          <div className="flex xl:mt-10 xl:-mx-6">
            <div className="w-1/2 xl:px-6">
              <ImageCard
                src="/images/burlington-square.jpeg"
                title="Burlington"
                date="2014–2015"
                width={2448}
                height={2448}
              />
            </div>
            <div className="w-1/2 xl:px-6">
              <ImageCard
                src="/images/boston-square.jpg"
                title="Boston"
                date="2010–2014"
                width={3456}
                height={3456}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16" />
    </>
  );
}

function Container({ size, children }) {
  let styles = {
    small: 'max-w-sm mx-auto px-6 sm:max-w-lg md:max-w-xl lg:max-w-2xl', // Home
    some: 'max-w-xl px-6 mx-auto lg:max-w-3xl lg:px-0', // Podcast, Blog index
    measure: 'max-w-measure mx-auto', // Blog post
    large: 'max-w-2xl px-6 mx-auto md:max-w-xl' // Projects
  };

  return <div className={styles[size]}>{children}</div>;
}

function Section({ children }) {
  return <section className="mt-10 md:mt-16 lg:mt-20">{children}</section>;
}

function SectionTitle({ link, children }) {
  const T = ({ children }) => (
    <h2 className="text-2xl font-semibold text-gray-900 md:text-2xl lg:text-2-5xl">
      {children}
    </h2>
  );

  if (link) {
    return (
      <Link href={link}>
        <a className="inline-block">
          <T>
            {children}
            <Chevron className="w-4 h-4 ml-1 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          </T>
        </a>
      </Link>
    );
  } else {
    return <T>{children}</T>;
  }
}

function SectionBody({ children }) {
  return <div className="mt-2 md:mt-4 lg:mt-6">{children}</div>;
}

function Chevron(props) {
  return (
    <svg
      className={`inline fill-current ${props.className}`}
      viewBox="0 0 20 20"
    >
      <g id="Page-1" stroke="none" strokeWidth="1">
        <g id="icon-shape">
          <polygon
            id="Combined-Shape"
            points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"
          ></polygon>
        </g>
      </g>
    </svg>
  );
}

function ImageCard({ src, title, date, width, height }) {
  return (
    <div className="relative">
      <Image
        className="object-cover w-full h-full xl:rounded-lg"
        src={src}
        width={width}
        height={height}
      />
      <div className="absolute bottom-0 w-full py-2 pl-3 text-white md:pl-4 md:py-4 bg-gradient-to-t from-black.85 xl:bg-none xl:static xl:text-gray-900 xl:px-0">
        <p className="text-sm font-semibold sm:text-base xl:text-lg xl:font-medium">
          {title}
        </p>
        <p className="text-xs sm:text-sm xl:text-gray-700">{date}</p>
      </div>
    </div>
  );
}
