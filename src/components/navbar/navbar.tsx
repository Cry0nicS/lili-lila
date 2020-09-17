import Img from "gatsby-image";
import PageLinks from "../../constants/page-links";
import React from "react";
import type {GatsbyImageFixedProps} from "gatsby-image";
import type {ReactElement} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {graphql, Link, useStaticQuery} from "gatsby";

import styles from "./navbar.module.scss";

interface Props {
    toggleSidebar: () => void;
}

interface LogoQuery {
    logo: {
        childImageSharp: GatsbyImageFixedProps;
    };
}

const getLogoData = graphql`
    {
        logo: file(relativePath: {eq: "logo.png"}) {
            childImageSharp {
                fixed(width: 67, height: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

const Navbar = ({toggleSidebar}: Props): ReactElement => {
    const {logo}: LogoQuery = useStaticQuery(getLogoData);

    return (
        <nav className={styles.navbar}>
            <div className={styles.center}>
                <div className={styles.header}>
                    <Link to="/">
                        <Img fixed={logo.childImageSharp.fixed} />
                    </Link>
                    <button type="button" className={styles.toggleBtn} onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={["fas", "align-right"]} size="lg" />
                    </button>
                </div>
                <PageLinks styleClass={styles.links} />
            </div>
        </nav>
    );
};

export default Navbar;
