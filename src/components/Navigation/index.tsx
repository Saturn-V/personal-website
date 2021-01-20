import React from "react";

import Title, { Size, Weight } from "../Title";

import utilStyles from "../../util.module.css";
import styles from "./index.module.css";

interface Props {}

export function Navigation(_props: Props) {
  return (
    <div className={`${styles.Navigation} ${utilStyles.Debug}`}>
      <Title value="Alex Peña." size={Size.Large} weight={Weight.Heavy} gradient/>
      <div className={styles.NavLinks}></div>
    </div>
  );
}
