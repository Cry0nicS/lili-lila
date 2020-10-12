import type {ReactElement} from "react";
import React from "react";
import {Link} from "gatsby";
import type {Document} from "@contentful/rich-text-types";
import type {FluidObject} from "gatsby-image";
import Image from "gatsby-image";

import styles from "./article-box.module.scss";

export interface ArticleProps {
    id: string;
    title: string;
    subtitle: string;
    slug: string;
    date: string;
    coverPhoto: {fluid: FluidObject};
    description: {description: string};
    content?: {childContentfulArticleContentRichTextNode: {json: Document}};
}

const ArticleBox = ({...article}: ArticleProps): ReactElement => (
    <Link to={`/blog/${article.slug}`} className={styles.article} key={article.id}>
        <article>
            <Image className={styles.coverPhoto} fluid={article.coverPhoto.fluid} />
            <div className={styles.card}>
                <h2 className={styles.title}>{article.title}</h2>
                <h3 className={styles.subheader}>{article.subtitle}</h3>
                <span className={styles.description}>{article.description.description}</span>
            </div>
        </article>
    </Link>
);

export default ArticleBox;
