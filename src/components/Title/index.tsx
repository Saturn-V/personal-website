import React from "react";

import utilStyles from "@/app/utilities.module.css";
import styles from "./index.module.css";
import Link from "next/link";

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
  href?: string,
  weight?: Weight;
  className?: string;
  gradient?: boolean;
  margin?: boolean;
  color?: string | null;
  onClick?: () => void
  children?: JSX.Element
}

const DEFAULT_GRADIENT_COLOR =
  "-webkit-linear-gradient(0deg, #ffa745 0%, #fe869f 30%, #ef7ac8 45%, #a083ed 70%, #43aeff 85%)";
const Title: React.FC<Props> = ({
  value,
  size,
  href,
  weight,
  className,
  gradient,
  margin,
  color,
  onClick,
  children,
}) => {
  if (!!href) {
    return <Link href={href}
      className={`${styles.Title} ${styles[size]} ${utilStyles.Debug} ${styles[weight || Weight.Default]
        } ${className} ${margin && styles.Margin}`}
      style={
        gradient
          ? {
            background: color || DEFAULT_GRADIENT_COLOR,
            filter: "saturate(2)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            backgroundSize: "150% auto",
            WebkitTextFillColor: "transparent",
          }
          : color
            ? { color }
            : void 0
      }
      onClick={onClick}
    >
      {value}
      {children}
    </Link>
  }
  return (
    <span
      className={`${styles.Title} ${styles[size]} ${utilStyles.Debug} ${styles[weight || Weight.Default]
        } ${className} ${margin && styles.Margin}`}
      style={
        gradient
          ? {
            background: color || DEFAULT_GRADIENT_COLOR,
            filter: "saturate(2)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            backgroundSize: "150% auto",
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
