const path = require('path');
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/Templates/BlogDetail.js')

    const result = await graphql(
        `
            {
            allMicrocmsNews(sort: { fields: [createdAt], order: DESC }) {
                edges {
                    node {
                        id
                    }
                }
            }
            }
        `
    );
    
    if (result.errors) {
        throw result.errors;
    }
    
    result.data.allMicrocmsNews.edges.forEach(edge => {
        createPage({
            path: `news/${edge.node.id}`,
            component: blogTemplate,
            context: {
                slug: edge.node.id,
            },
        });
    });
};
