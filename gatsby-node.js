const path = require('path');
const { paginate } = require("gatsby-awesome-pagination");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/Templates/BlogDetail.js');
    const blogsTemplate = path.resolve('./src/Templates/Blogs.js');

    const result = await graphql(`
        {
            allMicrocmsNews(sort: { fields: [date], order: DESC }) {
                edges {
                    node {
                        newsId
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    const news = result.data.allMicrocmsNews.edges

    news.forEach(edge => {
        createPage({
            path: `news/${edge.node.newsId}`,
            component: blogTemplate,
            context: {
                slug: edge.node.newsId,
            },
        });
    });

    paginate({
        createPage, // The Gatsby `createPage` function
        items: news, // An array of objects
        itemsPerPage: 8, // How many items you want per page
        pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/news" : "/news/page"), // Creates pages like `/blog`, `/blog/2`, etc
        component: blogsTemplate, // Just like `createPage()`
    })
};
