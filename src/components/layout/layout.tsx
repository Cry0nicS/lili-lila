import React, {ReactElement, ReactNode} from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

import styles from "./layout.module.scss";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";

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
                <Header />
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
