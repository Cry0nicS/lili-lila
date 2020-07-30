/* eslint-disable @typescript-eslint/naming-convention,@typescript-eslint/restrict-template-expressions */
"use strict";

// Configure environment variables.
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
    siteMetadata: {
        author: "@Cry0nicS",
        description:
            "Atelier Lavanda Lili Lila crează decorațiuni și produse handmade pe bază de lavandă din cultura proprie."
            + "Tu ai avut grija de tine astăzi?",
        image: "/images/cover.jpg",
        keywords: "Lavanda, cadouri personalizate, handmade, Sibiu",
        language: "ro",
        siteUrl: "https://lili-lila.ro/",
        social: {
            facebook: "lili.lila.lavanda"
        },
        title: "lili-lila.ro"
    },
    plugins: [
        "gatsby-plugin-scss-typescript",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`
            }
        },
        "gatsby-plugin-typescript",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Atelier Lavanda Lili Lila",
                short_name: "Lili-Lila",
                start_url: "/",
                display: "minimal-ui",
                icon: "src/images/favicon.png" // This path is relative to the root of the site.
            }
        },
        {
            resolve: "gatsby-plugin-prefetch-google-fonts",
            options: {
                fonts: [
                    {
                        family: "Martel",
                        variants: ["400", "500", "700"]
                    },
                    {
                        family: "Karla",
                        variants: ["400", "500", "700"]
                    }
                ]
            }
        }
    ]
};
