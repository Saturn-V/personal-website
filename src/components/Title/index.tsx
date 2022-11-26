import React from "react";

import utilStyles from "../../util.module.css";
import styles from "./index.module.css";

export enum Size {
  Large = "Large",
  Medium = "Medium",
  Small = "Small",
}
export enum Weight {
  Heavy = "Heavy",
  Light = "Light",
  Default = "Default",
}
interface Props {
  value: string;
  size: Size;
  weight?: Weight;
  className?: string;
  gradient?: boolean;
  margin?: boolean;
  color?: string | null;
}

const DEFAULT_GRADIENT_COLOR =
  "-webkit-linear-gradient(0deg, #ffa745 0%, #fe869f 30%, #ef7ac8 45%, #a083ed 70%, #43aeff 85%)";
const Title: React.FC<Props> = ({
  value,
  size,
  weight,
  className,
  gradient,
  margin,
  color,
  children,
}) => {
  return (
    <span
      className={`${styles.Title} ${styles[size]} ${utilStyles.Debug} ${
        styles[weight || Weight.Default]
      } ${className} ${margin && styles.Margin}`}
      style={
        gradient
          ? {
              background: color || DEFAULT_GRADIENT_COLOR,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }
          : color
          ? { color }
          : void 0
      }
    >
      {value}
      {children}
    </span>
  );
};

export default Title;
