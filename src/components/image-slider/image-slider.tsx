import BackgroundImage from "gatsby-background-image";
import React from "react";
import type {GatsbyImageFluidProps} from "gatsby-image";
import type {ReactElement} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {graphql, useStaticQuery} from "gatsby";

import styles from "./image-slider.module.scss";

interface ImageQuery {
    allFile: {
        images: Array<{
            childImageSharp: GatsbyImageFluidProps;
        }>;
    };
}

const getImages = graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "image-slider"}}, sort: {fields: id, order: ASC}) {
            images: nodes {
                childImageSharp {
                    fluid(maxWidth: 1920, quality: 80) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                    }
                }
            }
        }
    }
`;

const ImageSlider = (): ReactElement => {
    const {
        allFile: {images}
    }: ImageQuery = useStaticQuery(getImages);

    const fluidImages = images.map((image) => image.childImageSharp.fluid);

    const [imageIndex, setImageIndex] = React.useState(0);

    React.useEffect(() => {
        const lastIndex = fluidImages.length - 1;

        if (imageIndex < 0) {
            setImageIndex(lastIndex);
        }

        if (imageIndex > lastIndex) {
            setImageIndex(0);
        }
    }, [imageIndex, fluidImages]);

    return (
        <BackgroundImage
            Tag="header"
            className={styles.header}
            fluid={fluidImages[imageIndex]}
            alt="Lavender">
            <div className={styles.overlay}>
                <button
                    type="button"
                    className={styles.prevImage}
                    onClick={(): void => setImageIndex(imageIndex - 1)}>
                    <FontAwesomeIcon icon={["fas", "chevron-left"]} />
                </button>
                <h1>Atelier Lavanda Lili Lila</h1>
                <button
                    type="button"
                    className={styles.nextImage}
                    onClick={(): void => setImageIndex(imageIndex + 1)}>
                    <FontAwesomeIcon icon={["fas", "chevron-right"]} />
                </button>
            </div>
        </BackgroundImage>
    );
};

export default ImageSlider;
