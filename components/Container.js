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

  // darkMode toggle animation
  const trans = {
    type: 'spring',
    damping: 14,
    mass: 0.75,
    stiffness: 100
  };
  const vRotate = {
    dark: {
      rotate: 40
    },
    light: {
      rotate: 90
    }
  };
  const vLine = {
    dark: {
      scale: 0
    },
    light: {
      scale: 1
    }
  };
  const vMCircle = {
    dark: {
      cx: 12,
      cy: 4
    },
    light: {
      cx: 30,
      cy: 0
    }
  };
  const vCCircle = {
    dark: {
      r: 9
    },
    light: {
      r: 5
    }
  };

  // if (!mounted) return null;

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

          {mounted && (
            <motion.div
              initial={theme === 'dark' ? 'dark' : 'light'}
              animate={theme === 'dark' ? 'dark' : 'light'}
            >
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-8 h-8 flex items-center justify-center rounded-full select-none outline-none focus:outline-none border-none"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                onMouseUp={() => {
                  theme === 'dark' ? playOff() : playOn();
                }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  variants={vRotate}
                  transition={trans}
                  className="h-6 w-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  <mask id="moon-mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <motion.circle
                      variants={vMCircle}
                      transition={trans}
                      cx="12"
                      cy="4"
                      r="9"
                      fill="black"
                    />
                  </mask>
                  <motion.circle
                    variants={vCCircle}
                    transition={trans}
                    cx="12"
                    cy="12"
                    r="9"
                    mask="url(#moon-mask)"
                  />

                  <motion.g
                    variants={vLine}
                    transition={trans}
                    stroke="currentColor"
                  >
                    <line
                      x1="12"
                      y1="1"
                      x2="12"
                      y2="3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="12"
                      y1="21"
                      x2="12"
                      y2="23"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="4.22"
                      y1="4.22"
                      x2="5.64"
                      y2="5.64"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="18.36"
                      y1="18.36"
                      x2="19.78"
                      y2="19.78"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="1"
                      y1="12"
                      x2="3"
                      y2="12"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="21"
                      y1="12"
                      x2="23"
                      y2="12"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="4.22"
                      y1="19.78"
                      x2="5.64"
                      y2="18.36"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="18.36"
                      y1="5.64"
                      x2="19.78"
                      y2="4.22"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.g>
                </motion.svg>
              </button>
            </motion.div>
          )}
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
