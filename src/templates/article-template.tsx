import React from "react";
import type {ArticleProps} from "../components/blog/article-box";
import type {ReactElement} from "react";
import {BLOCKS} from "@contentful/rich-text-types";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {graphql} from "gatsby";

import Metadata from "../components/metadata/metadata";
import Layout from "../components/layout/layout";

import styles from "./article-template.module.scss";

/* eslint-disable */
// Temporary code snippet to render images. See https://github.com/gatsbyjs/gatsby/pull/25249.
const richTextOptions = {
    renderNode: {
        // @ts-ignore:disable-next-line
        [BLOCKS.EMBEDDED_ASSET]: (node): ReactElement => {
            const alt = node.data?.target?.fields?.title["en-US"];
            const url = node.data?.target?.fields?.file["en-US"]?.url;

            return <img className={styles.postImage} src={url} alt={alt} />;
        }
    }
};
/* eslint-enable */

const articleTemplate = ({data: {article}}: {data: {article: ArticleProps}}): ReactElement => (
    <Layout>
        <Metadata pageTitle={article.title} />
        <section className={styles.template}>
            <div className="section-center">
                <article className={styles.article}>
                    <h1>{article.title}</h1>
                    <h3>{article.subtitle}</h3>
                    <div className={styles.content}>
                        {documentToReactComponents(article.content.json, richTextOptions)}
                    </div>
                </article>
            </div>
        </section>
    </Layout>
);

export const query = graphql`
    query getArticle($slug: String) {
        article: contentfulArticle(slug: {eq: $slug}) {
            title
            subtitle
            date(formatString: "DD MMM, YYY, HH:hh")
            coverPhoto {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
            content {
                json
            }
        }
    }
`;

export default articleTemplate;
