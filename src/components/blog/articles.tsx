import type {ReactElement} from "react";
import React from "react";

import styles from "./articles.module.scss";
import Title from "../Utilities/page-title";
import ArticleBox from "./article-box";

import type {ArticleProps} from "./article-box";

interface ArticlesProps {
    title?: string;
    articles: ArticleProps[];
}

const Articles = ({articles, title}: ArticlesProps): ReactElement => {
    const articleList = articles.map((article) => <ArticleBox key={article.id} {...article} />);

    return (
        <section className={styles.section}>
            <Title title={title} />
            <div className={styles.articles}>{articleList}</div>
        </section>
    );
};

export default Articles;
