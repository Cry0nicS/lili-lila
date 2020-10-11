import type {ReactElement} from "react";
import React from "react";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import type {Document} from "@contentful/rich-text-types";

import Layout from "../components/layout/layout";
import Metadata from "../components/metadata/metadata";
import {graphql, useStaticQuery} from "gatsby";

import styles from "./../styles/pages/terms-of-service.module.scss";

interface TermsOfServiceQuery {
    data: {
        title: string;
        subtitle: string;
        description: {json: Document};
    };
}

const termsOfServiceData = graphql`
    {
        data: contentfulToS {
            title
            subtitle
            description {
                json
            }
        }
    }
`;

const TermsOfService = (): ReactElement => {
    const {data}: TermsOfServiceQuery = useStaticQuery(termsOfServiceData);

    return (
        <Layout>
            <Metadata pageTitle="Terms of service" />
            <div className={styles.header}>
                <h1>{data.title}</h1>
                <h3>{data.subtitle}</h3>
            </div>
            <div className={styles.content}>{documentToReactComponents(data.description.json)}</div>
        </Layout>
    );
};

export default TermsOfService;
