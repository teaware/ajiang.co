import Link from 'next/link'
import { BlurImage } from './BlurImage'

const CustomLink = props => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const MDXComponents = {
  BlurImage,
  a: CustomLink,
}

export default MDXComponents
