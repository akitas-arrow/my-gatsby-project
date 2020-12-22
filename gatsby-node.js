// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions;

//     const result = await graphql(
//         `
//             {
//             allMicrocmsPost(sort: { fields: [createdAt], order: DESC }) {
//                 edges {
//                     node {
//                         id
//                         createdAt
//                     }
//                 }
//             }
//             }
//         `
//     );
    
//     if (result.errors) {
//         throw result.errors;
//     }
    
//     result.data.allMicrocmsPost.edges.forEach((post, index) => {
//         createPage({
//             path: post.node.id,
//             component: path.resolve('./src/templates/blog-post.js'),
//             context: {
//             slug: post.node.id,
//             },
//         });
//     });
// };
