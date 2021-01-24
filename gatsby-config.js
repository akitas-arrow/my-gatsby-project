require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: "名古屋市の家庭用・業務用の日用品の卸問屋【トモエ屋】",
    description: "トモエ屋は名古屋市中村区を拠点に洗剤、トイレットペーパー、ポリ袋など家庭用から業務用までの日用品を販売する卸問屋です。毎日必要な消耗品や日常使用する備品をお値打ち、迅速にお届けいたします。",
  },
  flags: {
  PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tomoeya-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.X_API_KEY,
        serviceId: 'test-tomoeya',
        apis: [{
          endpoint: 'news',
        }],
      },
    },
    `gatsby-plugin-styled-components`
  ],
}
