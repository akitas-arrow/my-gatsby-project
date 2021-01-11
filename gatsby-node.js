const path = require('path');
const { paginate } = require("gatsby-awesome-pagination");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/Templates/BlogDetail.js')
    const blogsTemplate = path.resolve('./src/Templates/Blogs.js')

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

    result.data.allMicrocmsNews.edges.forEach(edge => {
        createPage({
            path: `news/${edge.node.newsId}`,
            component: blogTemplate,
            context: {
                slug: edge.node.newsId,
            },
        });
    });
};
