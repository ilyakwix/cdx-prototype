import { ScrollArea } from "@radix-ui/themes";
import classNames from "classnames";
import styles from "./computed-styles-panel.module.css";

export interface ComputedStylesPanelProps {
  className?: string;
}

export const ComputedStylesPanel = ({
  className,
}: ComputedStylesPanelProps) => {
  return (
    <ScrollArea>
      <div className={classNames(styles.root, className)}>Computed</div>
    </ScrollArea>
  );
};
