import React, {ReactElement, ReactNode} from "react";
import Footer from "../footer/footer";
import CookieConsent from "react-cookie-consent";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";

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
                buttonStyle={{background: "#2c394a", color: "#dcdcdd"}}
                buttonClasses={styles.cookieAcceptButton}>
                Acest website folosește cookie-uri pentru a furniza vizitatorilor o experiență de
                navigare mai buna.
            </CookieConsent>
        </div>
    );
};

export default Layout;
