import { ScrollArea } from "@radix-ui/themes";
import classNames from "classnames";
import styles from "./props-panel.module.css";

export interface PropsPanelProps {
  className?: string;
}

export const PropsPanel = ({ className }: PropsPanelProps) => {
  return (
    <ScrollArea>
      <div className={classNames(styles.root, className)}>Props</div>
    </ScrollArea>
  );
};
