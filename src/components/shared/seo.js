import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery} from "gatsby"

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const { defaultTitle, defaultDescription } = site.siteMetadata
  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
  }
  return (
    <Helmet>
      <meta name="robots" content="noindex,nofollow" />
      <html lang="ja" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </Helmet>
  )
}

export default SEO

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
      }
    }
  }
`