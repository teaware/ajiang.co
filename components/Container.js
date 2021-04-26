import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import useSound from 'use-sound';

import { motion, useCycle } from 'framer-motion';

const vMenu = {
  open: (height = 1000) => ({
    clipPath: `circle(${
      height * 3 + 200
    }px at 2rem calc(2rem + env(safe-area-inset-top)))`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    },
    zIndex: 0
  }),
  closed: {
    clipPath: 'circle(1px at 2rem calc(2rem + env(safe-area-inset-top)))',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    },
    transitionEnd: { zIndex: -1 }
  }
};

const vItems = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Items = () => (
  <motion.ul
    className="absolute top-0 left-0 bottom-0 w-full flex flex-col items-center justify-center"
    variants={vItems}
  >
    {links.map((link) => (
      <Item key={link.name} {...link} />
    ))}
  </motion.ul>
);
const links = [
  { to: '/', name: 'Home' },
  { to: '/blog', name: 'Blog' },
  { to: '/about', name: 'About' }
];

const vItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const Item = (link) => {
  return (
    <motion.li
      className="flex items-center w-60 h-10 mb-6 cursor-pointer"
      variants={vItem}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <NextLink href={link.to}>
        <a>{link.name}</a>
      </NextLink>
    </motion.li>
  );
};

const Path = (props) => (
  <motion.path
    className="stroke-current stroke-2"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button
    aria-label="Toggle Menu"
    type="button"
    onClick={toggle}
    className="w-8 h-8 rounded-full flex items-center justify-center select-none outline-none focus:outline-none border-none"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 -2 23 23"
      className="w-6 h-6 text-gray-700 dark:text-white"
    >
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' }
        }}
      />
    </svg>
  </button>
);

const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'water 🦦 – Developer, writer, creator.',
    description: `Front-end developer, blog writer, and some kind of creator.`,
    image: 'https://ajiang.co/img/banner.png',
    type: 'website',
    ...customMeta
  };

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const [playOn] = useSound('/sounds/switch-on.mp3', { volume: 0.5 });
  const [playOff] = useSound('/sounds/switch-off.mp3', { volume: 0.5 });

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://ajing.co${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="阿江" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@anikijiang" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="flex flex-col w-full min-h-screen font-sans text-base antialiased text-gray-800 bg-white dark:text-white dark:bg-gray-700">
        <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-between items-center text-base w-full max-w-4xl p-4 mt-safe-top z-10">
          <a href="#skip" className="sr-only focus:not-sr-only">
            Skip to content
          </a>
          {/* <div className="hidden sm:block">
            <NextLink href="/">
              <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
                Home
              </a>
            </NextLink>
            <NextLink href="/blog">
              <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
                Blog
              </a>
            </NextLink>
            <NextLink href="/about">
              <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
                About
              </a>
            </NextLink>
          </div>

          <motion.div
            className="sm:hidden"
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
          >
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.div> */}

          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-8 h-8 flex items-center justify-center rounded-full select-none outline-none focus:outline-none border-none"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            onMouseUp={() => {
              theme === 'dark' ? playOff() : playOn();
            }}
          >
            {mounted && (
              <>
                {theme === 'dark' ? (
                  <motion.svg
                    animate={{ rotate: 0 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    animate={{ rotate: 90 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                  </motion.svg>
                )}
              </>
            )}
          </button>
        </nav>
        <main id="skip">{children}</main>
        <motion.div
          className="menu"
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
        >
          <motion.div
            className="w-full h-full max-h-screen bg-indigo-300 dark:bg-indigo-800 absolute top-0 left-0 bottom-0 pt-safe-top box-content"
            variants={vMenu}
          >
            <Items />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
