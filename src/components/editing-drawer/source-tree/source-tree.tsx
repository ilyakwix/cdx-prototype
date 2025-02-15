import classNames from "classnames";
import styles from "./source-tree.module.css";

export interface SourceTreeProps {
  className?: string;
}

export const SourceTree = ({ className }: SourceTreeProps) => {
  return <div className={classNames(styles.root, className)}>Source Tree</div>;
};
