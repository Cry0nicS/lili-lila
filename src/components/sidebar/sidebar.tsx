import React, {ReactElement} from "react";
import PageLinks from "../../constants/page-links";
import SocialLinks from "../../constants/social-links";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from "./sidebar.module.scss";

interface Props {
    isSidebarVisible: boolean;
    toggleSidebar: () => void;
}

const Sidebar = ({isSidebarVisible, toggleSidebar}: Props): ReactElement => (
    <aside className={`${styles.sidebar} ${isSidebarVisible ? styles.showSidebar : ""}`}>
        <button className={styles.closeBtn} onClick={toggleSidebar}>
            <FontAwesomeIcon icon={["fas", "times"]} size="lg" />
        </button>
        <div>
            <PageLinks styleClass={`${isSidebarVisible ? styles.links : ""}`} />
            <SocialLinks styleClass={`${isSidebarVisible ? styles.icons : ""}`} />
        </div>
    </aside>
);

export default Sidebar;
