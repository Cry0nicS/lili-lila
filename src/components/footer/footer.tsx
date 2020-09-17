import React from "react";
import SocialLinks from "../../constants/social-links";
import type {ReactElement} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "gatsby";

import styles from "./footer.module.scss";

const Footer = (): ReactElement => (
    <footer className={styles.footer}>
        <SocialLinks styleClass={styles.icons} />
        <div className={styles.copyright}>
            <span>Atelier Lavanda Lili Lila SRL</span>
            <span>
                <FontAwesomeIcon icon={["far", "copyright"]} size="sm" />
            </span>
            <span>{new Date().getFullYear()}</span>
        </div>
        <span>
            <Link to="/tos">Termeni si conditii</Link>
        </span>
    </footer>
);

export default Footer;
