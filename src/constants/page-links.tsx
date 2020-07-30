import React, {ReactElement} from "react";
import {Link} from "gatsby";

const data = [
    {
        id: 1,
        text: "home",
        url: "/"
    },
    {
        id: 2,
        text: "despre noi",
        url: "/about/"
    },
    {
        id: 3,
        text: "produse",
        url: "/products/"
    },
    {
        id: 4,
        text: "blog",
        url: "/blog/"
    },
    {
        id: 5,
        text: "contact",
        url: "/contact/"
    }
];

interface Props {
    styleClass: string;
}

export default ({styleClass}: Props): ReactElement => (
    <ul className={`page-links ${styleClass || ""}`}>
        {data.map((link) => (
            <li className="page-link" key={link.id}>
                <Link to={link.url}>{link.text}</Link>
            </li>
        ))}
    </ul>
);
