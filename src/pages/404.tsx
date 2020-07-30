import {FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import {Link} from "gatsby";
import React, {ReactElement} from "react";

import Layout from "../components/layout/layout";
import Metadata from "../components/metadata/metadata";
import Placeholder from "../components/placeholder/placeholder";

const NotFound = (): ReactElement => {
    const placeholderIcon: FontAwesomeIconProps = {
        icon: ["fas", "seedling"],
        size: "6x",
        color: "#be9fe1"
    };

    const returnToIndexLink = <Link to="/">Click pentru a te intoarce in raiul cu lavanda...</Link>;

    return (
        <Layout>
            <Metadata pageTitle="404" />
            <Placeholder
                icon={placeholderIcon}
                title={"Pagina pe  care o cauti, probabil, nu contine lavanda..."}
                description={returnToIndexLink}
                height={"91vh"}
            />
        </Layout>
    );
};

export default NotFound;
