// Import font-awesome icons.
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";
import ImageSlider from "../components/image-slider/image-slider";
import Layout from "../components/layout/layout";
import Metadata from "../components/metadata/metadata";
import React from "react";
import type {ReactElement} from "react";

library.add(fab, fas, far);

const IndexPage = (): ReactElement => (
    <Layout>
        <ImageSlider />
        <Metadata pageTitle="Atelier lavanda" />
    </Layout>
);

export default IndexPage;
