import classNames from "classnames";
import styles from "./elements-tree.module.css";
import { ScrollArea } from "@radix-ui/themes";

export interface ElementsTreeProps {
  className?: string;
}

export const ElementsTree = ({ className }: ElementsTreeProps) => {
  return (
    <ScrollArea>
      <div className={classNames(styles.root, className)}>Elements Tree</div>
    </ScrollArea>
  );
};
