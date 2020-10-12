/* eslint-disable */
"use strict";

const path = require("path");

// Fix warning with react-dom.
exports.onCreateWebpackConfig = ({stage, actions}) => {
    if (stage.startsWith("develop")) {
        actions.setWebpackConfig({
            resolve: {
                alias: {
                    "react-dom": "@hot-loader/react-dom"
                }
            }
        });
    }
};

// Create pages dynamically.
exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;

    const result = await graphql(`
        query getArticles {
            articles: allContentfulArticle(sort: {fields: date, order: DESC}, limit: 5) {
                nodes {
                    slug
                }
            }
        }
    `);

    result.data.articles.nodes.forEach((article) => {
        createPage({
            path: `/blog/${article.slug}`, // Must be unique.
            component: path.resolve(`src/templates/article-template.tsx`),
            context: {slug: article.slug}
        });
    });
};
