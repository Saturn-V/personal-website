import React from "react";

// import utilStyles from "@/app/utilities.module.css";
import styles from "./index.module.css";

interface Props {
    className?: string
    children?: JSX.Element
}

const Card: React.FC<Props> = ({
    className,
    children,
}) => {
    return (
        <div className={[styles.Card, className].filter(Boolean).join(" ")}>
            {children}
        </div>
    );
};

export default Card;
