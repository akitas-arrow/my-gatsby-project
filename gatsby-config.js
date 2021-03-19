require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: "名古屋市の家庭用・業務用の日用品の卸問屋【トモエ屋】",
    description: "トモエ屋は名古屋市中村区を拠点に洗剤、トイレットペーパー、ポリ袋など家庭用から業務用までの日用品を販売する卸問屋です。毎日必要な消耗品や日常使用する備品をお値打ち、迅速にお届けいたします。",
    siteUrl: `https://peaceful-rosalind-053cd5.netlify.app`,
    url: `https://peaceful-rosalind-053cd5.netlify.app`,
  },
  flags: {
  PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
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
    `gatsby-background-image-es5`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `名古屋市の家庭用・業務用の日用品の卸問屋【トモエ屋】`,
        short_name: `トモエ屋`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/tomoeya-icon.png`,
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.X_API_KEY,
        serviceId: process.env.serviceId,
        apis: [{
          endpoint: 'news',
        }],
      },
    },
    `gatsby-plugin-styled-components`
  ],
}
