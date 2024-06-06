import React from "react";

import styles from "./index.module.css";
import utilStyles from "@/app/utilities.module.css";

interface Props {
  href: string;
  download?: string
  newTab?: boolean;
  children: JSX.Element
}
const Link: React.FC<Props> = ({ href, download, newTab, children }) => {
  return (
    <a
      href={href}
      className={`${styles.Link} ${utilStyles.Debug}`}
      target={(newTab && "_blank") || undefined}
      download={download || null}
    >
      {children}
    </a>
  );
};

export default Link;
