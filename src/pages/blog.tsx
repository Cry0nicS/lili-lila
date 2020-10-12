import type {ReactElement} from "react";
import React from "react";

import Layout from "../components/layout/layout";
import Metadata from "../components/metadata/metadata";
import {graphql, useStaticQuery} from "gatsby";
import Articles from "../components/blog/articles";
import type {ArticleProps} from "../components/blog/article-box";

interface ArticlesQuery {
    data: {articles: ArticleProps[]};
}

const articlesData = graphql`
    {
        data: allContentfulArticle(sort: {fields: date, order: DESC}, limit: 5) {
            articles: nodes {
                subtitle
                title
                id
                slug
                date(formatString: "DD MMMM, YYYY, HH:hh")
                description: description {
                    description
                }
                coverPhoto {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
    }
`;

const Blog = (): ReactElement => {
    const {
        data: {articles}
    }: ArticlesQuery = useStaticQuery(articlesData);

    return (
        <Layout>
            <Metadata pageTitle="Blog" />
            <Articles title={"Latest blog posts"} articles={articles} />
        </Layout>
    );
};

export default Blog;
