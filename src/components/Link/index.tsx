import React from "react";

import styles from "./index.module.css";
import utilStyles from "../../util.module.css";

interface Props {
  href: string;
  newTab?: boolean;
}
const Link: React.FC<Props> = ({ href, newTab, children }) => {
  return (
    <a
      href={href}
      className={`${styles.Link} ${utilStyles.Debug}`}
      target={(newTab && "_blank") || undefined}
    >
      {children}
    </a>
  );
};

export default Link;
