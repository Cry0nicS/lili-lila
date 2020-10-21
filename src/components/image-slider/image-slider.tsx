import BackgroundImage from "gatsby-background-image";
import React from "react";
import type {FluidObject} from "gatsby-image";
import type {ReactElement} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {graphql, useStaticQuery} from "gatsby";

import styles from "./image-slider.module.scss";

interface ImageQuery {
    data: {
        nodes: Array<{
            image: {
                fluid: FluidObject;
            };
        }>;
    };
}

const getImages = graphql`
    {
        data: allContentfulWallpaper(sort: {order: DESC, fields: createdAt}, limit: 5) {
            nodes {
                image {
                    fluid(maxWidth: 1920, quality: 80) {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
    }
`;

const ImageSlider = (): ReactElement => {
    const {
        data: {nodes}
    }: ImageQuery = useStaticQuery(getImages);

    const fluidImages = nodes.map((node) => node.image.fluid);

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
        // TODO: parameterize this component in order to make it more generic and reusable.
        <BackgroundImage
            Tag="header"
            className={styles.header}
            fluid={fluidImages[imageIndex]}
            alt="Lavender image slider">
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
