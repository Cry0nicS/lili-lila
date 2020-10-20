import type {ReactElement} from "react";
import React from "react";

const Title = ({title}: {title?: string | null}): ReactElement => (
    <div className="section-title">
        <h2>{title ?? "Lavanda Lili Lila"}</h2>
    </div>
);

export default Title;
