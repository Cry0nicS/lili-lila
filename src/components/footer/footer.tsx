import React, {ReactElement} from "react";

import styles from "./footer.module.scss";
import SocialLinks from "../../constants/social-links";
import {Link} from "gatsby";

const Footer = (): ReactElement => (
    <footer className={styles.footer}>
        <SocialLinks styleClass={styles.icons} />
        <span>Atelier Lavanda Lili Lila SRL &copy; {new Date().getFullYear()}</span>
        <span>
            <Link to="/tos">Termeni si conditii</Link>
        </span>
    </footer>
);

export default Footer;
