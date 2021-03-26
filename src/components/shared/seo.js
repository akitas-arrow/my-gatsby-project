import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"
import ogpImage from '../../images/tomoeya-ogp.png'
import PropTypes from "prop-types"

const SEO = ({ title, description, article, noindex }) => {
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    defaultDescription,
    siteUrl
  } = site.siteMetadata

  const { pathname } = useLocation()

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${ogpImage}`,
    url: `${siteUrl}${pathname}`
  }
  return (
    <Helmet>
      {(noindex ? true : null) && <meta name="robots" content="noindex" />}
      {(noindex ? true : null) && <meta name="googlebot" content="noindex" />}
      <html lang="ja" />
      <link rel="canonical" href={seo.url} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  article: false,
}

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
      }
    }
  }
`