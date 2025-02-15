import classNames from "classnames";
import styles from "./elements-tree.module.css";

export interface ElementsTreeProps {
  className?: string;
}

export const ElementsTree = ({ className }: ElementsTreeProps) => {
  return (
    <div className={classNames(styles.root, className)}>Elements Tree</div>
  );
};
