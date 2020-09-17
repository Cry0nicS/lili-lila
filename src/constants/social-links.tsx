import React from "react";
import type {ReactElement} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const data = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={["fab", "facebook-square"]} size="lg" title="Facebook" />,
        url: "https://www.facebook.com/lili.lila.lavanda"
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={["fab", "instagram-square"]} size="lg" title="Instagram" />,
        url: "https://www.instagram.com/lavanda_lili_lila"
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={["fas", "envelope-square"]} size="lg" title="Email" />,
        url: "mailto:mailto:lavanda.lili.lila@gmail.com?subject=Comanda"
    },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={["fas", "phone-square"]} size="lg" title="Telefon" />,
        url: "tel:0040770942216"
    }
];

interface Props {
    styleClass?: string;
}

export default ({styleClass}: Props): ReactElement => (
    <ul className={`social-links ${styleClass ?? ""}`}>
        {data.map((social) => (
            <li key={social.id}>
                <a className="social-link" href={social.url} target="_blank" rel="noreferrer">
                    {social.icon}
                </a>
            </li>
        ))}
    </ul>
);
