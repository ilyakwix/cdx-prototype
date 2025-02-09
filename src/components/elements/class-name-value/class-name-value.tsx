import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./class-name-value.module.css";

export interface ClassNameValueProps {
  className?: string;
  children?: ReactNode;
}

export const ClassNameValue = ({
  className,
  children,
}: ClassNameValueProps) => {
  return <span className={classNames(styles.root, className)}>{children}</span>;
};
