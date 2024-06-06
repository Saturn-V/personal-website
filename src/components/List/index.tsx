import React from "react";

import utilStyles from "@/app/utilities.module.css";
import styles from "./index.module.css";

export function List() {
  return (
    <ul className={`${styles.List} ${utilStyles.Debug}`}>
      <li>About</li>
      <hr />
      <li>Products</li>
      <hr />
      <li>Projects</li>
      <hr />
      <li>Blog</li>
      <hr />
      <li>contact</li>
    </ul>
  );
}
