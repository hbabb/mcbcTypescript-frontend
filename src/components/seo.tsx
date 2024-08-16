// mcbcTypescript/frontend/src/components/seo.tsx

import { Helmet } from 'react-helmet-async'

interface SEOprops {
  title: string
  description: string
  keywords: string
  name: string
  type: string
}

export default function SEO({
  title,
  description,
  keywords,
  name,
  type,
}: SEOprops) {
  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={name} />
      <meta name="type" content={type} />
      {/* Facebook Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
    </Helmet>
  )
}
