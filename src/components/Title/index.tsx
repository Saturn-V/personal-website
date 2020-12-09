import React from "react";

import utilStyles from "../../util.module.css";
import styles from "./index.module.css";

export enum Size {
  Large = "Large",
  Medium = "Medium",
  Small = "Small"
}
export enum Weight {
  Heavy = "Heavy",
  Light = "Light",
  Default = "Default"
}
interface Props {
  value: string;
  size: Size;
  weight?: Weight;
  className?: string;
  gradient?: boolean;
}

const Title: React.FC<Props> = ({
  value,
  size,
  weight,
  className,
  gradient,
  children
}) => {
  return (
    <span
      className={`${styles.Title} ${styles[size]} ${utilStyles.Debug} ${
        styles[weight || Weight.Default]
      } ${className} ${gradient && styles.Gradient}`}
    >
      {value}
      {children}
    </span>
  );
};

export default Title;
