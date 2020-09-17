import CookieConsent from "react-cookie-consent";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import React from "react";
import Sidebar from "../sidebar/sidebar";
import type {ReactElement, ReactNode} from "react";
import {Link} from "gatsby";

import styles from "./layout.module.scss";

interface Props {
    children: ReactNode;
}

const Layout = ({children}: Props): ReactElement => {
    const [isSidebarVisible, setSidebarVisibility] = React.useState(false);

    const toggleSidebar = (): void => {
        setSidebarVisibility(!isSidebarVisible);
    };

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <Navbar toggleSidebar={toggleSidebar} />
                <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
                <main>{children}</main>
            </div>
            <Footer />
            <CookieConsent
                location="bottom"
                buttonText="Sunt de acord"
                cookieName="gatsby-gdpr-google-analytics"
                style={{background: "#c5d0dd"}}
                contentStyle={{color: "#2c394a", fontSize: "13px"}}
                buttonStyle={{background: "#2c394a", color: "#dcdcdd"}}>
                Acest website folosește cookie-uri pentru a furniza vizitatorilor o experiență de
                navigare mai buna.
                <Link
                    to="/tos"
                    className={styles.cookiesInfo}
                    activeClassName={styles.cookiesHideInfo}>
                    Detalii
                </Link>
            </CookieConsent>
        </div>
    );
};

export default Layout;
