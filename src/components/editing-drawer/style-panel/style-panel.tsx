import { ScrollArea } from "@radix-ui/themes";
import classNames from "classnames";
import styles from "./style-panel.module.css";

export interface StylePanelProps {
  className?: string;
}

export const StylePanel = ({ className }: StylePanelProps) => {
  return (
    <ScrollArea>
      <div className={classNames(styles.root, className)}>Styles</div>
    </ScrollArea>
  );
};
