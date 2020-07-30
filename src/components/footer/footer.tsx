import React, {ReactElement} from "react";

import styles from "./footer.module.scss";
import SocialLinks from "../../constants/social-links";
import {Link} from "gatsby";

const Footer = (): ReactElement => (
    <footer className={styles.footer}>
        <span>
            <Link to="/tos">Termeni si conditii</Link>
        </span>
        <span>Atelier Lavanda Lili Lila SRL &copy; {new Date().getFullYear()}</span>
        <SocialLinks styleClass={styles.icons} />
    </footer>
);

export default Footer;
