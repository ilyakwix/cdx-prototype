import classNames from "classnames";
import styles from "./prop-item.module.css";

export interface PropItemProps {
  className?: string;
}

export const PropItem = ({ className }: PropItemProps) => {
  return <div className={classNames(styles.root, className)}>Prop item</div>;
};
