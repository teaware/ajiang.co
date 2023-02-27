import '@/styles/global.css'

import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/MDXComponents'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
        <Analytics />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
