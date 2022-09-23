import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import useSound from 'use-sound'
import ActiveLink from './ActiveLink'

import { motion } from 'framer-motion'

export default function Container(props) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'water 🦦 – Developer, writer, creator.',
    description: `Front-end developer, blog writer, and some kind of creator.`,
    image: 'https://ajiang.co/img/banner.png',
    type: 'website',
    ...customMeta,
  }

  const [playOn] = useSound('/sounds/switch-on.mp3', { volume: 0.5 })
  const [playOff] = useSound('/sounds/switch-off.mp3', { volume: 0.5 })

  // darkMode toggle animation
  const trans = {
    type: 'spring',
    damping: 10,
    mass: 0.75,
    stiffness: 100,
  }
  const vRotate = {
    dark: {
      rotate: 40,
    },
    light: {
      rotate: 90,
    },
  }
  const vLine = {
    dark: {
      scale: 0,
      opacity: 0,
    },
    light: {
      scale: 1,
      opacity: 1,
    },
  }
  // maskedCircle
  const vMCircle = {
    dark: {
      cx: 12,
      cy: 4,
    },
    light: {
      cx: 30,
      cy: 0,
    },
  }
  // centerCircle
  const vCCircle = {
    dark: {
      r: 9,
    },
    light: {
      r: 5,
    },
  }

  if (!mounted) return null

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://ajiang.co${router.asPath}`} />
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

      <div className="flex flex-col w-full min-h-screen font-sans text-base antialiased text-gray-800 bg-white dark:text-slate-400 dark:bg-slate-900">
        <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-between items-center text-base w-full max-w-2xl px-5 py-4 mt-safe-top z-10">
          <a href="#skip" className="sr-only focus:not-sr-only">
            Skip to content
          </a>
          <DesktopNav />

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
                theme === 'dark' ? playOff() : playOn()
              }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                variants={vRotate}
                transition={trans}
                style={{ originX: '50%', originY: '50%' }}
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
                  // transition={trans}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ originX: '50%', originY: '50%' }}
                >
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </motion.g>
              </motion.svg>
            </button>
          </motion.div>
        </nav>
        <main id="skip">{children}</main>
      </div>
    </>
  )
}

function DesktopNav() {
  return (
    <div className="font-bold">
      <DesktopNavLink to="/">Home</DesktopNavLink>
      <DesktopNavLink to="/projects">Projects</DesktopNavLink>
      <DesktopNavLink to="/blog">Blog</DesktopNavLink>
      <DesktopNavLink to="/about">About</DesktopNavLink>
    </div>
  )
}

function DesktopNavLink({ to, children }) {
  return (
    <ActiveLink href={to} activeClassName="text-gray-900 dark:text-gray-50">
      <a className="pr-4 text-gray-600 dark:text-gray-200 hover:underline">
        {children}
      </a>
    </ActiveLink>
  )
}
