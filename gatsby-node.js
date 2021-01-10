const path = require('path');
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/Templates/BlogDetail.js')

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
