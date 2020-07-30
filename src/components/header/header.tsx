import React, {ReactElement} from "react";
import {GatsbyImageProps} from "gatsby-image";
import {graphql, useStaticQuery} from "gatsby";
import BackgroundImage from "gatsby-background-image";

import styles from "./header.module.scss";

interface ImageQuery {
    headerImage: {
        childImageSharp: GatsbyImageProps;
    };
}

const getHeaderImage = graphql`
    {
        headerImage: file(relativePath: {eq: "header/lavender-large.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1920, quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                }
            }
        }
    }
`;

const Header = (): ReactElement => {
    const {headerImage}: ImageQuery = useStaticQuery(getHeaderImage);

    return (
        <BackgroundImage
            Tag="header"
            className={styles.header}
            fluid={headerImage.childImageSharp.fluid}
            alt="Lavender">
            <div className={styles.overlay}>
                <h1>Atelier Lavanda Lili Lila</h1>
            </div>
        </BackgroundImage>
    );
};

export default Header;
